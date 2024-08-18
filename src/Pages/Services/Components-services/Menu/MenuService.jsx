import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import "./MenuService.css";

export function MenuService() {
  return (
    <nav className="menu-service">
      <img className="logo-service" src={logo} alt="" />
      <Link className="init-button" to="/">
        <span>Voltar ao </span> Início
      </Link>
      <a
        href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria marcar uma consulta."
        className="menu-service-button"
        target="_blank"
      >
        Marque sua consulta!
      </a>
    </nav>
  );
}
