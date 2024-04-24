import * as S from './header.styled.jsx'
import { Link } from 'react-router-dom'
import perfpic from '../../assets/foto_perfil.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import ig from '../../assets/ig.png'

export default function Header() {
  return (
    <>
    <S.GlobalS/>
    <S.Header>
      <S.Profile>
        <figure>
          <img src={perfpic} alt="Foto de perfil" />
          <h2>Kauã Vitor</h2>
          <h3>Front-end Dev</h3>
        </figure>
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
      <S.Sites>
        <a href="https://www.linkedin.com/in/kaua-vitor-miranda/">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/vithord" target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a href="https://instagram.com/panis_et_vetor">
          <img src={ig} alt="Instagram" />
        </a>
      </S.Sites>
    </S.Header>
    </>
  )
}
