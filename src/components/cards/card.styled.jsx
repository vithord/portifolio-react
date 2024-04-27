import styled from 'styled-components'
import { Center } from '../header/header.styled'

export const Carousel = styled.div`
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    width: 100%;
    height: 90vh;
    text-align: center;
    img{
        width: 50%;
        height: 55%;
    }
    a{
        ${Center}
        border-radius: 30px;
        background-color: #ff009d;
        border: solid 1px red;
        text-decoration: none;
        padding: 10px;
        height: 40px;
        font-weight: bold;
    }
`

