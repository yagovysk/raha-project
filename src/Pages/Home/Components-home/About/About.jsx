import linha from "../../../../assets/linha-about.png";
import img from "../../../../assets/img-about.png";
import "./About.css";

export function About() {
  return (
    <section className="section-about">
      <article className="article-about">
        <h2>Sobre Nós</h2>
        <p>
          Em árabe a palavra “palavra” (pronunciada como “Raha” significa
          “conforto” ou “descanso”. Ela é usada para descrever uma sensacao de
          tranquilidade, alívio ou bem-estar físico e emocional. Também pode ser
          usada para se referir a um lugar ou situacao que proporciona conforto
          e relaxamento
        </p>
        <div className="linha-container">
          <img className="linha-about" src={linha} alt="" />
        </div>
      </article>
      <img className="img-about" src={img} alt="" />
    </section>
  );
}
