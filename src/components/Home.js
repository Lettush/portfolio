import "../App.css";
import Avatar from "../images/avatar.png";

const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#" className="links">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="links">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/">Jared Hortaleza</a>
                        </li>
                        <li>
                            <a href="#" className="links">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#" className="links">
                                Skills
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="hero">
                <div className="col">
                    <img src={Avatar} alt="avatar" className="avatar" />
                </div>
                <div className="col"></div>
            </section>
            <section className="bio"></section>
        </div>
    );
};

export default Home;
