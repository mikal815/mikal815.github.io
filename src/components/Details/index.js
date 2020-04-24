import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo';
import Sidebar from '../Menu';
import '../Details/Details.css';
import BPS from '../../assets/images/BPS.PNG';

const Layout = styled.div`
    background-color: #27292b;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: 100vh;
    right: 0;
    left: 0;
`

export default function Details() {
    return (
        <Layout>
            <Logo />
            <Sidebar />
            <div className="details-container span-row-2">
                <div className="project">
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
                <div className="project">

                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>
            </div>
        </Layout>
    )
}
