import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { media } from "../../assets/media/media";

export const Main = styled.div`
height: 410px;
width: 100%;
margin-top: 20px;
${media.tablet`
width: 768px;
height: 200px;
`
}
`
export const HomeTitle = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 310px;
margin-top: 220px;
font-weight: 1000;
font-size: 380%;
${media.tablet`
margin-top: 220px;
font-weight: 800;
font-size: 380%;
margin-left: 90px;
`}
`

export const HomeTitle2 = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 380px;
font-weight: 100;
font-size: 380%;
margin-top: -90px;
${media.tablet`
margin-top: -90px;
display: flex;
font-weight: 100;
font-size: 380%;
margin-left: 120px;
`}
`

export const HomeImg= styled.img`
height: 550px;
width: 550px;
margin-left: 820px;
margin-top: -290px;
border-radius: 60%;
${media.tablet`
height: 240px;
width: 240px;
margin-left: 420px;
`}
`
export const HomeParagraph = styled.p`
font-family: 'Poppins', sans-serif;
margin-top: -120px;
color: black;
margin-left:15px;
${media.tablet`
margin-top: 120px;
margin-left: 120px;
`}

`
export const Linha = styled.div`
width: 8.5rem;
height: 0.013rem;
margin-top: -110px;
margin-bottom: 10px;
border: solid 1px gray;
margin-left: -15px;
${media.tablet`
display: none;
`}
`
export const SpaceParagraph= styled.div`
display: flex;
margin-left: 315px;
margin-top: -185px;
${media.tablet`
    margin-left: 15px;
    margin-top:-200px ;
`}
`

export const SpaceGithub = styled(GitHubIcon)`
margin-top: -450px;
margin-left: -230px;
color: black;
:hover{
    background-color: black;
    border-radius: 20px;
    color: white;
    transition: calc(1s);
}
`

export const SpaceLinkedin = styled(LinkedInIcon)`
margin-top: -75px;
margin-left: 20px;
color: black;
:hover{
    color: blue;
    transition: calc(1s);
}
`

export const SpaceWhatsapp = styled(WhatsAppIcon)`
margin-top: -75px;
margin-left: 20px;
color: black;
:hover{
    color: green;
    transition: calc(1s);
}
`

export const ButtonCV = styled.button`
font-family: 'Poppins', sans-serif;
font-size: medium;
background-color: white;
color: black;
height: 45px;
width: 100px;
border-radius: 20px;
:hover{
    background-color: #191C1F;
    color: white;
    transition: calc(1.5s);
    font-family: 'Poppins', sans-serif;
    font-size: medium;
}
`

export const SpaceCV = styled.div`
margin-left: -230px;
position: relative;
${media.tablet`
 margin-top:210px;
 margin-left:-230px
 `}
`

export const SpaceIcons = styled.a`
 margin-top: -80px;
 ${media.tablet`
 margin-top:160px;
 margin-left:80px
 `}
`