import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './App.css';

const ROOM_MODEL_URL = `${import.meta.env.BASE_URL}room.glb`;

function App() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const rendererRef = useRef(null);
  const sessionRef = useRef(null);
  const placedModelRef = useRef(null);
  const reticleRef = useRef(null);
  const hitTestSourceRef = useRef(null);
  const hitTestSourceRequestedRef = useRef(false);
  const loadedSceneRef = useRef(null);
  const [arSupported, setArSupported] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [message, setMessage] = useState('AR開始前: 床が見える場所で開始してください');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.xr.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1.4);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(0, 6, 0);
    scene.add(dirLight);

    const reticleGeometry = new THREE.RingGeometry(0.12, 0.15, 40).rotateX(-Math.PI / 2);
    const reticleMaterial = new THREE.MeshBasicMaterial({ color: 0x24c36a });
    const reticle = new THREE.Mesh(reticleGeometry, reticleMaterial);
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    reticleRef.current = reticle;
    scene.add(reticle);

    const loader = new GLTFLoader();
    loader.load(
      ROOM_MODEL_URL,
      (gltf) => {
        const roomRoot = gltf.scene;
        roomRoot.traverse((obj) => {
          if (!obj.isMesh) return;
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            obj.material.side = THREE.DoubleSide;
            obj.material.transparent = false;
            obj.material.opacity = 1;
            obj.material.depthWrite = true;
            obj.material.depthTest = true;
          }
        });
        loadedSceneRef.current = roomRoot;
        setMessage('AR開始後、床を検出したらタップで部屋を配置');
      },
      undefined,
      () => {
        setMessage('room.glb の読み込みに失敗しました');
      }
    );

    const controller = renderer.xr.getController(0);
    controller.addEventListener('select', () => {
      const modelTemplate = loadedSceneRef.current;
      const activeReticle = reticleRef.current;
      if (!modelTemplate || !activeReticle || !activeReticle.visible) return;

      if (!placedModelRef.current) {
        placedModelRef.current = modelTemplate.clone(true);
        scene.add(placedModelRef.current);
      }

      const placedModel = placedModelRef.current;
      const position = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const scale = new THREE.Vector3();

      activeReticle.matrix.decompose(position, quaternion, scale);
      placedModel.position.copy(position);
      placedModel.quaternion.copy(quaternion);
      placedModel.scale.set(1, 1, 1);
      setMessage('配置完了: 別の場所をタップで再配置');
    });
    scene.add(controller);

    const onSessionEnd = () => {
      setIsPresenting(false);
      sessionRef.current = null;
      hitTestSourceRef.current = null;
      hitTestSourceRequestedRef.current = false;
      if (reticleRef.current) reticleRef.current.visible = false;
      setMessage('AR終了');
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    renderer.setAnimationLoop((timestamp, frame) => {
      if (frame && renderer.xr.isPresenting) {
        const session = renderer.xr.getSession();
        const referenceSpace = renderer.xr.getReferenceSpace();

        if (!hitTestSourceRequestedRef.current) {
          session.requestReferenceSpace('viewer').then((viewerSpace) => {
            session.requestHitTestSource({ space: viewerSpace }).then((source) => {
              hitTestSourceRef.current = source;
            });
          });

          session.addEventListener('end', () => {
            if (hitTestSourceRef.current) {
              hitTestSourceRef.current.cancel();
              hitTestSourceRef.current = null;
            }
          });

          hitTestSourceRequestedRef.current = true;
        }

        const hitTestSource = hitTestSourceRef.current;
        if (hitTestSource && referenceSpace) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          if (hitTestResults.length > 0) {
            const pose = hitTestResults[0].getPose(referenceSpace);
            if (pose) {
              reticle.matrix.fromArray(pose.transform.matrix);
              reticle.visible = true;
            }
          } else {
            reticle.visible = false;
          }
        }

        if (renderer.xr.hasDepthSensing()) {
          setMessage((prev) =>
            prev.includes('Depth Sensing有効') ? prev : `${prev} / Depth Sensing有効`
          );
        }
      }

      renderer.render(scene, camera);
    });

    const checkSupport = async () => {
      if (!navigator.xr) {
        setMessage('この端末/ブラウザではWebXRが利用できません');
        return;
      }
      const supported = await navigator.xr.isSessionSupported('immersive-ar');
      setArSupported(supported);
      if (!supported) setMessage('この端末/ブラウザではimmersive-arが未対応です');
    };

    checkSupport();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (sessionRef.current) {
        sessionRef.current.removeEventListener('end', onSessionEnd);
        sessionRef.current.end();
      }
      renderer.setAnimationLoop(null);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const startAR = async () => {
    if (!rendererRef.current || !navigator.xr || isEntering) return;
    setIsEntering(true);

    try {
      const sessionInit = {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['depth-sensing', 'dom-overlay', 'light-estimation'],
        domOverlay: { root: overlayRef.current },
        depthSensing: {
          usagePreference: ['cpu-optimized', 'gpu-optimized'],
          dataFormatPreference: ['float32', 'luminance-alpha'],
        },
      };

      const session = await navigator.xr.requestSession('immersive-ar', sessionInit);
      sessionRef.current = session;
      session.addEventListener('end', () => {
        setIsPresenting(false);
        sessionRef.current = null;
      });

      await rendererRef.current.xr.setSession(session);
      setIsPresenting(true);
      setMessage('AR開始: 床が検出されたらタップして配置');
    } catch {
      setMessage('ARセッション開始に失敗しました');
    } finally {
      setIsEntering(false);
    }
  };

  const stopAR = async () => {
    if (!sessionRef.current) return;
    await sessionRef.current.end();
    setIsPresenting(false);
  };

  return (
    <div className="app-root" ref={overlayRef}>
      <div className="canvas-root" ref={containerRef} />
      <div className="hud">
        <p>{message}</p>
      </div>

      {!isPresenting ? (
        <button
          className="ar-action"
          onClick={startAR}
          disabled={!arSupported || isEntering}
        >
          {isEntering ? 'AR開始中...' : 'ARを開始'}
        </button>
      ) : (
        <button className="ar-action stop" onClick={stopAR}>
          ARを終了
        </button>
      )}
    </div>
  );
}

export default App;
