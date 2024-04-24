import styled from 'styled-components'
import { Center } from '../../components/header/header.styled'

export const Main = styled.main`
    ${Center}
    width: 80%;
    height: 100vh;
`

export const Content = styled.div`
    ${Center}
    justify-content: space-evenly;
    flex-direction: column;
    border: solid 1px red;
    width: 100%;
    height: 90%;
`

export const Cards = styled.div`
    ${Center}
    justify-content: space-around;
    width: 100%;
    height: 90%;
`