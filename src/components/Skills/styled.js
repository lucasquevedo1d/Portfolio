import styled from "styled-components";
import { media } from "../../assets/media/media";


export const Main = styled.div`
background-color: #191C1F;
color: white;
margin-top: 50px;
height: 700px;
width: 100%;
font-family: 'Poppins', sans-serif;
${media.mobile`
 width: 10%;
 margin-bottom:-40px;
div{
   
}
`}
${media.desktop`
width: 1370px;
h1{
    margin-left:270px ;
}
`}

${media.tablet`
width: 788px;
h1{
    margin-left:120px ;
}
`}
`

export const TitleSkills = styled.h1`
font-weight: 900;
margin-left:600px;
`

export const SpaceSkills = styled.div`
min-height: 200px;
width: 400px;
margin-top: 40px;
border: 5px solid white;
padding: 20px;
${media.tablet`
width: 250px;
`}

:hover{
    transform: scale(1.1);
    transition: calc(0.7s);
    cursor: inherit;
}
ul:hover{
    color: orange;
    transform: scale(1.1);
    transition: calc(0.7s); 
    
}
`



export const PositionContainer = styled.div`
display: flex;
justify-content: space-evenly;

`
