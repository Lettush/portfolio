import { useEffect } from "react";
import "../App.css";
import "./css/Cards.css";

const Home = () => {
    useEffect(() => {
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
                <div className="col"></div>
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
                        <button className="button">About Me</button>
                        <button className="button contact">Contact Me</button>
                    </div>
                    <div className="row">
                        <a
                            href="https://www.linkedin.com/in/jared-neil-hortaleza-001795187/"
                            className="linkedin"
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://github.com/Lettush" className="github">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
            </section>
            <section className="bio" id="about">
                <h2 className="bio-heading">All About Me</h2>
                <ul class="cards">
                    <li>
                        <div class="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                class="card__image"
                                alt=""
                            />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg
                                        class="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        class="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div class="card__header-text">
                                        <h3 class="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span class="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p class="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                class="card__image"
                                alt=""
                            />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg
                                        class="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        class="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div class="card__header-text">
                                        <h3 class="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span class="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p class="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                class="card__image"
                                alt=""
                            />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg
                                        class="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        class="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div class="card__header-text">
                                        <h3 class="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span class="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p class="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <img
                                src="https://i.imgur.com/oYiTqum.jpg"
                                class="card__image"
                                alt=""
                            />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg
                                        class="card__arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path />
                                    </svg>
                                    <img
                                        class="card__thumb"
                                        src="https://i.imgur.com/7D7I6dI.png"
                                        alt=""
                                    />
                                    <div class="card__header-text">
                                        <h3 class="card__title">
                                            Jessica Parker
                                        </h3>
                                        <span class="card__status">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                                <p class="card__description">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores, blanditiis?
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="skills">
                <h2 className="skills-heading">My Skills</h2>
            </section>
        </div>
    );
};

export default Home;
