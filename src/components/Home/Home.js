import React from 'react'
import { ButtonCV, HomeImg, HomeParagraph, HomeTitle, HomeTitle2, Linha, Main, SpaceCV, SpaceGithub, SpaceIcons, SpaceLinkedin, SpaceParagraph, SpaceWhatsapp } from './styled'
import Office from '../../assets/officeImage.jpg'
import CV from '../../assets/CV/Curriculo fullstack.pdf'

const Home = () => {

  return (
    <Main>
        <HomeTitle>Lucas</HomeTitle>
        <HomeTitle2>Quevedo</HomeTitle2>
        <HomeImg src={Office}/>
        <SpaceParagraph>
        <Linha/>
        <HomeParagraph>
          Desenvolvedor Fullstack
        </HomeParagraph>
        <SpaceIcons>
        <a href='https://github.com/lucasquevedo1d' target='_blank'><SpaceGithub/></a>
        <a href='https://www.linkedin.com/in/lucas-moraes-quevedo/' target='_blank'><SpaceLinkedin/></a>
        <a href='https://wa.me/5553984659744' target='_blank'><SpaceWhatsapp/></a>
        </SpaceIcons>
        <SpaceCV>
        <a href={CV} download><ButtonCV>Baixar CV</ButtonCV></a>
        </SpaceCV>
        </SpaceParagraph>
        
    </Main>
  )
}

export default Home