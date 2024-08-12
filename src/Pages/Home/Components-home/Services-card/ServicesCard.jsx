import { Link } from "react-router-dom";
import fisioterapia from "../../../../assets/fisioterapia-ortopedica.jpg";
import orofacial from "../../../../assets/Orofacial.jpg";
import massagem from "../../../../assets/massagem.jpg";
import acupuntura from "../../../../assets/acupuntura.jpg";
import "./ServicesCard.css";

export function ServicesCard() {
  return (
    <section className="cards-section">
      <h2>Nossos Serviços</h2>
      <nav className="container-cards">
        <div className="cards">
          <article className="card-article">
            <h3>Fisioterapia Ortopédica</h3>
            <img src={fisioterapia} alt="" />
            <p>
              Essa área da fisioterapia, trata e previne lesões nos músuclos,
              prevenindo e aliviando a redução da rigidez articular, melhora do
              fortalecimento, coordenação e etc.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Fisioterapia Orofacial</h3>
            <img src={orofacial} alt="" />
            <p>
              A fisioterapia Orofacial é um campo da fisioterapia que lida com
              condições às articulações temporomandibulares, dor orofacial e
              pós-operatório de cirurgia facial.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Massoterapia</h3>
            <img src={massagem} alt="" />
            <p>
              É um método que consiste em técnicas de manipulação corporal a
              partir de movimentos manuais por um profissional que promove o
              equilíbrio corporal e energético.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Acunputura</h3>
            <img src={acupuntura} alt="" />
            <p>
              A Acupuntura é uma técnica de origem oriental, com mais de 5.000
              anos, que trata doenças físicas e emocionais. A prática envolve a
              inserção de agulhas no corpo.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
      </nav>
    </section>
  );
}
