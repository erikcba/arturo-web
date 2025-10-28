
export default function MenuButton({ isOpen, onClick, bgColor = "bg-black" }) {
  return (
    <button
      onClick={onClick}
      className={`menu-btn ml-auto sm:mr-auto group  ${isOpen ? "active " : ""}`}
    >
      <span className={`line ${bgColor} ${isOpen ? "bg-white group-hover:rotate-90" : ""}`}></span>
      <span className={`line ${bgColor} ${isOpen ? "bg-white" : ""}`}></span>
      <span className={`line ${bgColor} ${isOpen ? "bg-white group-hover:rotate-90" : ""}`}></span>
    </button>
  );
}