const NavbarItem = ({ sectionName }) => {
  return (
    <li>
      <a href={`#${sectionName.toLowerCase()}`}>{sectionName}</a>
    </li>
  );
};

export default NavbarItem;
