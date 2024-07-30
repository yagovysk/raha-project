import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      <div className="text-slide">
        <h3>
          Descontos do mês de <span>Agosto</span>
        </h3>
        <p>Ganhe desconto na sessão de Fisioterapia</p>
        <p>
          de <span>R$ 90,00</span> por R$ 70,00
        </p>
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
