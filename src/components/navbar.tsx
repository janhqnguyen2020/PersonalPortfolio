import "../styles/navbar.css";

const Navbar = () => {
  const scrollToId = (id : string) => (e : React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // stops the instant "teleport" jump
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-middle">
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={scrollToId("about")}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={scrollToId("skills")}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={scrollToId("projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToId("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
