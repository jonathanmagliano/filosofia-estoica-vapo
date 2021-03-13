import "./secContato.scss";
import contact1 from "./assets/contato-1.png";
import contact2 from "./assets/contato-2.png";

const SecContato = () => {
  return (
    <section class="container">
      {
      <div class="teste">
     <h1>Tem um <span class="texto-colorido">projeto</span> em mente?<br></br>
          Entre em <span class="texto-colorido">contato!</span>
     </h1>
      </div>
      }

      {
        <div>
          <img align="left" id="img1" src={contact1} />
          <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <img align="right" id="img2" src={contact2} />
        </div>
      }

    </section>
  );
};

export default SecContato;
