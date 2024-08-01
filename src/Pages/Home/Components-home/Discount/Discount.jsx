import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLink } from "react-icons/fa";
import "./Discount.css";

export function Discount() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      className="carousel"
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      showDots={true} // Adiciona pontos de navegação
    >
      <div className="text-slide" id="descontos">
        <h3>
          Promoção mês de <div className="span">Agosto</div>
        </h3>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na sessão de Fisioterapia
          </p>
          <p className="paragraph-discount">
            de <div className="price">R$ 90,00</div> por R$ 70,00
          </p>
        </article>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na Limpeza de pele
          </p>
          <p className="paragraph-discount">
            de <div className="price">R$ 80,00</div> por R$ 60,00
          </p>
        </article>
        <a href="">
          <FaLink className="discount-icon" /> Garanta já o seu desconto!
        </a>
      </div>
      <div className="text-slide">
        <h3>Slide 2</h3>
        <p>Este é o conteúdo do segundo slide.</p>
      </div>
      <div className="text-slide">
        <h3>Slide 3</h3>
        <p>Este é o conteúdo do terceiro slide.</p>
      </div>
    </Carousel>
  );
}
