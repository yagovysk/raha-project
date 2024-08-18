import { useState } from "react";
import Modal from "react-modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import orto from "../../../assets/fisioterapia-ortopedica.jpg";
import orto2 from "../../../assets/All-services-imgs/orto-2.jpg";
import oro from "../../../assets/Orofacial.jpg";
import oro2 from "../../../assets/All-services-imgs/oro2.jpg";
import masso from "../../../assets/massagem.jpg";
import masso2 from "../../../assets/All-services-imgs/masso-2.jpg";
import acun from "../../../assets/acupuntura.jpg";
import fisio1 from "../../../assets/All-services-imgs/fisio1.jpg";
import fisio2 from "../../../assets/All-services-imgs/fisio2.jpg";
import ventosa from "../../../assets/All-services-imgs/ventosa.jpg";
import linfatica from "../../../assets/All-services-imgs/linfatica.jpg";
import pelvica from "../../../assets/All-services-imgs/pelvica.jpg";
import ortognatica from "../../../assets/All-services-imgs/ortognatica.jpeg";
import depil from "../../../assets/All-services-imgs/depilacao.jpeg";
import limp from "../../../assets/All-services-imgs/limp.jpg";
import limp2 from "../../../assets/All-services-imgs/limp-2.jpg";
import limp3 from "../../../assets/All-services-imgs/limp-3.jpg";
import celulite from "../../../assets/All-services-imgs/celulite.jpg";
import celulite2 from "../../../assets/All-services-imgs/celulite-2.jpg";
import tapping from "../../../assets/All-services-imgs/tapping-1.jpg";
import tapping2 from "../../../assets/All-services-imgs/tapping-2.png";
import sobrancelha1 from "../../../assets/All-services-imgs/sobrancelha.jpg";
import sobrancelha2 from "../../../assets/All-services-imgs/sobrancelha-2.jpg";
import sobrancelha3 from "../../../assets/All-services-imgs/sobrancelha-3.jpg";
import sobrancelha4 from "../../../assets/All-services-imgs/sobrancelha-4.jpg";
import luzp from "../../../assets/All-services-imgs/luz-pulsada.jpg";
import luzp2 from "../../../assets/All-services-imgs/luz-pulsada-2.jpg";
import "./All.css";

Modal.setAppElement("#root");

export function AllServices() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Fisioterapia Ortopédica",
      images: [orto, fisio1, fisio2],
      description: `Essa área da fisioterapia trata e previne lesões musculo-esqueléticas, prevenindo e aliviando a redução da rigidez articular, melhora do fortalecimento e alongamento muscular, coordenação, equilíbrio e propriocepção.

      Previne cirurgias ortopédicas, diminui edemas articulares, reduz os riscos de quedas e corrige alterações posturais. O protocolo de tratamento é individualizado e realizado após avaliação, investigando a origem de cada patologia.

      Após isso, define-se um tratamento personalizado, visando o retorno às atividades de vida diária. Deve-se procurar a fisioterapia quando os primeiros sinais de desconforto aparecerem. Com a ajuda de um profissional, o paciente consegue recuperar a qualidade de vida e aprimorar as funcionalidades do organismo.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Fisioterapia Ortopédica.",
    },
    {
      id: 2,
      title: "Fisioterapia Orofacial",
      images: [oro, oro2],
      description: `A Fisioterapia Orofacial cuida das estruturas da face, cabeça, pescoço e boca, como músculos, articulações e nervos.

      Ideal para quem sofre de dores na mandíbula, disfunções na ATM, bruxismo, dificuldades de mastigação e fala. Oferece alívio e melhora na qualidade de vida.

      O tratamento inclui técnicas de mobilização, alongamento, fortalecimento muscular e recursos terapêuticos, focando na recuperação funcional e no equilíbrio da musculatura facial. Benefícios incluem alívio de dores faciais, melhora na função mandibular, e recuperação pós-cirurgias e traumas.

      Se você enfrenta problemas na região orofacial, a fisioterapia orofacial pode ser a solução ideal.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Fisioterapia Orofacial.",
    },
    {
      id: 3,
      title: "Massoterapia",
      images: [masso, masso2],
      description: `A Massoterapia consiste em técnicas de manipulação corporal que promovem o equilíbrio corporal e energético, além de proporcionar uma sensação geral de bem-estar.

      Seus objetivos incluem a prevenção e restauração do estado físico e mental, alívio de dores, prevenção e tratamento de lesões, além de um propósito relaxante, onde os movimentos relaxam a musculatura e atuam no Sistema Nervoso Central.

      As massagens afetam o corpo desfazendo nódulos de tensão muscular, estimulando a circulação sanguínea e promovendo relaxamento e sensação geral de bem-estar.`,
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Massoterapia.",
    },
    {
      id: 4,
      title: "Acupuntura",
      images: [acun, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: `A Acupuntura é uma técnica milenar que consiste na inserção de agulhas em pontos específicos do corpo para estimular terminações nervosas e tratar doenças físicas e emocionais.

      Essa técnica auxilia no alívio de dores, ansiedade, insônia, enxaquecas, e muito mais. Qualquer pessoa pode fazer acupuntura, esteja doente ou não.`,
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Acupuntura.",
    },
    {
      id: 5,
      title: "Ventosaterapia",
      images: [ventosa, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: `A Ventosaterapia é uma técnica terapêutica da Medicina Tradicional Chinesa que utiliza copos de vidro ou acrílico para ativar a circulação, eliminar toxinas e melhorar o funcionamento dos órgãos.

      Essa terapia auxilia no tratamento de dores musculares, lombalgias, artrite, hipertensão, gripe, problemas digestivos, e também pode ser usada com objetivos estéticos.`,
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Ventosaterapia.",
    },
    {
      id: 6,
      title: "Drenagem Linfática",
      images: [linfatica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: `A Drenagem Linfática estimula o sistema circulatório com suaves compressões nos principais pontos de acúmulo de líquidos.

      Benefícios incluem combate ao inchaço, auxílio na recuperação de lesões, liberação de toxinas corporais, e melhora na oxigenação dos tecidos do corpo.

      A drenagem é indicada para pessoas com problemas circulatórios, tensão pré-menstrual, pré e pós-cirurgia plástica, celulite, e mais.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Drenagem linfática.",
    },
    {
      id: 7,
      title: "Fisioterapia Pélvica",
      images: [pelvica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: `A Fisioterapia Pélvica atua na reabilitação das disfunções do assoalho pélvico, que sustenta órgãos como a bexiga, útero e intestino.

      Benefícios incluem a redução de dores no parto, prevenção de disfunções pós-parto, melhora das dores pélvicas crônicas, e tratamento de incontinências urinária e fecal.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Fisioterapia pélvica.",
    },
    {
      id: 8,
      title: "Cirurgia Ortognática",
      images: [ortognatica, orto2],
      description: `A Cirurgia Ortognática corrige irregularidades faciais e maxilomandibulares, melhorando a mastigação, respiração, fala, e a estética facial.

      A fisioterapia atua no pós-operatório para prevenir aderências, reduzir edema, recuperar movimentos articulares e restabelecer a sensibilidade facial.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Cirurgia ortognática.",
    },
    {
      id: 9,
      title: "Depilação",
      images: [depil, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description: `A depilação a cera e a epilação removem os pelos pela raiz, proporcionando uma pele lisa por mais tempo, entre 3 a 6 semanas.

      Esses métodos oferecem vantagens como esfoliação da pele, deixando-a mais suave e macia, e resultados mais duradouros em comparação com a depilação tradicional com lâmina.`,
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Depilação.",
    },
    {
      id: 10,
      title: "Limpeza de Pele",
      images: [limp, limp2, limp3],
      description: `A limpeza de pele remove impurezas, células mortas e cravos, desobstruindo os poros e prevenindo o surgimento de acne.

      Esse tratamento também estimula a renovação celular, melhora a absorção de produtos cosméticos, uniformiza o tom da pele e previne o envelhecimento precoce.
    
      Experimente a transformação com nossa Limpeza de Pele com Ouro, um tratamento sofisticado que revitaliza e ilumina a pele. A combinação de ouro e técnicas avançadas proporciona uma limpeza profunda, hidratação intensa e um brilho radiante.
      
      Ideal para todos os tipos de pele, este tratamento combate os sinais de envelhecimento e deixa sua pele com um aspecto jovem e saudável. Agende sua sessão e descubra o poder do ouro para uma pele deslumbrante!`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Limpeza de pele.",
    },
    {
      id: 11,
      title: "Redução de celulite",
      images: [celulite, celulite2],
      description: `O tratamento de celulite com ultrassom combate a aparência indesejada da celulite, promovendo a suavização da pele e melhorando sua textura.

      O ultrassom atua diretamente nas camadas de gordura, emitindo ondas sonoras que quebram os depósitos de gordura, estimulam a circulação e promovem a drenagem linfática.`,
      whatsappMessage:
        "Olá, gostaria de agendar uma sessão de Redução de celulite.",
    },
    {
      id: 12,
      title: "Tapping",
      images: [tapping, tapping2],
      description:
        "Descubra o poder do cuidado especializado! Nossos serviços de fisioterapia e bem-estar são projetados para transformar sua qualidade de vida, aliviando dores, restaurando sua vitalidade e promovendo o equilíbrio físico e mental. Com tratamentos personalizados e profissionais dedicados, você pode alcançar o bem-estar que sempre desejou. Não espere para sentir a diferença, agende sua sessão hoje mesmo e dê o primeiro passo para uma vida mais saudável e plena!.",
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Tapping.",
    },
    {
      id: 13,
      title: "Sobrancelha",
      images: [sobrancelha1, sobrancelha2, sobrancelha3, sobrancelha4],
      description:
        "Realce a beleza natural das suas sobrancelhas com o Brow Lamination! Essa técnica inovadora proporciona sobrancelhas mais volumosas, alinhadas e com um acabamento perfeito, sem a necessidade de maquiagem. O Brow Lamination é ideal para quem deseja uma aparência elegante e natural, destacando o olhar e harmonizando o rosto. Agende agora mesmo e descubra como esse tratamento pode transformar seu visual, elevando sua autoestima e deixando você ainda mais confiante!",
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Sobrancelha.",
    },
    {
      id: 14,
      title: "Luz Pulsada",
      images: [luzp, luzp2],
      description:
        "Experimente a suavidade duradoura com a Depilação a Luz Pulsada! Essa tecnologia avançada elimina os pelos de forma eficaz e segura, proporcionando uma pele lisa e macia por muito mais tempo. Ideal para quem busca praticidade e resultados duradouros, a luz pulsada atua diretamente na raiz do pelo, reduzindo seu crescimento ao longo das sessões. Diga adeus aos métodos tradicionais e aproveite o conforto de uma depilação sem irritações e com menos dor. Agende sua sessão agora e sinta a diferença!",
      whatsappMessage: "Olá, gostaria de agendar uma sessão de Luz Pulsada.",
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
          <div className="modal-button">
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                selectedService.whatsappMessage
              )}`}
              rel="noopener noreferrer"
              target="blank"
            >
              Agende já!
            </a>
            <button onClick={() => setSelectedService(null)}>Fechar</button>
          </div>
        </Modal>
      )}
    </section>
  );
}
