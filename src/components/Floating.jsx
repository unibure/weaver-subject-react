export default function Floating({ onOpen }) {
  return (
    <aside className="floating-menu">
      <button type="button" className="btn-popup" onClick={onOpen}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 9h8"></path>
          <path d="M8 13h6"></path>
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
        </svg>
        <span>POPUP</span>
      </button>
    </aside>
  );
}
