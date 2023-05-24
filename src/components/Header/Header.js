import React, {useState}  from 'react';
import { HeaderTitle, HeaderTitle2, MenuResponsive, SpaceButton } from './styled';
import { Header2 } from './styled';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {Link} from 'react-scroll'


const Header = () => {

  const [show, setShow] = useState(false)

  const toogleMenu = () =>{
    setShow(!show)
  }

  console.log(show)
    return (
      <Header2 sx={{bgcolor:'white'}}>
        <MenuResponsive>
        <MenuOutlinedIcon onClick={() => toogleMenu()}/>
        </MenuResponsive>
          <HeaderTitle>Lucas</HeaderTitle>
          <HeaderTitle2>Quevedo</HeaderTitle2>
          <SpaceButton show={show}>
          <li sx={{color:'black', bgcolor:'white'}} >
            <Link to="Home" spy={true} smooth={true} offset={-250}duration={500}>Inicio</Link>
            </li>
          <li sx={{color:'black', bgcolor:'white'}} >
            <Link to="About" spy={true} smooth={true} offset={-100}duration={500}>Sobre Mim</Link>
            </li>
          <li sx={{color:'black', bgcolor:'white'}} >
          <Link to="Projects" spy={true} smooth={true} offset={-100}duration={500}>Projetos</Link>
            </li>
          <li sx={{color:'black', bgcolor:'white'}} >
            <Link to="Skills" spy={true} smooth={true} offset={-100}duration={500}>Conhecimentos</Link>
            </li>
          <li sx={{color:'black', bgcolor:'white'}} >
            <Link to="Contact" spy={true} smooth={true} offset={-100}duration={500}>Contato</Link>
            </li>

          </SpaceButton>    
      </Header2>
  );
}

export default Header