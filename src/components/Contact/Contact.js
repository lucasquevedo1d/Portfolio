import React from 'react'
import { City, EmailAdress, EmailPosition, HoverIcons, LocationTitle, Main, PargraphGitHub, PhoneNumber, PhoneTitle, PositionContact, SpaceGithub, SpaceLinkedin, SpaceSocialMedia, SpaceWhatsapp, TitleContact } from './styled'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Typography from '@mui/material/Typography';
import { Font } from './styled';



const Contact = () => {
   

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Font>
                Lucas Quevedo/
                {new Date().getFullYear()}
            </Font>
           <Font>{'Copyright © '}</Font> 

        </Typography>
    );
}
    return (
        <Main>
            <h1><TitleContact>Contato:</TitleContact></h1>
            <PositionContact>
            <div>
                <LocationOnOutlinedIcon sx={{ height: '300px', width: "50px", ml:"110px" }}/>
                <LocationTitle>Localização</LocationTitle>
                <City>Pelotas/RS</City>
                </div>
                <div>
                    <EmailOutlinedIcon sx={{ height: '300px', width: "50px" }} />
                    <EmailPosition>Email</EmailPosition>
                    <EmailAdress>lucasquevedo1d@gmail.com</EmailAdress>
                </div>
                <div>
                <LocalPhoneOutlinedIcon sx={{ height: '300px', width: "50px", ml:'-100px' }} />
                <PhoneTitle>Telefone</PhoneTitle>
                <PhoneNumber>(53) 98465-9744</PhoneNumber>
                </div>
            </PositionContact>
            <br/>
            <br/>
            <br/>
            <Copyright sx={{ml:'50px'}}/>
            <SpaceSocialMedia>
            <a href='https://github.com/lucasquevedo1d' target='_blank'><SpaceGithub sx={{mr:'-30px'}}/></a>
            <a href='https://www.linkedin.com/in/lucas-moraes-quevedo/' target='_blank'><SpaceLinkedin/></a> 
            <a href='https://wa.me/5553984659744' target='_blank'><SpaceWhatsapp sx={{ml:'10px'}}/></a>
            </SpaceSocialMedia>
            <br/>
        </Main>
    )
}

export default Contact