import Navbar from "./Navbar";
import SecHome from "./SecHome.js";
import SecTrabalho from "./SecTrabalho.js";
import SecEquipe from "./SecEquipe.js";
import SecContato from "./SecContato.js";

// import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar > NavbarItems */}
      <Navbar />

      {/* Home */}
      <SecHome />

      {/* Trabalho */}
      <SecTrabalho />

      {/* Equipe */}
      <SecEquipe />

      {/* Contato */}
      <SecContato />
    </div>
  );
}

export default App;
