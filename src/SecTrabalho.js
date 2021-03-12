// import Project from "./Project";
import "./SecTrabalho.scss";
import LOG from "./assets/img01.jpg";
import LAB from "./assets/img02.jpg";
import DIN from "./assets/img03.jpg";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const SecTrabalho = () => {
  return (
    <section id="trabalho">
      <h2>O nosso<h2stU> trabalho</h2stU></h2>
      {{ rectline }}
    </section>
  );
};


render() {
  // .. return
<Flippy
  flipOnHover={false} // default false
  flipOnClick={true} // default false
  flipDirection="horizontal" // horizontal or vertical
  ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
  // if you pass isFlipped prop component will be controlled component.
  // and other props, which will go to div
  style={{ rect1 }}>
  <FrontSide 
  img id="log" src={LOG} alt="Logic">
  </FrontSide>
  <BackSide
  style={{ }}>
  </BackSide>
</Flippy>
}


/*
        <description1>Lógica de programação para o público infanto-juvenil></description1>
        <description2>Laboratório Estóico: aplicações web simples e/ou imersão no mundo da inteligência artificial></description2>
        <description3>Dinâmicas e minicursos visando o desenvolvimento da inteligência emocional></description3>
*/

export default SecTrabalho;
