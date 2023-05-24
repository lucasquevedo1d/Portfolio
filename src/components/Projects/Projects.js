import React from 'react'
import { CardProjects, Main, SpaceProjects, TextHover, TitleProjects } from './styled'
import Ifuture from '../../assets/Ifuture.png'
import NG from '../../assets/caixa.png.jpg'
import Alfood from '../../assets/alfood11.jpg'
import Olimpics from '../../assets/olimpics.jpg'
import Lama from '../../assets/Lama.jpg'
import Pizza from '../../assets/comida3.jpg'


const Projects = () => {
  return (
    <div>
        <Main>
        <h1><TitleProjects>Projetos</TitleProjects></h1>
        <br/>
        <SpaceProjects>
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/Labefood' target='_blank'>
        <div>
        <h1>Labefood</h1>
        <p>Projeto front-end inspirado no ifood</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={Ifuture}/>
       </a> 
        </CardProjects> 
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/NG-CASH' target='_blank'>
        <div>
        <h1>NG-Cash</h1>
        <p>Projeto full-stack inspirado em bancos digitais</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={NG}/>
       </a> 
        </CardProjects> 
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/Alfood' target='_blank'>
        <div>
        <h1>Alfood</h1>
        <p>Projeto front-end insprados em guias de melhores pratos e restaurantes</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={Alfood}/>
       </a> 
        </CardProjects> 
        <br/>
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/Estante-Virtual' target='_blank'>
        <div>
        <h1>Estante-Virtual</h1>
        <p>Projeto back-end Api Rest para classificação de competições olímpicas</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={Olimpics}/>
       </a> 
        </CardProjects> 
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/Lama' target='_blank'>
        <div>
        <h1>Lama</h1>
        <p>Projeto back-end APi Rest completa para um sistema de Festival de música</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={Lama}/>
       </a> 
        </CardProjects> 
        <CardProjects>
        <a href='https://github.com/lucasquevedo1d/Cookenu-backend' target='_blank'>
        <div>
        <h1>Cookenu</h1>
        <p>Projeto back-end APi Rest completa para um sistema de pratos e receitas</p>
        <p>Clique para acessar o Github</p>
        </div>
       <img src={Pizza}/>
       </a> 
        </CardProjects>  
        </SpaceProjects>
        <br/>
        </Main>
    </div>
  )
}

export default Projects