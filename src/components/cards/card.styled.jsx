import styled from 'styled-components'
import { Center } from '../header/header.styled'

export const Carousel = styled.div`
    border: solid 1px red;
    ${Center}
    flex-direction: column;
    justify-content: space-evenly;
    width: 35%;
    height: 80vh;
    text-align: center;
    img{
        border: solid 1px red;
        width: 100%;
        height: 50%;
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

