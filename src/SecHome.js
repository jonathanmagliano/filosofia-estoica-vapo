import VR from "./assets/VR-man.jpg";
import "./SecHome.scss";

const SecHome = () => {
  return (
    <section id="home">
      <div id="home-content">
        <h1>Filosofia Estóica Vapo</h1>
        <h2>Apoio educacional através de soluções tecnológicas</h2>
        <a id="btn-contato" href="#contato">
          Contrate-nos <i className="fa fa-handshake"></i>
        </a>
        <a id="btn-trabalho" href="#trabalho">
          <i className="fa fa-eye"></i> Veja o que podemos fazer
        </a>
      </div>

      <img id="vr" src={VR} alt="Man with a VR set on" />

      {/* Watermark */}
      <h3 id="watermark">FEV</h3>
    </section>
  );
};

export default SecHome;
