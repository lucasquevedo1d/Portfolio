import React from 'react'
import { Main, PositionContainer, SpaceSkills, TitleSkills } from './styled'

const Skills = () => {
  return (
    <Main>
        <br/>
        <br/>
        <h1><TitleSkills>Conhecimentos</TitleSkills> </h1>
        <PositionContainer>
<SpaceSkills>
<h2>Front-end</h2>
<ol>
<ul>- HTML</ul>
<ul>- CSS</ul>
<ul>- Javascript</ul>
<ul>- React.JS</ul> 
<ul>- Styled-Compnents</ul>
<ul>- Axios</ul>
<ul>- Hooks</ul>  
<ul>- Http</ul>  
<ul>- Github</ul>
</ol>
</SpaceSkills>
<SpaceSkills>
<h2>Back-end</h2>
<ol>
<ul>- Node.JS</ul>
<ul>- Typescript</ul>
<ul>- Javascript</ul>
<ul>- MySQL</ul> 
<ul>- Jest</ul>
<ul>-  Express</ul>
<ul>-  POO</ul>  
<ul>- Api Rest</ul>
<ul>- knex</ul>
<ul>- Testes Unitários</ul>
</ol>
</SpaceSkills>
</PositionContainer>
<br/>
<br/>
    </Main>
  )
}

export default Skills