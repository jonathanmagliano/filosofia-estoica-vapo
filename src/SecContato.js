import "./secContato.scss";
import contact1 from "./assets/contato-1.png";
import contact2 from "./assets/contato-2.png";
const SecContato = () => {
  return (
    <section class="container">
      {
      <div class="teste">
      <h1>Tem um projeto em mente?</h1>
          <h1>Entre em contato!</h1>
      </div>
      }
      {/* Icones */}
      {
        <div>
          <img id="img1"src={contact1} />

          <img id="img2" src={contact2} />

          
          
        </div>

      }
    </section>
  );
};

export default SecContato;
