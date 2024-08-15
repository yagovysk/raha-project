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
      description:
        "Essa área da fisioterapia, trata e previne lesões musculo-esqueléticas, prevenindo e aliviando a redução da rigidez articular, melhora do fortalecimento e alongamento muscular, coordenação, equilíbrio e propriocepção, prevenção de cirurgias ortopédicas, diminuição de edemas articulares, diminuição dos riscos de quedas e correção das alterações posturais. O protocolo de tratamento é individualizado, realizado após a avaliação, onde se investiga a origem de cada patologia. Após isso defina-se um tratamento personalizado, visando o retorno as atividades de vida diária. Quando procurar pela fisioterapia? Deve-se procurar quando em que os primeiros sinais de desconforto aparecerem. Com a ajuda de um profissional de qualidade, o paciente consegue recuperar a qualidade de vida e aprimorar as funcionalidades do organismo.",
    },
    {
      id: 2,
      title: "Fisioterapia Orofacial",
      images: [oro, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "A Fisioterapia Orofacial é um tratamento especializado que cuida das estruturas da face, cabeça, pescoço e boca, como músculos, articulações e nervos. Ideal para quem sofre de dores na mandíbula, disfunções na articulação temporomandibular (ATM), bruxismo, dificuldades de mastigação e fala, essa fisioterapia oferece alívio e melhora na qualidade de vida. O tratamento inclui técnicas de mobilização, alongamento, fortalecimento muscular e recursos terapêuticos, focando na recuperação funcional e no equilíbrio da musculatura facial. Entre os benefícios estão o alívio de dores faciais e cervicais, melhora na função mandibular, recuperação pós-cirurgias e traumas, além de correções em mastigação e fala. Se você enfrenta problemas na região orofacial, a fisioterapia orofacial pode ser a solução ideal. Esse tratamento não invasivo promove bem-estar e previne complicações futuras, proporcionando mais conforto e qualidade de vida no dia a dia. Invista na sua saúde e marque uma consulta!",
    },
    {
      id: 3,
      title: "Massoterapia",
      images: [masso, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "É um método que consiste em técnicas de manipulação corporal a partir de movimentos manuais por um profissional que promove o equilíbrio corporal e energético, além de oferecer uma sensação geral de bem-estar. Seus Objetivos:  A prevenção e restauração de estado físico e mental, aliviando dores e prevenindo micro lesões e também no tratamento de lesões já acontecidas. Sem esquecer seu propósito relaxante, onde os movimentos irão relaxar a musculatura e também atuará no Sistema Nervoso Central, causando descanso de todo o corpo. As manipulações de massagem movimentam a ativam sistemas muscular, nervoso, circulatório e linfático. Estimulam uma melhor nutrição dos tecidos e eliminam toxinas, levando ao paciente um estado de bem estar e relaxamento. Qual a importância do procedimento? O procedimento consegue fazer com que as pessoas que constantemente se encontram estressadas e ativas, relaxem o corpo e mente. E pessoas que sofrem com enfermidades psicossomáticas também podem ser beneficiadas. Principais Benefícios: Alívio do estresse, Relaxamento muscular, Sensação geral de bem-estar, Potencializa o sistema imunológico, Alívio de dores e tensões, Melhora a circulação sanguínea. Como as Massagens Afetam o Corpo? De forma geral, elas desfazem os nódulos de tensão muscular e estimulam a circulação sanguínea, o que promove maior relaxamento e sensação geral de bem-estar. Além disso, a massoterapia também é capaz de estimular o cérebro a liberar substâncias relacionadas ao bem-estar e ao prazer.",
    },
    {
      id: 4,
      title: "Acupuntura",
      images: [acun, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "A Acupuntura é uma técnica milenar com mais de 5.000 anos de idade e pode te ajudar atualmente, de forma eficaz e indolor. Essa é uma técnica milenar, de origem oriental, que consiste na inserção de agulhas (ou outras ferramentas em pessoas que não toleram agulhas) em pontos específicos do corpo para estimular terminações nervosas e desencadear diferentes respostas do organismo, tratando doenças, físicas e emocionais. Auriculo é uma vertente da medicina,  que utiliza a orelha como microssistema, pois já é comprovada cientificamente que na orelha temos a representação de todas as partes e órgãos do nosso corpo. Entre seus benefícios, destacam-se alívio da dor, ansiedade, insônia, enxaqueca, gravidez e com  bebês e crianças. Segundo a OMS (Organização Mundial da Saúde), qualquer pessoa pode fazer acupuntura, estando doente ou não.",
    },
    {
      id: 5,
      title: "Ventosaterapia",
      images: [ventosa, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "A ventosaterapia é uma técnica terapêutica utilizada há milênios na Medicina Tradicional Chinesa. Essa técnica baseia-se nos princípios da Acupuntura, sendo inicialmente utilizados chifres de animais, bambu, metal, pedras e mais recentemente copos de vidro e acrílico. Essa técnica visa ativar a circulação, retirar estagnações, desbloquear energia, eliminar toxinas, aumentar o fluxo da linfa e melhorar o funcionamento dos órgãos. Sendo assim, essa terapia auxilia o tratamento de dores musculares, lombalgias, artrite, hipertensão, resfriados, gripe, cefaleias, problemas digestivos e também pode ser usado com objetivos estéticos.",
    },
    {
      id: 6,
      title: "Drenagem Linfática",
      images: [linfatica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "O sistema Circulatório Linfático está ligado ao Sistema Circulatório Sanguíneo, a drenagem estimula esses dois sistemas com movimentos superficiais para que apenas a circulação capilar, onde encontra-se mais de 80% do Sistema Circulatório Linfático, seja atingida. São feitas suaves compressões nos principais pontos de acúmulo. A linfa é o líquido existente entre as células e é caracterizada por suas viscosidade, por conter substâncias orgânicas e inorgânica, resíduos e toxinas. Tem por objetivo, levar aos linfonoudos, através dos vasos linfáticos, esses resíduos que não são absorvidos pelo Sistema Circulatório Sanguíneo devido ao seu tamanho. Uma vez nos linfonoudos, são processados e encaminhados ao sangue. Estimula a regeneração dos tecidos, melhora o Sistema Imunológico. Essa especialidade auxilia na limpeza e drenagem das nossas macromoléculas e células residuais, ajudando a liberar líquidos e a diminuir inchaços. Para quem é indicado? É indicado para destacar a circulação sanguínea de retorno comprometida, tensão pré-menstrual, tratamento pré e pós cirurgia plástica, relaxamento, celulite, entre outras. Para quem NÃO é indicado? Casos de infecções agudas, câncer diagnosticados e em tratamento, insuficiência cardíaca, hipertireoidismo e casos graves de asma. Benefícios da Drenagem: Combate ao inchaço, auxilia na recuperação de lesões, libera toxinas corporais, ajuda na oxigenação dos tecidos do corpo.",
    },
    {
      id: 7,
      title: "Fisioterapia Pélvica",
      images: [pelvica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "É uma especialidade da fisioterapia que atua na reabilitação das disfunções do assoalho pélvico que é o conjunto de músculos e ligamentos que sustentam os órgãos como bexiga, útero, intestino e tudo que fica na região baixa do abdômen. Seus Benefícios: Diminui a dor no parto. Previne possíveis disfunções no pós-parto - incontinências,  dores lombares e pélvicas, inchaços. Melhora as dores pélvicas crônicas. Melhora das dores na relação sexual. Trata o vaginismo. Reduz/previne a incontinência urinária e fecal. Minimiza as dores abdominais pós cirúrgicas. Trata os  prolapsos genitais. Auxilia no tratamento da endometriose. Fortalece a região vaginal – autoconhecimento sexual. Quem é indicado a fazer? Gestantes em preparação para o parto e na recuperação do  pós-parto, que apresenta disfunções sexuais masculinas e femininas e reabilitação de cirurgias. O protocolo de tratamento é individualizado e se dispõe de diversos recursos como: terapias manuais, uso de equipamentos especializados como Biofeedback, Eletroestimulação e Cinesioterapia especifica.",
    },
    {
      id: 8,
      title: "Cirurgia Ortognática",
      images: [ortognatica, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "ortognática é uma correção de irregularidades faciais e maxilomandibulares com um alinhamento dentário adequado. Seus benefícios: melhora da mastigação, respiração e fala, aparência facial melhor balanceada e mais estética. A fisioterapia atua no pós operatório de cirurgia ortognática com objetivo de prevenir aderências nos tecidos da face e fibrose na cápsula articular da ATM, reduzir edema e quadro inflamatório, recuperar os movimentos articulares, melhorar ou prevenir alterações musculares, e restabelecer a sensibilidade facial.",
    },
    {
      id: 9,
      title: "Depilação",
      images: [depil, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "A depilação a cera e a epilação são métodos que removem os pelos pela raiz, proporcionando uma pele lisa por mais tempo, geralmente de 3 a 6 semanas. Com o uso contínuo, os pelos tendem a nascer mais finos e em menor quantidade. Além disso, esses métodos oferecem vantagens como esfoliação da pele, deixando-a mais suave e macia. Comparados à depilação tradicional com lâmina, eles são mais duradouros e não causam irritações frequentes. Em relação ao laser, a cera e a epilação são mais acessíveis e sem os riscos de queimaduras ou desconforto prolongado. Esses métodos podem ser utilizados em qualquer tipo de pele e em várias áreas do corpo, tornando-se uma escolha prática e eficiente para quem busca resultados rápidos e uma pele mais bonita e saudável.",
    },
    {
      id: 10,
      title: "Limpeza de Pele",
      images: [limp, "/path/to/image2.jpg", "/path/to/image3.jpg"],
      description:
        "A limpeza de pele é um tratamento essencial para manter a saúde e a beleza do rosto. Realizada por profissionais, essa técnica remove impurezas, células mortas e cravos, desobstruindo os poros e prevenindo o surgimento de acne e outros problemas cutâneos. Ao remover as células mortas, a limpeza de pele também estimula a renovação celular, deixando a pele mais suave, macia e rejuvenescida. Além disso, o tratamento melhora a absorção de produtos cosméticos, tornando a pele mais receptiva a hidratantes, séruns e outros cuidados, potencializando seus efeitos. A limpeza de pele ajuda a uniformizar o tom da pele, clareando manchas e diminuindo cicatrizes, sendo indicada para todos os tipos de pele, desde as mais oleosas até as mais secas. Manter a pele limpa e saudável vai além da estética; é um cuidado que previne o envelhecimento precoce, combate o excesso de oleosidade, reduz o risco de infecções cutâneas e proporciona uma aparência mais fresca e revitalizada. Se você busca uma pele mais saudável, radiante e livre de impurezas, a limpeza de pele é fundamental. Invista nesse cuidado regular e sinta a diferença!",
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
          <div className="modal-button">
            <a href="" target="blank">
              Agende já!
            </a>
            <button onClick={() => setSelectedService(null)}>Fechar</button>
          </div>
        </Modal>
      )}
    </section>
  );
}
