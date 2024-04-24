import styled from 'styled-components'
import { Center } from '../../components/header/header.styled'

export const Main = styled.main`
    ${Center}
    /* border: solid 1px red; */
    width: 80%;
    height: 100vh;
`

export const Content = styled.div`
    ${Center}
    /* border: solid 1px red; */
    width: 100%;
    height: 55%;
    justify-content: space-evenly;
    div p{
        font-size: larger;
    }
    img{
        border-radius: 100px;
    }
`