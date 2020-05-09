import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo';
import MenuMobile from '../MenuMobile';
import '../MobileDetails/MobileDetails.css';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
// import { Link } from 'react-router-dom';
import frontend from '../../assets/icons/frontend.svg';
import backend from '../../assets/icons/backend.svg';
import database from '../../assets/icons/database.svg';
import additional from '../../assets/icons/additional.svg';
import { HashLink as Link } from 'react-router-hash-link';


const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  height: 100%;
  background-color: #27292b;
  position: relative;
  padding-left: 5vw;
  padding-right: 5vw;
`

export default function MobileDetails() {
    return (
        <Layout id="portfolio">
            <Logo />
            <MenuMobile />
            <div className="mobile-title span-row-2">Portfolio</div>
            <div className="mobile-details-container span-row-2">
                <div className="mobile-project">
                    <div className="project-title">Surfer's Depot</div>
                    <img src={SurfersDepot} alt="Surfer's Depot" />
                    <p>
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
                    </p>
                </div>
                <div className="mobile-project">
                    <div className="project-title">Boardwalk Pier Stage</div>
                    <img src={BPS} alt="Boardwalk Pier Stage" />
                    <p>
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
                    </p>
                </div>
                <div className="mobile-project">
                    <div className="project-title">Icarus Travel</div>
                    <img src={Icarus} alt="Icarus" />
                    <p>
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
                    </p>
                </div>

                <div className="mobile-project">
                    <div className="project-title">Shape Shifter</div>
                    <img src={Shapes} alt="Shape Shifter" />
                    <p>
                        Shape Shifter is a memory game build with React. The goal of the game is to click on each shape
                        without
                        clicking on the same shape twice. This sounds easy at first however the images are randomly
                        repositioned
                        after every click creating quite a challenge. There are 12 shapes in total so once your score
                        reaches 12 you win.
                        Click a shape you've already clicked and the score is reset to zero and a new game begins. A top
                        score indicator helps you gauge your progress.
                    </p>
                </div>
                <div className="mobile-project">
                    <div className="project-title">Music to My Ears</div>
                    <img src={MTME} alt="Music to My Ears" />
                    <p>
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

                    </p>
                </div>

                <div className="services-title" id="services">Services</div>

                <div className="services">
                    <div className="sub-title">Frontend</div>
                    <img src={frontend} alt="frontend" />
                    <div className="sub-section">
                        HTML5, CSS3, Javascript(ES6), React, Bootstrap, Responsive Design, jQuery
                    </div>
                </div>
                <div className="services">
                    <div className="sub-title">Server</div>
                    <img src={backend} alt="server" />
                    <div className="sub-section">
                        Node.js, Express, Redux, Rest API systems, Payment systems,
                        MySQL, MongoDB, Password hashing, Login systems, Authentication
                        </div>
                </div>
                <div className="services">
                    <div className="sub-title">Database</div>
                    <img src={database} alt="database" />
                    <div className="sub-section">
                        MySQL, MongoDB, Password hashing, Login systems, Authentication
                        </div>
                </div>
                <div className="services">
                    <div className="sub-title">Additional</div>
                    <img src={additional} alt="additional" />
                    <div className="sub-section">
                        Data driven web development, Big O notation, Single page apps, Mocha/Chai unit testing, Implementing
                        middleware, VS Code, Continuous Integration
                    </div>
                </div>

                <footer className="footer span-row-2">
                    <Link smooth to="/">home</Link>
                    <Link smooth to="/mobile/details/#portfolio">portfolio</Link>
                    <Link smooth to="/mobile/details/#services">services</Link>
                    <Link smooth to="/mobile/details/#hire">hire me</Link>
                </footer>
            </div>
        </Layout>
    )
}
