import logo from "../../../../assets/logo-background.png";
import { Helmet } from "react-helmet";
import "./Start.css";

export function Start() {
  return (
    <section className="section-start">
      <Helmet>
        <title>Clínica Fisioterapia e Estética - Raha Saúde e Estética</title>
        <meta
          name="description"
          content="Descubra os melhores e mais confiáveis serviços de fisioterapia e estética do Distrito Federal na Raha Saúde e Estética."
        />
        <meta
          name="google-site-verification"
          content="L6Y6Sby_XlHEUMToZYAcwNCLejk51LXX2xzu-3t0Y38"
        />
        <meta
          name="keywords"
          content="fisioterapia, estética, clínica, saúde, pós-operatório, cirurgia ortognática, DF"
        />
        <meta name="author" content="Raha Saúde e Estética" />
      </Helmet>
      <div className="start-button">
        <img
          className="logo-background"
          src={logo}
          alt="Logo da Raha Saúde e Estética, representando conforto com um símbolo árabe."
        />
        <h1>Sua Saúde com Conforto Começa Aqui!</h1>
        <a
          href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria marcar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em Contato!
        </a>
      </div>
    </section>
  );
}
