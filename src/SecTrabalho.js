import Project from "./Project";

const SecTrabalho = () => {
  return (
    <section id="trabalho">
      <h2>O nosso trabalho</h2>
      {/* Styled "hr" tag here? Or border-bottom in CSS? */}

      {/* Ul + li...? */}
      <ul>
        <Project description="Lógica de programação para o público infanto-juvenil" />
        <Project description="Laboratório Estóico; aplicações web simples e/ou imersão no mundo da inteligência artificial" />
        <Project description="Dinâmicas e e minicursos visando o desenvolvimento da inteligência emocional" />
      </ul>
    </section>
  );
};

export default SecTrabalho;
