import VR from "./assets/VR-man.jpg";
import "./SecHome.scss";

const SecHome = () => {
  return (
    <section id="home">
      <h1>Filosofia Estóica Vapo</h1>
      <h2>Apoio educacional através de soluções tecnológicas</h2>
      <a href="#contato">Contrate-nos</a>
      <a href="#trabalho">Veja o que podemos fazer</a>

      <img id="vr" src={VR} alt="Man with a VR set on" />

      {/* Watermark */}
      <h3 id="watermark">FEV</h3>
    </section>
  );
};

export default SecHome;
