const Navbar = () => {
  return (
    <nav id="nav">
      <ul className="nav-links">
        <li className="links">
          <a href="#about">
            About
          </a>
        </li>
        <li className="links">
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#header">Jared Hortaleza</a>
        </li>
        <li className="links">
          <a href="#experience">
            Experience
          </a>
        </li>
        <li className="links">
          <a href="#skills">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;