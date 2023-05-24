import styled from "styled-components";
import { media } from "../../assets/media/media";


export const Main = styled.div`
min-height: 700px;
width: 100%;
background-color: white;
font-family: 'Poppins', sans-serif;

${media.mobile`
width:100%;

`}

${media.desktop`
width: 1370px;
margin-left:-50px;
img{
width: 150px;

}

${media.tablet`
width: 768px;
margin: 0 auto;
flex-wrap: wrap;
img{
    margin-top:50px;
    display: flex;
    flex-wrap: wrap;
}
`}
`}
`


export const CardProjects = styled.div`
height: 450px;
width: 300px;
margin-left: 150px;
overflow: hidden;
padding-bottom: 60px;

${media.mobile`
img{
    display: flex;
}
`}

${media.tablet`
height: 300px;
width: 200px;
display: flex;
flex-wrap: nowrap;
margin: 0 auto;
overflow: hidden;
padding-bottom: 60px;

`}


img{
height:100%;
width:100%;
}


div{
    position: absolute;
    max-width: 300px;
    top: -300vh;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    opacity: 0.8;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
        margin-top: 50px;
    }

    p{
        margin-top: -10px;
        margin-left: 10px;
        margin-right: 10px;
    }
}
:hover{
    transform: scale(1.1);
    transition: calc(0.7s);
    ${media.tablet`
        display: none;
    `}
}

:hover div {
    top: 0;
    left: 0;
    transition: top 1s;
    width: 100%;
    height: 87%;
    padding-bottom: 10px;
    ${media.tablet`
        display: none;
    `}
}

`
export const TitleProjects = styled.h1`
font-family: 'Poppins', sans-serif;
margin-left: 45%;
padding-top: 20px;
font-weight: 900;
${media.tablet`
margin-left:280px;
`}
`
export const SpaceProjects = styled.div`
display: flex;
flex-wrap: wrap;
${media.tablet`

`}
`
