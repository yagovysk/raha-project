import { MenuService } from "./Components-services/Menu/MenuService.jsx";
import { AllServices } from "./Components-services/All-Services/AllServices.jsx";
import "./Services.css";

export function Services() {
  return (
    <section>
      <MenuService />
      <AllServices />
    </section>
  );
}
