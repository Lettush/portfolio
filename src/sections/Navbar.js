const Navbar = () => {
  return (
    <nav id="nav">
      <ul className="nav-links">
        <li>
          <a href="#about" className="links">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="links">
            Projects
          </a>
        </li>
        <li>
          <a href="#header">Jared Hortaleza</a>
        </li>
        <li>
          <a href="#experience" className="links">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className="links">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;