import { FaLink } from "react-icons/fa";
import "./Discount.css";

export function Discount() {
  return (
    <section>
      <div className="text-slide" id="descontos">
        <h3>
          Promoção mês de <div className="span">Agosto</div>
        </h3>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na sessão de Fisioterapia
          </p>
          <p className="paragraph-discount">
            de <div className="price">R$ 90,00</div> por R$ 85,00
          </p>
        </article>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na Limpeza de pele
          </p>
          <p className="paragraph-discount">
            de <div className="price">R$ 80,00</div> por R$ 75,00
          </p>
        </article>
        <a
          href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria de garantir meu desconto do mês de Agosto."
          target="blank"
        >
          <FaLink className="discount-icon" /> Garanta já o seu desconto!
        </a>
      </div>
    </section>
  );
}
