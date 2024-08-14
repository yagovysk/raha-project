import React, { useState } from "react";
import Modal from "react-modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import orto from "../../../assets/fisioterapia-ortopedica.jpg";
import oro from "../../../assets/Orofacial.jpg";
import masso from "../../../assets/massagem.jpg";
import acun from "../../../assets/acupuntura.jpg";
import fisio1 from "../../../assets/All-services-imgs/fisio1.jpg";
import fisio2 from "../../../assets/All-services-imgs/fisio2.jpg";
import ventosa from "../../../assets/All-services-imgs/ventosa.jpg";
import linfatica from "../../../assets/All-services-imgs/linfatica.jpg";
import pelvica from "../../../assets/All-services-imgs/pelvica.jpg";
import ortognatica from "../../../assets/All-services-imgs/ortognatica.jpeg";
import depil from "../../../assets/All-services-imgs/depilacao.jpeg";
import limp from "../../../assets/All-services-imgs/limp.jpg";
import "./All.css";

Modal.setAppElement("#root");

export function AllServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Fisioterapia Ortopédica",
      images: [orto, fisio1, fisio2],
      description: "Descrição detalhada do Serviço 1.",
    },
    {
      id: 2,
      title: "Fisioterapia Orofacial",
      images: [oro, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 3,
      title: "Massoterapia",
      images: [masso, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 4,
      title: "Acupuntura",
      images: [acun, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 5,
      title: "Ventosaterapia",
      images: [ventosa, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 6,
      title: "Drenagem Linfática",
      images: [linfatica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 7,
      title: "Fisioterapia Pélvica",
      images: [pelvica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 8,
      title: "Cirurgia Ortognática",
      images: [ortognatica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 9,
      title: "Depilação",
      images: [depil, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 10,
      title: "Limpeza de Pele",
      images: [limp, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 11,
      title: "Fisioterapia Orofacial",
      images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 12,
      title: "Fisioterapia Orofacial",
      images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 13,
      title: "Fisioterapia Orofacial",
      images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
      description: "Descrição detalhada do Serviço 2.",
    },
    {
      id: 14,
      title: "Fisioterapia Orofacial",
      images: [
        "/path/to/image1.jpg",
        "/path/to/image2.jpg",
        "/path/to/image3.jpg",
      ],
      description: "Descrição detalhada do Serviço 2.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="section-all">
      <h2>Conheça todos os nossos serviços</h2>
      <div className="container-services">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >
            <img className="imgs" src={service.images[0]} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onRequestClose={() => setSelectedService(null)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedService.title}</h2>
          <Carousel responsive={responsive}>
            {selectedService.images.map((image, index) => (
              <div className="container-imgs" key={index}>
                <img
                  src={image}
                  alt={`Imagem ${index + 1} de ${selectedService.title}`}
                />
              </div>
            ))}
          </Carousel>
          <p>{selectedService.description}</p>
          <a href="" target="blank">
            Agende já!
          </a>
          <div className="modal-button">
            <button onClick={() => setSelectedService(null)}>Fechar</button>
          </div>
        </Modal>
      )}
    </section>
  );
}
