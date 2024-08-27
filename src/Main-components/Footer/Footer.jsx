import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TbClockHour10 } from "react-icons/tb";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <h3 aria-label="Título do rodapé da página">
        Raha <span>Saúde e Estética</span>
      </h3>
      <nav className="footer-nav">
        <a
          href="https://www.google.com/maps/place/Cl%C3%ADnica+Raha+Sa%C3%BAde+e+Est%C3%A9tica/@-15.8116301,-48.0135618,15z/data=!4m6!3m5!1s0x935a334f2acee68b:0x6b4424c1e5e952ce!8m2!3d-15.8116301!4d-48.0135618!16s%2Fg%2F11y1w0gtzg?entry=ttu"
          target="blank_"
        >
          <FaMapMarkedAlt className="loc-icon" /> St. Hab. Vicente Pires Rua 04
          Lote 5/7, Loja 01 - Brasília - DF, 72006-290
        </a>
        <article className="convenios-article">
          <h3>Convênios Disponíveis</h3>
          <div className="container-convenios">
            <ul>
              <li>Plan - Assiste</li>
              <li>Inas (GDF Saúde)</li>
              <li>OAB</li>
              <li>AFEB BRASAL</li>
              <li>AFFEGO</li>
            </ul>
            <ul>
              <li>ANAFE SAÚDE</li>
              <li>ASETE (ASTE)</li>
              <li>BACEN</li>
              <li>BRB (SAÚDE BRB)</li>
              <li>CAEME - GO</li>
            </ul>
            <ul>
              <li>CAESAN</li>
              <li>CAMED</li>
              <li>CARE PLUS</li>
              <li>CASEC (CODEVASF)</li>
              <li>CASEMBRAPA (EMBRAPA)</li>
            </ul>
            <ul>
              <li>CNTI</li>
              <li>CONAB</li>
              <li>EMBRATEL (TELOS)</li>
              <li>EVIDA (ELETRONORTE)</li>
              <li>FAPES (BNDES)</li>
            </ul>
            <ul>
              <li>FASCAL</li>
              <li>GAMA SAÚDE</li>
              <li>GDF SAÚDE</li>
              <li>GRAVIA</li>
              <li>INAS (GDF SAÚDE)</li>
            </ul>
            <ul>
              <li>LIFE EMPRESARIAL</li>
              <li>NOTRE DAME</li>
              <li>OMINT SAÚDE</li>
              <li>PF SAÚDE (POLÍCIA FEDERAL)</li>
              <li>PLAN ASSISTE (MPU)</li>
            </ul>
            <ul>
              <li>PLAS/JMU (STM)</li>
              <li>POSTAL SAÚDE (ECT)</li>
              <li>PROASA</li>
              <li>PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)</li>
              <li>PRÓ-SAÚDE (TJDFT)</li>
            </ul>
            <ul>
              <li>PRÔ-SER (STJ)</li>
              <li>PRÓ-SOCIAL (TRF)</li>
              <li>REAL GRANDEZA (DEMAIS PLANOS)</li>
              <li>REAL GRANDEZA (SALVUS E SALUTEM)</li>
              <li>SAÚDE CAIXA</li>
            </ul>
            <ul>
              <li>SAÚDE PETROBRAS</li>
              <li>SERPRO</li>
              <li>SIS SENADO</li>
              <li>STF-MED (STF)</li>
              <li>TRE SAÚDE</li>
            </ul>
            <ul>
              <li>TRT SAÚDE</li>
              <li>UNAFISCO (SINDIFISCO)</li>
            </ul>
          </div>
        </article>
        <h3>Nossos horários</h3>
        <p>
          <TbClockHour10 className="hour-icon" /> - Seg a Sex: 08:00h - 17:00h
        </p>
        <p>
          <TbClockHour10 className="hour-icon" /> - Sábado: 08:00h - 11:00h
        </p>
      </nav>
      <article className="footer-article">
        <div className="container-social">
          <a
            href="https://wa.me/556130201781?text=Olá, vim pelo site, gostaria de mais informações."
            className="insta-button"
            target="blank_"
          >
            <IoLogoWhatsapp className="insta-icon" />
          </a>
          <a
            className="insta-button"
            href="https://www.instagram.com/rahaclin/"
            target="blank_"
          >
            <RiInstagramFill className="insta-icon" />
          </a>
        </div>

        <a
          className="tgv-button"
          aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
          href="https://togyrogroupvictory.com/"
          target="blank"
        >
          Desenvolvido por Togyro <span>Group</span> Victory
        </a>
        <h3 className="title-direitos">
          © Todos os direitos reservados a Raha Saúde e Estética.
        </h3>
      </article>
    </footer>
  );
}
