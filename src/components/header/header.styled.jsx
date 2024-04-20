import styled, { createGlobalStyle, css } from 'styled-components'
import mainbg from '../../assets/ui_bg.png'
import menuBg from '../../assets/bg.png'
export const GlobalS = createGlobalStyle`
*{    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Geneva;
    text-color: #e2d8cf;
`

export const Center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AppBox = styled.div`
    width: 100%;
    background-color: violet;
    color: #e2d8cf;
    display: flex;
    background-image: url(${mainbg});
`

export const Header = styled.header`
    height: 100vh;
    width: 20vw;
    background-color: black;
    background-image: url(${menuBg})
`
    
export const Profile = styled.section`
    width: 100%;
    height: 30vh;
    ${Center}
    flex-direction: column;
`
    
export const Bar = styled.nav`
    justify-content: space-venly;
    ul{
        width: 100%
    }
    a{
        color: #A2787a;
        text-decoration: none;
        font-size: 1.5rem;
    }
    li:nth-child(1){
        border-top: solid 2px black;
    }
`
    
export const List = styled.li`
    height: 10vh;
    border-bottom: solid 2px black;
    ${Center}
`

