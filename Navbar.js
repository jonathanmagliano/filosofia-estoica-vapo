import NavbarItem from "./NavbarItem";
import logo from "./assets/logo.png";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <img id="logo" src={logo} alt="Company logo" />

      <ul id="nav-links">
        <NavbarItem sectionName="Home" />
        <NavbarItem sectionName="Trabalho" />
        <NavbarItem sectionName="Equipe" />
        <NavbarItem sectionName="Contato" />
      </ul>
    </nav>
  );
};

export default Navbar;
