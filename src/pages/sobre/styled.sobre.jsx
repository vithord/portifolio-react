import styled from "styled-components"
import { Center } from "../../components/header/header.styled"

export const Main = styled.main`
    ${Center}
    justify-content: space-around;
    flex-direction: column;
    width: 80%;
    height: 100vh;
`

export const Text = styled.section`
    ${Center}
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    height: 60vh;
    font-size: 1.3rem;
`

export const Footer = styled.footer`
    ${Center}
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 30vh;
    div{
        width: 80%;
        ${Center}
        justify-content: space-evenly;
        text-align: center;
    }
    img{
        height: 12vh;
    }
    caption{
        ${Center}
    }
`