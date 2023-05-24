import styled from "styled-components";
import { media } from "../../assets/media/media";

export const Main = styled.div`
background-color: #191C1F;
color: white;
margin-top: 230px;
min-height: 500px;
width: 100%;

${media.tablet`
width: 750px;
margin: 50 auto;

img{
    margin-left:250px;
}

h1{
    margin-left:18%;
}
`}

${media.mobile`
width: 800px;

img{
    margin-left:250px;
}
`}
`

export const Border = styled.div`
border: solid 5px white;
min-height: 300px;
width: 800px;
margin: auto;
align-items: center;
:hover{
    transform: scale(1.1);
    transition: calc(0.7s);
}

${media.tablet`
width: 80%;
`}
`



export const TitleAbout = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 40%;
padding-top: 20px;
font-weight: 900;
`

export const ParagraphAbout = styled.p`
font-family: 'Poppins', sans-serif;
font-weight: 500;
margin-left:10%;
margin-right: 10%;
margin-bottom: 5%;
`

export const ImgAbout = styled.img`
height: 100px;
width: 100px;
border-radius: 60%;
margin-left: 46%;
`