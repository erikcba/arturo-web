import { useState } from "react";

export default function MenuButton({ onClick }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={toggleMenu}
      className={`menu-btn ${open ? "active" : ""}`}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}