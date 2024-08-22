import { MenuService } from "./Components-services/Menu/MenuService.jsx";
import { AllServices } from "./Components-services/All-Services/AllServices.jsx";
import "./Services.css";
import { Footer } from "../../Main-components/Footer/Footer.jsx";

export function Services() {
  return (
    <section>
      <MenuService />
      <AllServices />
      <Footer />
    </section>
  );
}
