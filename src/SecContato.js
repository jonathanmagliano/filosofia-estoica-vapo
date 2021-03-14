import "./SecContato.scss";
import contact1 from "./assets/contato-1.png";
import contact2 from "./assets/contato-2.png";
import envelopeSvg from "./assets/envelope.svg";
import linkedInSvg from "./assets/linkedInOrange.svg";
import phoneSvg from "./assets/phone.svg";
import instagramSvg from "./assets/instagram.svg";

const SecContato = () => {
  return (
    <section id="contato">
      <div className="text-wrapper">
        <h3>
          Tem um <span className="texto-colorido">projeto</span> em mente?
        </h3>
        <h2>
          Entre em <span className="texto-colorido">contato!</span>
        </h2>

        <div className="rhombus">
          <hr className="x-line" />
          <hr className="y-line" />
          <img className="svg y-axis-centered" src={envelopeSvg} alt="" />
          <img className="svg y-axis-centered" src={linkedInSvg} alt="" />
          <img className="svg x-axis-centered" src={phoneSvg} alt="" />
          <img className="svg x-axis-centered" src={instagramSvg} alt="" />

          {/* <i className="fas fa-2x fa-envelope y-axis-centered"></i>
          <i className="fab fa-2x fa-linkedin-in y-axis-centered"></i>
          <i className="fas fa-2x fa-phone-alt x-axis-centered"></i>
          <i className="fab fa-2x fa-instagram x-axis-centered"></i> */}
        </div>
      </div>

      <div id="img-wrapper-1">
        <div className="overlay-parent">
          <img id="img1" src={contact1} alt="" />
        </div>
      </div>

      <div id="img-wrapper-2">
        <div className="overlay-parent">
          <img id="img2" src={contact2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SecContato;
