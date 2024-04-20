import * as S from './header.styled.jsx'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <S.GlobalS/>
    <S.Header>
      <S.Profile>
        <img src="" alt="Foto de perfil" />
        <h1> Kauã Vitor</h1>
      </S.Profile>
      <S.Bar>
        <ul>
          <S.List>
            <Link to={'/'}>Home</Link>
          </S.List>
          <S.List>
            <Link to={'/Projetos'}>Meus projetos</Link>
          </S.List>
          <S.List>
            <Link to={'/Sobre'}>Sobre mim</Link>
          </S.List>
        </ul>
      </S.Bar>
    </S.Header>
    </>
  )
}
