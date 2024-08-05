import logo from "../../../../assets/logo-background.png";
import "./Start.css";

export function Start() {
  return (
    <section className="section-start">
      <div className="start-button">
        <img
          className="logo-background"
          src={logo}
          alt="Logo da raha, um símboloarábe que significa conforto."
        />
        <h1>Sua Saúde com conforto começa aqui!</h1>
        <a
          href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria marcar uma consulta."
          target="blank"
        >
          Entre em contato!
        </a>
      </div>
    </section>
  );
}
