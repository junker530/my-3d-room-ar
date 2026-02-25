import '@google/model-viewer';
import './App.css';

function App() {
  return (
    <div className="viewer-container">
      <model-viewer
        src={`${import.meta.env.BASE_URL}room.glb`}
        /* --- ここからARの設定 --- */
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement="floor" /* 平面（床）を検出 */
        ar-scale="auto"      /* 現実のサイズを維持 */
        /* ----------------------- */
        camera-controls
        shadow-intensity="1"
        alt="Scaniverse 3D Room"
      >
        {/* ARモードを起動するボタン */}
        <button slot="ar-button" className="ar-button">
          ARで部屋を配置する
        </button>

        {/* AR中のガイドテキスト（Android用） */}
        <div slot="ar-prompt">
          <p className="ar-prompt-text">床を写して平面を検出し、タップで配置</p>
          <p className="ar-prompt-subtext">別の場所をタップすると再配置（リセット）されます</p>
        </div>
      </model-viewer>
    </div>
  );
}

export default App;