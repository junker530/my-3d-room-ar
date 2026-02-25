import { useRef, useEffect } from 'react';
import '@google/model-viewer';
import './App.css';

function App() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    
    const handleLoad = () => {
      const materials = viewer.model?.materials;
      if (materials) {
        materials.forEach(material => {
          // 1. 裏面も描画する（前回追加した部分）
          material.doubleSided = true;

          // 2. 【今回追加】透過モードを「完全不透明（OPAQUE）」に強制設定
          // これにより、半透明な部分がなくなり、背景が透けなくなります
          material.setAlphaMode('OPAQUE');
          
          // 3. 【念のため追加】ベースカラーの透明度を1.0（不透明）にする
          if (material.pbrMetallicRoughness.baseColorFactor) {
            material.pbrMetallicRoughness.baseColorFactor[3] = 1.0;
          }
        });
      }
    };

    if (viewer) {
      viewer.addEventListener('load', handleLoad);
    }

    return () => {
      if (viewer) {
        viewer.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <div className="viewer-container">
      <model-viewer
        ref={viewerRef}
        src={`${import.meta.env.BASE_URL}room.glb`}
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement="floor"
        ar-scale="auto"
        camera-controls
        shadow-intensity="1" // 影を濃くして存在感を出す
        alt="Scaniverse 3D Room"
      >
        {/* ... ボタンなどはそのまま ... */}
        <button slot="ar-button" className="ar-button">
          ARで部屋を配置する
        </button>
        <div slot="ar-prompt">
          <p className="ar-prompt-text">床を写して平面を検出し、タップで配置</p>
          <p className="ar-prompt-subtext">別の場所をタップすると再配置（リセット）されます</p>
        </div>
      </model-viewer>
    </div>
  );
}

export default App;