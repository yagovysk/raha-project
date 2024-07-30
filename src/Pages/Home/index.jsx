import { Menu } from "../../Main-components/Menu/Menu";
import { About } from "./Components-home/About/About";
import { Discount } from "./Components-home/Discount/Discount";
import { Start } from "./Components-home/Start/Start";
import "./Home.css";

export function Home() {
  return (
    <main>
      <Menu />
      <Start />
      <About />
      <Discount />
    </main>
  );
}
