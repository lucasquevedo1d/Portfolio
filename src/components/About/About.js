import React from 'react'
import { Border, ImgAbout, Main, ParagraphAbout, TitleAbout } from './styled'
import Lucas from '../../assets/lucas.jpg'

const About = () => {
    return (
        <Main>
            <br/>
            <br/>
            <br/>
            <Border>
                <h1><TitleAbout>Sobre Mim</TitleAbout></h1>
                <ImgAbout src={Lucas} />
                <ParagraphAbout>
                    Olá me chamo Lucas tenho 29 anos, sou natural da cidade de Pelotas/RS e sou desenvolver Full-stack.
                    Já cursei Gestão pública e licenciatura em História, e atualmente sou formado no bootcamp Full Stack Web Developer pela Labenu. 
                    Sempre me interessei pelo mundo tecnológico e suas magias. 
                    Ao longo de minha formação tive disciplinas relacionadas com lógica e programação front-end e back-end que fez com que eu que soubesse cada vez mais que era nesse caminho que eu deveria seguir. Profissionalmente sempre trabalhei com atendiemnto ao público, 
                    onde pude desenvolver minhas habilidades de comunicação, colaboração em equipe, e vivenciar o ambiente empresarial de grandes empresas de atendiemnto ao público.
                    Sou apaixonado por aprender, e o constante aprendizado que a programação nos proporciona aumenta ainda mais meu empenho em codar.
                </ParagraphAbout>
            </Border>
            <br/>
            <br/>
            <br/>
        </Main>
    )
}

export default About