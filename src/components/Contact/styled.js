import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { media } from "../../assets/media/media";


export const Main = styled.div`
height: 420px;
margin-top: -30px;
width: 100%;
background-color: #191C1F;
color: white;
font-family: 'Poppins', sans-serif;
${media.mobile`
width: 768px;

`}

${media.tablet`
    max-width: 800px;
`}

${media.desktop`
width: 1370px;

`}
`

export const TitleContact = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 685px;
padding-top: 20px;
font-weight: 900;
${media.tablet`
margin-left: 333px;
`}
`

export const PositionContact = styled.div`
display: flex;
justify-content:space-evenly;
margin-top: -100px;
margin-left: -50px;
${media.tablet`

`}
`

export const EmailPosition = styled.h5`
font-family: 'Poppins', sans-serif;
margin-top: -130px;
margin-left: 8px;
`
export const EmailAdress = styled.p`
font-family: 'Poppins', sans-serif;
margin-top: -15px;
margin-left: -80px;
${media.tablet`
font-size:small;
`}
`
export const PhoneNumber = styled.p`
font-family: 'Poppins', sans-serif;
margin-top: -15px;
margin-left: -140px;
color: white;
${media.tablet`
margin-left: -115px;
font-size:small;
`}
`

export const PhoneTitle = styled.h5`
font-family: 'Poppins', sans-serif;
margin-top: -130px;
margin-left: -100px;
${media.tablet`
/* margin-left: -45px */
`}
`

export const Font = styled.div`
font-family: 'Poppins', sans-serif;
color:white;
`

export const SpaceGithub = styled(GitHubIcon)`
margin-left: 1230px;
color: white;
${media.tablet`
margin-left: 635px;
`}
`

export const SpaceLinkedin = styled(LinkedInIcon)`
margin-left: 40px;
color: white;
`

export const SpaceWhatsapp = styled(WhatsAppIcon)`
margin-left: 30px;
color: white;

`

export const SpaceSocialMedia = styled.div`
margin-top: -50px;
display: flex;
flex-direction: row;
padding: 10px;
margin-left: -20px;
p{
    margin-top: 20px;
    margin-left: -32px;
    font-size: x-small;
    padding: 2px;
}
`
export const LocationTitle = styled.h5`
font-family: 'Poppins', sans-serif;
margin-top: -130px;
margin-left: 95px;
`

export const City = styled.p`
font-family: 'Poppins', sans-serif;
margin-top: -15px;
margin-left: 95px;
color: white;
${media.tablet`
font-size:small;
`}
`
export const PargraphGitHub = styled.p`
 margin-top: 20px;
margin-left: -200px;
font-size: x-small;
padding: 2px;

`