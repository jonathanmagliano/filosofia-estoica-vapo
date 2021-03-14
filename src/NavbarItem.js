const NavbarItem = ({ sectionName }) => {
  return (
    <li>
      {/* "Navbar" so it snaps right to the top when clicked,
      otherwise the content will show up a bit higher */}
      {sectionName === "Home" ? (
        <a href="#navbar">{sectionName}</a>
      ) : (
        <a href={`#${sectionName.toLowerCase()}`}>{sectionName}</a>
      )}
      {/* <a href={`#${sectionName.toLowerCase()}`}>{sectionName}</a> */}
    </li>
  );
};

export default NavbarItem;
