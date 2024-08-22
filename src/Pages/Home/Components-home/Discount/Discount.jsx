import { FaLink } from "react-icons/fa";
import "./Discount.css";

export function Discount() {
  return (
    <section>
      <div className="text-slide" id="descontos">
        <h3>
          Promoções agende pelo <div className="span">Site</div>
        </h3>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na sessão de Fisioterapia
          </p>
          <p className="paragraph-discount">garanta já 5% de desconto</p>
        </article>
        <article className="article-slide">
          <p className="discount-paragraph">
            Ganhe desconto na Limpeza de pele
          </p>
          <p className="paragraph-discount">garanta já 5% de desconto</p>
        </article>
        <a
          href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria de garantir meu desconto na fisioterapia/limpeza de pele."
          target="blank"
        >
          <FaLink className="discount-icon" /> Garanta já o seu desconto!
        </a>
      </div>
    </section>
  );
}
