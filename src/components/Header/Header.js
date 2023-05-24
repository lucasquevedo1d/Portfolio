import React, {useState}  from 'react';
import { HeaderTitle, HeaderTitle2, MenuResponsive, SpaceButton } from './styled';
import { Header2 } from './styled';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


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
          <li sx={{color:'black', bgcolor:'white'}} ><a href='#Home'>Inicio</a></li>
          <li sx={{color:'black', bgcolor:'white'}} ><a href='#About'>Sobre Mim</a></li>
          <li sx={{color:'black', bgcolor:'white'}} ><a href='#Projects'>Projetos</a></li>
          <li sx={{color:'black', bgcolor:'white'}} ><a href='#Skills'>Conhecimentos</a></li>
          <li sx={{color:'black', bgcolor:'white'}} ><a href='#Contact'>Contato</a></li>

          </SpaceButton>    
      </Header2>
  );
}

export default Header