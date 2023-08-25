import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../Utils/useWindowSize";


function Orb(){

    const {width, height} = useWindowSize()

    console.log(width, height);

    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width}px,${height/2}px);
        }
        100%{
            tranform: translate(0,0);
        }
    `

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -30vh;
        margin-top: -30vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(250px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

    return(
        <OrbStyled></OrbStyled>
    )
}

export default Orb