// import Project from "./Project";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./SecTrabalho.scss";
import LOG from "./assets/img01.jpg";
import LAB from "./assets/img02.jpg";
import DIN from "./assets/img03.jpg";

const SecTrabalho = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setIsFlipped(!isFlipped);
  };

  return (
    <section id="trabalho">
      <h2>
        O nosso <span className="highlighted">trabalho</span>
      </h2>
      <hr />

      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="card-front">
          <p>Lógica de programação para o público infanto-juvenil.</p>
          <div className="toggler" onClick={handleClick}></div>
        </div>

        <div className="card-back">
          <img src={LOG} alt="" />
          <div className="toggler" onClick={handleClick}></div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="card-front">
          <p>
            Laboratório Estóico: aplicações web simples e/ou imersão no mundo da
            inteligência artificial
          </p>
          <div className="toggler" onClick={handleClick}></div>
        </div>

        <div className="card-back">
          <img src={LAB} alt="" />
          <div className="toggler" onClick={handleClick}></div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="card-front">
          <p>
            Dinâmicas e minicursos visando o desenvolvimento da inteligência
            emocional
          </p>
          <div className="toggler" onClick={handleClick}></div>
        </div>

        <div className="card-back">
          <img src={DIN} alt="" />
          <div className="toggler" onClick={handleClick}></div>
        </div>
      </ReactCardFlip>
    </section>
  );
};

/*
        <description1>Lógica de programação para o público infanto-juvenil></description1>
        <description2>Laboratório Estóico: aplicações web simples e/ou imersão no mundo da inteligência artificial></description2>
        <description3>Dinâmicas e minicursos visando o desenvolvimento da inteligência emocional></description3>
*/

export default SecTrabalho;
