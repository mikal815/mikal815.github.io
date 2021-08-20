import React, { useState } from 'react'
import Logo from '../Logo';
import Menu from '../Menu';
import '../Details/Details.css';
import BPS from '../../assets/images/BPS.PNG';
import Icarus from '../../assets/images/Icarus.PNG';
import MTME from '../../assets/images/mtme.PNG';
import OCHS from '../../assets/images/OCHS.PNG'
import Shapes from '../../assets/images/Shapes.PNG';
import SurferDepot from '../../assets/images/surfer-depot.PNG';
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

            axios.post("/sendMail", dataToSubmit).then(function (response) {
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
            <div className="main-title span-row-2" id="portfolio" >PORTFOLIO</div>

            <div className="project">
                <div className="inner-title">SURFER DEPOT</div>
                <a href="https://surfer-depot.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={SurferDepot} alt="Surfer Depot" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/surfer-depot" className="git-link">VIEW CODE</a>
                </div>

                <div className="caption">
                    Full stack e-commerce web app. Front-end tech used:
                    React, Redux, Material-UI, Bootstrap, HTML5, CSS3.
                    Back-end tech used: MongoDB, Node.js, and Express.
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
                <div className="inner-title">ICARUS TRAVEL</div>
                <a href="https://superb-science.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={Icarus} alt="Icarus" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/icarus" className="git-link">VIEW CODE</a>
                </div>

                <div className="caption">
                    Website built with HTML5, CSS, and Bootstrap.  Features scrolling image carousels and various animations.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">SHAPE SHIFTER</div>
                <a href="https://fluffy-zoo.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={Shapes} alt="Shape Shifter" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/clicky-game" className="git-link">VIEW CODE</a>
                </div>

                <div className="caption">
                    Memory game build with React. Goal is to click each shape
                    without clicking the same shape twice. Images are randomly repositioned
                    after every click increasing difficulty. 12 shapes in total; once your score
                    reaches 12 you win. Click a shape twice and score is reset to zero and a new game begins. Top
                    score indicator helps you gauge your progress.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">BOARDWALK PIER STAGE</div>
                <a href="https://bps-site.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={BPS} alt="Boardwalk Pier Stage" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/the-event" className="git-link">VIEW CODE</a>
                </div>

                <div className="caption">
                    Featuring React on the frontend as well as a countdown clock which displays the amount of
                    days, hours, minutes and seconds until the event. Other features include a carousel and a side menu drawer.
                    After clicking a link the user is vertically scrolled directly to the appropriate content.
                    Animations give a zoom effect on certain elements. An iframe shows the venue's
                    location on google maps.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">OCHS BASEBALL</div>
                <a href="https://ochs-baseball.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={OCHS} alt="OCHS Baseball" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/ochs" className="git-link">VIEW CODE</a>
                </div>

                <div className="caption">
                    Featuring React for frontend framework, Twitter plugin and carousel. Layout using CSS Grid.
                    </div>
            </div>

            <div className="project">
                <div className="inner-title">MUSIC TO MY EARS</div>
                <a href="https://music-to-my-ears-1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={MTME} alt="Music to My Ears" /></a>

                <div className="git-link-container">
                    <a href="https://github.com/mikal815/ear-trainer" className="git-link">VIEW CODE</a>
                </div>

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


            <div className="services-title span-row-2" id="services">SERVICES</div>
            <div className="services-container span-row-2">
                <div className="services-item">
                    <div className="services-inner-title">FRONTEND</div>
                    <img src={frontend} alt="frontend" />
                    <div>HTML5</div>
                    <div>CSS3/Sass</div>
                    <div>Javascript(ES6)</div>
                    <div>React</div>
                    <div>Redux</div>
                    <div>Responsive Design</div>
                    <div>Photoshop</div>
                    <div className="hidden-dash">-</div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">SERVER</div>
                    <img src={backend} alt="server" />
                    <div className="services-sub-section">
                        <div>Node.js</div>
                        <div>Express</div>
                        <div>RESTful Web Services</div>
                        <div>Email Services</div>
                        <div>Payment systems</div>
                        <div>Caching</div>
                        <div>Configuration</div>
                        <div className="hidden-dash">-</div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">DATABASE</div>
                    <img src={database} alt="database" />
                    <div className="services-sub-section">
                        <div>MongoDB</div>
                        <div>MySQL</div>
                        <div>Password hashing</div>
                        <div>Authentication</div>
                        <div>Authorization</div>
                        <div className="hidden-dash">-</div>
                        <div className="hidden-dash">-</div>
                        <div className="hidden-dash">-</div>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-inner-title">ADDITIONAL</div>
                    <img src={additional} alt="additional" />
                    <div className="services-sub-section">
                        <div>Debugging</div>
                        <div>Testing/Error handling</div>
                        <div>Tech integration</div>
                        <div>Scaling</div>
                        <div>Project Architecture</div>
                        <div>Data Scraping</div>
                        <div>Version Control</div>
                        <div>Deployment</div>
                    </div>
                </div>
            </div>

            <div className="span-row-2 about-title" id="about">ABOUT</div>

            <div className="span-row-2 about-blurb">
                Software developer building good looking functional websites and apps while taking into consideration the user experience and
                accessibility of the end product.
                Complex design and developmet challenges are solved using familiarity with technologies and tools as well as coding abilities, analytical thinking, and creativity.
                Certified "Full Stack Web Developer" through UPenn LPS coding boot camp & The New York Code + Design Academy.  I have experience working collaboratively on programming projects.
            </div>

            <div className="span-row-2 contact-title" id="hire">CONTACT</div>

            {/* <div className="span-row-2 email">
                mikal815@gmail.com
            </div> */}

            <form className="form span-row-2" onSubmit={handleSubmit}>
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
            </form>


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
