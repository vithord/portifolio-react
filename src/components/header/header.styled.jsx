import styled, { createGlobalStyle, css } from 'styled-components'
import routesBg from '../../assets/ui_bg.png'
import Bg from '../../assets/bg.png'

export const GlobalS = createGlobalStyle`
*{    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'arial';
    color: #e2d8cf;
}
`

export const Center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AppBox = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(17deg, rgba(0,0,0,1) 40%, #b700ff 100%);
    color: #e2d8cf;
    display: flex;
`
export const Header = styled.header`
    height: 100vh;
    width: 20vw;
`
    
export const Profile = styled.section`
    width: 100%;
    height: 30vh;
    // background-image: url(${Bg});
    ${Center}
    justify-content: space-evenly;
    figure{
        border-radius: 100px;
    }
    img{
        border-radius: 100px;
        width: 100%;
    }
`
    
export const Bar = styled.nav`
    // background-image: url(${routesBg});
    ${Center}
    width: 100%;
    height: 30vh;
    ul{
        ${Center}
        justify-content: space-evenly;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    a{
        // color: #b17c7a;
        color: white;
        text-decoration: none;
        font-size: 1.3rem;
        cursor: pointer;
    }
`
    
export const List = styled.li`
    height: 7.9vh;
    width: 65%;
    // border: solid 1px #b17c7a;
    border: solid 2px #ff35e4;
    border-radius: 17px;
    ${Center};
`

export const Sites = styled.section`
    width: 100%;
    height: 40vh;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    a{
        ${Center}
        border-radius: 30px;
        border: solid 1px;
        width: 15%;
        background-color: white;
    }
    img{
        width: 100%;
        border-radius: 30px;
    }
`

