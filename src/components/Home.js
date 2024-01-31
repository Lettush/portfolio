import { useEffect } from "react";
import "../App.css";
import "./css/Cards.css";

const Home = () => {
    useEffect(() => {
        const cursorDot = document.getElementById("cursor-dot");
        const cursorOutline = document.getElementById("cursor-outline");

        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate(
                {
                    left: `${posX}px`,
                    top: `${posY}px`,
                },
                { duration: 500, fill: "forwards" }
            );
        });

        document.getElementById("nav").onmousemove = (e) => {
            const { currentTarget: target } = e;
            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        };
    }, []);

    return (
        <div>
            {/* Custom Cursor */}
            <div className="cursor-dot" id="cursor-dot"></div>
            <div className="cursor-outline" id="cursor-outline"></div>

            <header>
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
            </header>
            <section className="hero" id="header">
                <div className="col">
                    <img
                        src="https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700318-stock-illustration-person-gray-photo-placeholder-man.jpg"
                        alt="Placeholder"
                        className="avatar"
                    />
                </div>
                <div className="col">
                    <h1>Hi, I'm Jared Hortaleza</h1>
                    <h4>Full-Stack Developer</h4>
                    <br />
                    <p>
                        I am a Full Stack Developer that has 2+ years of
                        experience in the industry. I have created Django-based
                        applications, created modules for a Human Resources
                        Information System in Odoo, and a chatbot through
                        messenger API. I've also graduated this year in iAcademy
                        with the degree of BS in Computer Science - Software
                        Engineering.
                        <br />
                        <br />
                        I'm currently working and learning the MERN (MongoDB,
                        ExpressJS, React, NodeJS) tech stack.
                    </p>
                    <div className="row">
                        <button className="button">Hire Me</button>
                        <button className="button contact">Contact Me</button>
                    </div>
                    <div className="row">
                        <a
                            href="https://www.linkedin.com/in/jared-neil-hortaleza-001795187/"
                            className="linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a
                            href="https://github.com/Lettush"
                            className="github"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
            </section>
            <section className="bio" id="about">
                <h2 className="bio-heading">About</h2>
            </section>
            <section className="skills">
                <h2 className="skills-heading">Skills</h2>
                <div className="container">
                    <div className="row">
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col box">
                            <div className="row">
                                <div className="icon">
                                    <ion-icon name="logo-html5"></ion-icon>
                                </div>
                                <div className="details">
                                    <h4>HTML</h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Atque fuga sint
                                        commodi et hic doloremque temporibus
                                        minima quas, sit laudantium autem, ut
                                        vitae doloribus error totam unde culpa?
                                        Quisquam, et!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects">
                <h2 className="project-heading">Projects</h2>
                <ul className="cards">
                    <li>
                        <div className="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                className="card__image"
                                alt=""
                            />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg
                                        className="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        className="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div className="card__header-text">
                                        <h3 className="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span className="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p className="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                className="card__image"
                                alt=""
                            />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg
                                        className="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        className="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div className="card__header-text">
                                        <h3 className="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span className="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p className="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                className="card__image"
                                alt=""
                            />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg
                                        className="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        className="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div className="card__header-text">
                                        <h3 className="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span className="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p className="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                className="card__image"
                                alt=""
                            />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg
                                        className="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        className="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div className="card__header-text">
                                        <h3 className="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span className="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p className="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
