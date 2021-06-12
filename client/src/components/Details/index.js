import React, { useState } from 'react'
import Logo from '../Logo';
import Menu from '../Menu';
import '../Details/Details.css';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import OCHS from '../../assets/images/OCHS.PNG'
import Shapes from '../../assets/images/Shapes.PNG';
import SurfersDepot from '../../assets/images/surfersdepot.PNG';
import frontend from '../../assets/icons/frontend-big.svg';
import backend from '../../assets/icons/backend-big.svg';
import database from '../../assets/icons/database-big.svg';
import additional from '../../assets/icons/additional-big.svg';
import { HashLink as Link } from 'react-router-hash-link';
import Modal from '../Modal';
import axios from 'axios'



export default function Details() {

    const modalRef = React.useRef();

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

        if (validateEmail(email)) {
            e.preventDefault();

            const dataToSubmit = {
                name,
                email,
                message
            }

            axios.post("/api/sendMail", dataToSubmit).then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    openModal()
                }
            })

            resetForm();
        }
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const openModal = () => {
        modalRef.current.openModal()
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    return (
        <div className="layout">
            {/* <Logo /> */}
            <Menu />
            <div className="main-title span-row-2" id="portfolio" >Portfolio</div>

            <div className="project">
                <div className="inner-title">Surfer's Depot</div>
                <img src={SurfersDepot} alt="Surfer's Depot" />
                <div className="caption">
                    Full stack e-commerce web app. Front-end tech used:
                    React, Material-UI, Bootstrap, HTML5, CSS3.
                    Back-end tech used: MongoDB, Node.js, Redux, and Express.
                    Uses login system with password hashing. User can browse an inventory of surfboards and filter
                    results by brand, length, shape,
                    and price. A logged in user can add or remove items from their cart which persists with
                    MongoDB.
                    Admin view allows the administrator to add new products onto
                    the
                    site. Users must pass authentication to access the admin area.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">Icarus Travel</div>
                <a href="http://superb-science.surge.sh/"><img src={Icarus} alt="Icarus" /></a>
                <div className="caption">
                    Features include React on the front-end with carousel and varios animations.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">Shape Shifter</div>
                <a href="http://fluffy-zoo.surge.sh/"><img src={Shapes} alt="Shape Shifter" /></a>
                <div className="caption">
                    Memory game build with React. Goal is to click each shape
                    without clicking the same shape twice. Images are randomly repositioned
                    after every click increasing difficulty. 12 shapes in total; once your score
                    reaches 12 you win. Click a shape twice and score is reset to zero and a new game begins. Top
                    score indicator helps you gauge your progress.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">Boardwalk Pier Stage</div>
                <a href="http://the-event2021.surge.sh/" ><img src={BPS} alt="Boardwalk Pier Stage" /></a>
                <div className="caption">
                    Featuring React on the frontend as well as a countdown clock which displays the amount of
                    days, hours, minutes and seconds until the event. Other features include a carousel and a side menu drawer.
                    After clicking a link the user is vertically scrolled directly to the appropriate content.
                    Animations give a zoom effect on certain elements. An iframe shows the venue's
                    location on google maps.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">OCHS Baseball</div>
                <a href="http://oceancity-baseball.surge.sh/"><img src={OCHS} alt="OCHS Baseball" /></a>
                <div className="caption">
                    Featuring React for frontend framework, Twitter plugin and carousel. Layout using CSS Grid.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">Music to My Ears</div>
                <a href="https://music-to-my-ears-1.herokuapp.com/"><img src={MTME} alt="Music to My Ears" /></a>
                <div className="caption">
                    Ear training app for musicians using intervals.
                    The app runs a sequence of two notes consecutively
                    and the user must mimic the same sequence using only their ears as a guide. The key
                    farthest to the left is the key the user must start on.
                    Built using React on the frontend and Node.js, Express,
                    and MongoDB (save score) on the backend. Also features a login system using
                    Passport.js.
                    </div>
            </div>


            <div className="services-title span-row-2" id="services">Services</div>
            <div className="services-container span-row-2">
                <div className="services-item">
                    <div className="services-inner-title">Frontend</div>
                    <img src={frontend} alt="frontend" />
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>Javascript(ES6)</div>
                    <div>React</div>
                    <div>Responsive Design</div>
                    <div>Photoshop</div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Server</div>
                    <img src={backend} alt="server" />
                    <div className="services-sub-section">
                        <div>Node.js</div>
                        <div>Express</div>
                        <div>React</div>
                        <div>Redux</div>
                        <div>Rest API</div>
                        <div>Payment systems</div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Database</div>
                    <img src={database} alt="database" />
                    <div className="services-sub-section">
                        <div>MySQL</div>
                        <div>MongoDB</div>
                        <div>Password hashing</div>
                        <div>Authentication</div>
                        <div>Authorization</div>
                        <div className="hidden-dash">-</div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">Additional</div>
                    <img src={additional} alt="additional" />
                    <div className="services-sub-section">
                        <div>Debugging</div>
                        <div>Tech integration</div>
                        <div>Project Management</div>
                        <div>Scaling</div>
                        <div>Data Scraping</div>
                        <div className="hidden-dash">-</div>
                    </div>
                </div>
            </div>

            <div className="span-row-2 about-title" id="about">About</div>

            <div className="span-row-2 about-blurb">
                Software developer building good looking functional websites and apps while taking into consideration the user experience and
                accessability of the end product.
                Complex design and developmet challenges are solved using familiarity with technologies and tools as well as coding abilities, analytical thinking, and creativity.
                Certified "Full stack Web Developer" through UPenn LPS coding bootcamp & The New York Code + Design Academy.
            </div>

            <div className="span-row-2 contact-title" id="hire">Contact</div>

            <div className="span-row-2 email">
                mikal815@gmail.com
            </div>

            {/* <form className="form span-row-2" onSubmit={handleSubmit}>
                <input className="input" id="name" placeholder="Name" value={name} onChange={handleChange}></input><br></br>
                <input className="input" id="email" placeholder="Email" type="email" value={email} onChange={handleChange}></input><br></br>
                <textarea className="textarea" id="message" placeholder="Message" value={message} onChange={handleChange}></textarea><br></br>
                <button className="btn span-row-2" onClick={handleSubmit}>Send</button>
                <Modal ref={modalRef}>
                    <h1>Thanks</h1>
                    <p>
                        Message Sent Successfully!
                    </p>
                    <button onClick={() => modalRef.current.close()}>
                        Close
                    </button>
                </Modal>
            </form> */}

            <footer className="footer span-row-2">
                <Link smooth to="/">home</Link>
                <Link smooth to="/details/#portfolio">portfolio</Link>
                <Link smooth to="/details/#services">skills</Link>
                <Link smooth to="/details/#about">about</Link>
                <Link smooth to="/details/#hire">contact</Link>
            </footer>
        </div>

    )
}
