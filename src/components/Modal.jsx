export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className={`modal-wrap ${isOpen ? "modal-open" : ""}`}>
      <div className="dimmer" onClick={onClose}></div>
      <div className="modal-box">
        <div className="modal-content">
          <h3>팝업 타이틀이 들어갑니다.</h3>
        </div>
        <button type="button" className="btn-close" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
