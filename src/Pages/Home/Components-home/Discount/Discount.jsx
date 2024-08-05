import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import father from "../../../../assets/father-day.png";
import { FaArrowCircleDown } from "react-icons/fa";
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
      <div className="slide-discount">
        <img src={father} alt="" />
        <article>
          <h3>35% de desconto</h3>
          <p>Em todos os procedimentos</p>
          <p>entre 5 a 10 de agosto</p>
          <a href="" target="blank">
            <FaArrowCircleDown className="icon-arrow" />
          </a>
        </article>
      </div>
    </Carousel>
  );
}
