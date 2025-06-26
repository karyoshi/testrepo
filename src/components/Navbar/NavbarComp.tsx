import { useState, useEffect } from "react";
import { TVBLogo } from "../../assets/TVBLogo.tsx";
import "./Navbar.css";

function NavbarComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left Logo */}
      <div className="logo-container">
        <TVBLogo />
        <div className="logo-text">TV Bodenwöhr</div>
      </div>

      {/* Centered Navigation Links */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link active">
              Startseite
            </a>
          </li>
          <li>
            <a href="/Mannschaften" className="nav-link">
              Mannschaften
            </a>
          </li>
          <li>
            <a href="/Kontakte" className="nav-link">
              Kontakte
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}

export default NavbarComp;
