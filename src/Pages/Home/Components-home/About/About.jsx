import linha from "../../../../assets/linha-about.png";
import img from "../../../../assets/img-about.jpg";
import { FaInstagram } from "react-icons/fa";
import "./About.css";

export function About() {
  return (
    <section id="about" className="section-about">
      <div>
        <article className="article-about">
          <h2>Sobre Nós</h2>
          <p>
            ✨Em árabe, a palavra "راحة" (pronunciada como "raha") significa
            "conforto" ou "descanso". Ela é usada para descrever uma sensação de
            tranquilidade, alívio ou bem-estar físico e emocional. Também pode
            ser usada para se referir a um lugar ou situação que proporciona
            conforto e relaxamento.
          </p>
          <p>
            Portanto… raha está associada a um estado de paz e comodidade. E
            atualmente, é o que a nossa mente e corpo precisa.
          </p>
          <p>
            ✨ E viemos trazer esse conforto e paz, para cada um de vocês! • Um
            atendimento: humanizado, personalizado, com cuidado, carinho,
            conforto e paz! • Profissionais altamente qualificados, com técnicas
            personalizada e individualizadas.
          </p>
          <p>
            Aqui é o seu novo ponto de desencaso e autocuidado! Venha conhecer
            Raha!
          </p>
          <p>
            Com carinho, Dra. Bianca Campelo e Equipe Raha. A sua saúde com
            conforto, começa aqui! ✨
          </p>
        </article>
        <div className="linha-container">
          <img className="linha-about" src={linha} alt="" />
        </div>
      </div>
      <div className="container-about-img">
        <a
          href="https://www.instagram.com/rahaclin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overlay">
            <img className="img-about" src={img} alt="Imagem da clínica Raha" />
            <FaInstagram className="instagram-icon" />
          </div>
        </a>
      </div>
    </section>
  );
}
