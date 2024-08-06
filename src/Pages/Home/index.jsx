import { Menu } from "../../Main-components/Menu/Menu";
import { About } from "./Components-home/About/About";
import { Discount } from "./Components-home/Discount/Discount";
import { ServicesCard } from "./Components-home/Services-card/ServicesCard";
import { Start } from "./Components-home/Start/Start";
import "./Home.css";

export function Home() {
  return (
    <main>
      <Menu />
      <Start />
      <About />
      <Discount />
      <ServicesCard />
    </main>
  );
}
