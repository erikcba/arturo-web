
export default function MenuButton({ isOpen, onClick, bgColor = "bg-black" }) {
  return (
    <button
      onClick={onClick}
      className={`menu-btn mx-auto ${isOpen ? "active" : ""}`}
    >
      <span className={`line ${bgColor} ${isOpen ? "bg-white" : ""}`}></span>
      <span className={`line ${bgColor} ${isOpen ? "bg-white" : ""}`}></span>
      <span className={`line ${bgColor} ${isOpen ? "bg-white" : ""}`}></span>
    </button>
  );
}