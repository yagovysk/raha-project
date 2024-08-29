import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import foto1 from "../../../../assets/perfil-3.png";
import foto2 from "../../../../assets/perfil-2.png";
import foto3 from "../../../../assets/perfil-1.png";
import { FaGoogle } from "react-icons/fa";
import "./Depoiments.css";

export function Depoiments() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const depoiments = [
    {
      stars: "★★★★★",
      text: "Excelente atendimento. Adorei a paciência e a mão leve na aplicação do meu botox.",
      img: foto1,
      name: "Erick Santana",
    },
    {
      stars: "★★★★★",
      text: "Lugar top atendimento maravilhoso",
      img: foto2,
      name: "Anderson Júnior",
    },
    {
      stars: "★★★★★",
      text: "Excelente atendimento! Amei muito essa clínica, todos os profissionais são incríveis. Recomento demais!!!!",
      img: foto3,
      name: "Inaiá Silva",
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section id="depoiments" className="section-depoiments">
      <h2>Avaliações</h2>
      {isMobile ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={false}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="depoiments-cards">
          {depoiments.map((depoiment, index) => (
            <div key={index} className="card-depoiment">
              <h3>{depoiment.stars}</h3>
              <p>{depoiment.text}</p>
              <div className="about-perfil">
                <img src={depoiment.img} alt={depoiment.name} />
                <h4>{depoiment.name}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
      <a
        className="avaliation"
        href="https://www.google.com/search?q=raha+clinica&sca_esv=7b18b02be1ed2b18&rlz=1C1CHBD_pt-PTBR1101BR1101&sxsrf=ADLYWIKwQE5nDc5evy1fK_4RKoZouvzJlA%3A1724174647788&ei=N9HEZuLqL47E5OUP97Gj4Qw&ved=0ahUKEwii4qWLi4SIAxUOIrkGHffYKMwQ4dUDCA8&uact=5&oq=raha+clinica&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHJhaGEgY2xpbmljYTIOEC4YFhjHARgKGB4YrwEyCBAAGAUYDRgeMggQABgIGA0YHjIIEAAYCBgNGB4yCBAAGAgYDRgeMggQABgIGA0YHjIIEAAYCBgNGB4yCBAAGAgYDRgeMggQABgIGA0YHjIIEAAYCBgNGB4yHRAuGBYYxwEYChgeGK8BGJcFGNwEGN4EGOAE2AECSKoTUKAHWNoOcAF4AZABAJgBuwGgAeoKqgEDMC44uAEDyAEA-AEBmAIJoAKJC8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICBRAAGIAEwgINEAAYgAQYsQMYgwEYCsICBxAAGIAEGArCAg4QLhiABBjHARiOBRivAcICBxAAGIAEGA3CAgoQABiABBjHAxgNwgIIEAAYgAQYywHCAg4QLhiABBjHARjLARivAcICBhAAGA0YHsICCBAAGBYYChgewgIIEAAYChgNGB7CAgYQABgWGB7CAggQABgWGB4YD8ICChAAGAoYDRgeGA-YAwCIBgGQBgi6BgQIARgIugYGCAIQARgUkgcDMS44oAfcVA&sclient=gws-wiz-serp"
        target="_blank"
      >
        <FaGoogle /> Avalie a gente!
      </a>
    </section>
  );
}
