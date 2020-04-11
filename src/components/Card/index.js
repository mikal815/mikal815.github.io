import React from 'react';
import styled from 'styled-components';


const CardStyle = styled.div`
    display: grid;
    border-radius: 3px;
    width: 90vw;
    min-height: 15vh;
    max-height: 23vh;
    margin-right: 5vw;
    margin-left: 5vw;
    background-color: #227d5b;
    color: #ffffff;
    padding: 10px;
`

const Slogan = styled.div`
    font-size: 1.3rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: 0em;
    padding-bottom: 5px;
`

const Tag = styled.div`
    color: #29272b;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`

export default function Card() {
    return (
        <CardStyle>
            <Slogan>I actualize intuative and engaging experiences ~</Slogan>
            <Tag>Software Developer<br></br>Philadelphia, PA</Tag>
        </CardStyle>
    )
}


