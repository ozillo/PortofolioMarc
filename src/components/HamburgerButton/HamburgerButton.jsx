import "./HamburgerButton.css";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`menu ${isOpen ? "opened" : ""}`}
      aria-label="Toggle menu"
    >
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29 H 80 C 80,29 85,29 85,35 C 85,41 80,41 80,41 H 20" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,71 H 80 C 80,71 85,71 85,65 C 85,59 80,59 80,59 H 20" />
      </svg>
    </button>
  );
}
