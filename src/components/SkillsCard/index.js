import React from 'react';
import styled from 'styled-components';

const SkillsCard = styled.div`
   display: grid;
   justify-items: center;
   align-items: center;
   color: #29272b;
   font-size: 1rem;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   line-height: 1.5;
   letter-spacing: 0.00938em;
   border-radius: 3px;
   width: 25vw;
   min-height: 15vh;
   max-height: 23vh;
   min-width: 15vh;
   max-width: 23vh;
   margin-right: 1rem;
   margin-left: 1rem;
   background-color: #227d5b;
   padding: 10px;
`

export default function (props) {
    return (
        <SkillsCard>
            {props.children}
        </SkillsCard>
    );
}
