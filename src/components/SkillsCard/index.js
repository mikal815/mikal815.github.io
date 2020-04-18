import React from 'react';
import styled from 'styled-components';

const SkillsCard = styled.div`
   display: grid;
   justify-items: center;
   font-family: "Helvetica Neue","Helvetica",Helvetica,Arial,sans-serif;
   align-items: center;
    border-radius: 3px;
    width: 25vw;
    min-height: 15vh;
    max-height: 23vh;
    min-width: 15vh;
    max-width: 23vh;
    margin-right: 20px;
    margin-left: 20px;
    background-color: #227d5b;
    color: #ffffff;
    padding: 10px;
`

export default function (props) {
    return (
        <SkillsCard>
            {props.children}
        </SkillsCard>
    );
}
