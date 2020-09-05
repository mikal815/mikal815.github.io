import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../Menu';
import '../Details/Details.css';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import frontend from '../../assets/icons/frontend.svg';
import backend from '../../assets/icons/backend.svg';
import database from '../../assets/icons/database.svg';
import additional from '../../assets/icons/additional.svg';
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios'

const Layout = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: auto;
    height: 100%;
    background-color: #27292b;
    position: relative;
    padding-left: 5vw;
    padding-right: 5vw;
`

export default function Details() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.id === "name") {
            setName(e.target.value)
        }

        else if (e.target.id === "email") {
            setEmail(e.target.value)
        }

        else {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            name,
            email,
            message
        }

        // axios.post("api/sendMail", dataToSubmit)
        axios.post("/api/sendMail", dataToSubmit)

    }


    return (
        <Layout id="portfolio">
            <Logo />
            <Menu />
            <div className="main-title span-row-2">Portfolio</div>

            <div className="project">
                <img src={SurfersDepot} alt="Surfer's Depot" />
                <div className="inner-title">Surfer's Depot</div>
                <div className="caption">
                    Surfer's Depot is a full stack e-commerce web application. Front-end technologies used:
                    React, Material-UI, Bootstrap, HTML5, CSS3.
                    Back-end technologies used: MongoDB, Node.js, Redux, and Express.
                    This application showcases a login system with password hashing using JSON
                    webtokens. The user can browse a large inventory of surfboards for sale and can filter
                    results by brand, length, shape,
                    and price. Once logged in a user can add or remove items from their cart which persists with
                    MongoDB.
                    Surfer's Depot also has an admin view which allows the administrator to add new products onto
                    the
                    site. The user must meet the proper authentication to access the admin area.
                    </div>
            </div>

            <div className="project">
                <img src={BPS} alt="Boardwalk Pier Stage" />
                <div className="inner-title">Boardwalk Pier Stage</div>
                <div className="caption">
                    This website showcases a public venue promoting a rock concert.
                    This site was built with React and features a countdown clock which display the amount of
                    days, hours, minutes and seconds until the event.
                    A carousel made using the npm package "react-slick" flips through images as a background on the
                    initial view.
                    Material-UI was used to create the side menu drawer, icons, and toolbar. This site also utilized
                    the npm
                    package "react-scroll" which was used to vertically scroll the user directly to the appropriate
                    content
                    after the corresponding link in the side drawer is clicked. Another npm package "react-reveal"
                    was used
                    for many of the animations such as the zoom effect used on the second section of the page.
                    A reusable button component is used to minimize code and complexity. An iframe shows the venue's
                    location on google maps.
                    </div>
            </div>

            <div className="project">
                <img src={Icarus} alt="Icarus" />
                <div className="inner-title">Icarus Travel</div>
                <div className="caption">
                    This website showcases a public venue promoting a rock concert.
                    This site was built with React and features a countdown clock which display the amount of
                    days, hours, minutes and seconds until the event.
                    A carousel made using the npm package "react-slick" flips through images as a background on the
                    initial view.
                    Material-UI was used to create the side menu drawer, icons, and toolbar. This site also utilized
                    the npm
                    package "react-scroll" which was used to vertically scroll the user directly to the appropriate
                    content
                    after the corresponding link in the side drawer is clicked. Another npm package "react-reveal"
                    was used
                    for many of the animations such as the zoom effect used on the second section of the page.
                    A reusable button component is used to minimize code and complexity. An iframe shows the venue's
                    location on google maps.
                    </div>
            </div>

            <div className="project">
                <img src={Shapes} alt="Shape Shifter" />
                <div className="inner-title">Shape Shifter</div>
                <div className="caption">
                    Shape Shifter is a memory game build with React. The goal of the game is to click on each shape
                    without
                    clicking on the same shape twice. This sounds easy at first however the images are randomly
                    repositioned
                    after every click creating quite a challenge. There are 12 shapes in total so once your score
                    reaches 12 you win.
                    Click a shape you've already clicked and the score is reset to zero and a new game begins. A top
                    score indicator helps you gauge your progress.
                    </div>
            </div>

            <div className="project">
                <img src={MTME} alt="Music to My Ears" />
                <div className="inner-title">Music to My Ears</div>
                <div className="caption">
                    Music to My Ears is an ear training app for any aspiring musician.
                    To really benefit from the app the user will want to understand basic music theory
                    and the 12 notes used in music. The app uses a piano as the interface however
                    the knowledge and understanding gained through the app is universal and can be transferred to
                    any instrument. The application has multiple modes; it is suggested to begin with the
                    "Intervals" mode. Intervals are the sound created from going from one note to the next.
                    These distinct sounds can be made more easily identified using associations.
                    These associations are best made with relating the interval with a famous or popular
                    snippet of music taken from a well known song. For example the sound created from the first two
                    notes
                    from the "Star Wars" theme is an interval of a perfect 5th.
                    In this "Intervals" mode the Music to My Ears app runs a sequence of two notes consecutively
                    then
                    it is the user's turn. The user must mimic the same sequence that the program just executed
                    using only their ears as a guide. The key farthest to the left is the key the user MUST start
                    on.
                    This app was built using React and Bootstrap on the front-end and Node.js, Express,
                    and MongoDB (To save the scores) on the back-end. This app also features a login system using
                    Passport.js.

                    </div>
            </div>

            <div className="services-title span-row-2" id="services">Skills</div>
            <div className="services-container span-row-2">
                <div className="services-item">
                    <div className="services-inner-title">Frontend</div>
                    <img src={frontend} alt="frontend" />
                    <div className="services-sub-section">
                        HTML5, CSS3, Javascript(ES6), React, Bootstrap, Responsive Design, jQuery
                        </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Server</div>
                    <img src={backend} alt="server" />
                    <div className="services-sub-section">
                        Node.js, Express, Redux, Rest API systems, Payment systems,
                        MySQL, MongoDB, Password hashing, Login systems, Authentication
                            </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Database</div>
                    <img src={database} alt="database" />
                    <div className="services-sub-section">
                        MySQL, MongoDB, Password hashing, Login systems, Authentication
                            </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Additional</div>
                    <img src={additional} alt="additional" />
                    <div className="services-sub-section">
                        Data driven web development, Big O notation, Single page apps, Mocha/Chai unit testing, Implementing
                        middleware, VS Code, Continuous Integration
                        </div>
                </div>
            </div>

            <div className="span-row-2 about-title" id="about">About</div>

            <div className="about-blurb">
                Hello I am a software developer living in Philadelphia.
                I build good looking functional websites and apps while taking into consideration the user experience and
                accessability of the end product. I can advance any project using coding abilities, analytical thinking, and creativity.
                I enjoy the process of becoming familiar with complexity and problem solving and can help you with
                your development and design challenges.
            </div>

            <div className="span-row-2 contact-title" id="hire">Contact</div>

            <form className="form span-row-2" onSubmit={handleSubmit}>
                <input className="input" id="name" placeholder="Name" value={name} onChange={handleChange}></input><br></br>
                <input className="input" id="email" placeholder="Email" value={email} onChange={handleChange}></input><br></br>
                <textarea className="textarea" id="message" placeholder="Message" value={message} onChange={handleChange}></textarea><br></br>
                <button className="btn" onClick={handleSubmit}>Send</button>
            </form>

            <footer className="footer span-row-2">
                <Link smooth to="/">home</Link>
                <Link smooth to="/details/#portfolio">portfolio</Link>
                <Link smooth to="/details/#services">skills</Link>
                <Link smooth to="/details/#about">about</Link>
                <Link smooth to="/details/#hire">contact</Link>
            </footer>
        </Layout>
    )
}
