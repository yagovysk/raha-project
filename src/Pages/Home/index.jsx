import { Footer } from "../../Main-components/Footer/Footer";
import { Menu } from "../../Main-components/Menu/Menu";
import { About } from "./Components-home/About/About";
import { Depoiments } from "./Components-home/Depoiments/Depoiments";
import { Discount } from "./Components-home/Discount/Discount";
import { ServicesCard } from "./Components-home/Services-card/ServicesCard";
import { Start } from "./Components-home/Start/Start";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Home.css";

export function Home() {
  const [showButton, setShowButton] = useState(false);

  // Função para manipular o evento de scroll
  const handleScroll = () => {
    // Calcule a posição do meio da página
    const middleOfPage = window.innerHeight / 2;

    // Verifique se a posição do scroll é maior que o meio da página
    const isPastMiddle = window.scrollY > middleOfPage;

    // Atualize o estado com base na condição
    setShowButton(isPastMiddle);
  };

  // Adicione um ouvinte de evento de scroll quando o componente for montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <Menu />
      <Start />
      {showButton && (
        <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp className="scrolltotop-icon" />
        </button>
      )}
      <About />
      <Discount />
      <ServicesCard />
      <Depoiments />
      <Footer />
    </main>
  );
}
