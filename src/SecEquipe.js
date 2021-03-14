import Member from "./Member";
import profilePicJonathan from "./assets/profileJonathan.jpeg";
import profilePicJesús from "./assets/profileJesús.jpeg";
import profilePicEduardo from "./assets/profileEduardo.png";
import profilePicJair from "./assets/profileJair.jpeg";
import "./SecEquipe.scss";

const SecEquipe = () => {
  return (
    <section id="equipe">
      <h2>Quem somos?</h2>
      <hr />
      {/* Members */}
      <Member
        name="Jonathan"
        description="Prazer, Jonathan. Um brasileiro e carioca padawan em Python, R, JavaScript e Java. Eu iniciei no mundo dos computadores por volta de 2003-2004 em uma lan house e continuo até hoje como entusiasta da tecnologia, dos games e de um belo cappuccino."
        image={profilePicJonathan}
        linkedIn="https://www.linkedin.com/in/jonathanmagliano/"
        gitHub="https://github.com/jonathanmagliano"
      />
      <Member
        name="Jesús"
        description="Oi! Sou o Jesús (talvez não esse do que você escuta na igreja). Sou um Engenheiro, músico, poliglota e desenvolvedor Frontend da Venezuela; ultimamente aprendendo cada vez mais desse mundo da programação, com conhecimento de frameworks como React e Vue. Prazer~"
        image={profilePicJesús}
        linkedIn="https://www.linkedin.com/in/gsussb/"
        gitHub="https://github.com/Gsus"
      />
      <Member
        name="Eduardo"
        description="Meu nome é Eduardo, moro no Brasil, especificamente em São Paulo, SP. Atualmente estou estudando em um curso técnico VueJS. Comecei como desenvolvedor de back-end em 2019 com NodeJS. Também estudei muito por conta própria para aprender novas tecnologias."
        image={profilePicEduardo}
        linkedIn="https://www.linkedin.com/in/eduardo-santos-691654207/"
        gitHub="https://github.com/dudukb"
      />
      <Member
        name="Jair"
        description="Sou o Jair, clássico nome brazuca, muito brasileiro e carioca também. Sou um graduando em análise de sistemas e tenho focado nos últimos tempos em Javascript e CSS."
        image={profilePicJair}
        linkedIn="https://www.linkedin.com/in/jair-silva/"
        gitHub="https://github.com/jaiirsilva"
      />
    </section>
  );
};

export default SecEquipe;
