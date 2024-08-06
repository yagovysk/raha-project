import { Link } from "react-router-dom";
import "./ServicesCard.css";

export function ServicesCard() {
  return (
    <section className="cards-section">
      <h2>Nossos Serviços</h2>
      <nav className="container-cards">
        <div className="cards">
          <article className="card-article">
            <h3>Serviço 1</h3>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              autem aliquid error debitis vero et, dolore accusamus quibusdam
              nobis aut illo beatae quam porro commodi obcaecati dolores,
              voluptates voluptas veritatis.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Serviço 1</h3>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              autem aliquid error debitis vero et, dolore accusamus quibusdam
              nobis aut illo beatae quam porro commodi obcaecati dolores,
              voluptates voluptas veritatis.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Serviço 1</h3>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              autem aliquid error debitis vero et, dolore accusamus quibusdam
              nobis aut illo beatae quam porro commodi obcaecati dolores,
              voluptates voluptas veritatis.
            </p>
          </article>
          <Link className="card-button" to="Services">
            Saiba mais!
          </Link>
        </div>
        <div className="cards">
          <article className="card-article">
            <h3>Serviço 1</h3>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              autem aliquid error debitis vero et, dolore accusamus quibusdam
              nobis aut illo beatae quam porro commodi obcaecati dolores,
              voluptates voluptas veritatis.
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
