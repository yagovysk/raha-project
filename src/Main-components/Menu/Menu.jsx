import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import logo from "../../assets/logo.svg";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export function Menu() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-menu">
      <img className="logo" src={logo} alt="" />
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`Menu-ul ${menuOpen ? "open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <RouterLink className="button-menu" to="/" onClick={closeMenu}>
            Início
          </RouterLink>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="about"
            onClick={closeMenu}
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="descontos"
            onClick={closeMenu}
          >
            Ofertas e descontos
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={500}
            className="button-menu"
            to="depoiments"
            onClick={closeMenu}
          >
            Depoimentos
          </Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <RouterLink
            className="button-menu"
            to="/services"
            onClick={closeMenu}
          >
            Todos os serviços
          </RouterLink>
        </li>
      </ul>
      {menuOpen && (
        <div className="menu-close-icon" onClick={closeMenu}>
          <FaTimes />
        </div>
      )}
      <a
        href="https://wa.me/556199845648?text=Olá, vim pelo site, gostaria de mais informações."
        className="button"
        target="_blank"
      >
        Marque sua consulta!
      </a>
    </nav>
  );
}
