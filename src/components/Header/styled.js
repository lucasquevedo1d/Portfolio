import styled from "styled-components";
import { media } from "../../assets/media/media";


export const Header2 = styled.header`
position:fixed ;
margin-top: -220px;
background-color: white;
width: 100%;
height: 110px;
z-index: 9999;
${media.tablet`
width: 768%;
height: 90px;
z-index: 9999;
h1{
        margin-left: 105px;
        z-index: 9999;
        font-size:medium;
        padding: 1px;

    }  
`
  
}

${media.mobile`
width: 100%;
height: 110px;
h1{
        margin-left: 105px;
        z-index: 9999;
        font-size:small;
        padding: 3px;
    } 
`}
    
`
export const MenuResponsive = styled.div`
position: absolute;
z-index: 4;
width: 100%;
padding: 10px;
overflow: hidden;
display: none;
height: 40px;


${media.tablet`
display: flex;
align-items: center;
position: fixed;
margin-left:60px ;
`
}
`

export const SpaceButton = styled.ul`
list-style: none;
outline: none;
font-family: 'Poppins', sans-serif;
margin-left: 1000px;
margin-top: -60px;
margin-bottom: 20px;
list-style: none;
overflow: hidden;
display: flex;
padding-right:10px;
cursor: pointer;

li a{
    display: block;
    text-align: center;
    outline: none;
    text-decoration: none;
    color: black;
    padding: 5px;
    width: 100%;
:hover{
    transition: calc(1s);
    transform: scale(1.1);
}

   
}

${media.tablet`
display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 999;
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 120%;
    padding: 0;
    opacity: 0.9;
    background-color: white;
    color: black;
    margin-left: -100px;
    margin-top: 50px;
    

    li a{
        margin-left: 30px;
        padding: 10px;
        color: black;
        font-size:large;

    }

    ul{
        margin-top:-20px
    }
`

    }
`



export const HeaderTitle = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 200px;
font-weight: 1000;
font-size: 140%;
z-index: 999;
`

export const HeaderTitle2 = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 230px;
margin-top: -25px;
font-weight: 100;
font-size: 140%;
`