import Card from "../../components/cards/Card"
import Header from "../../components/header/Header"
import * as S from '../../components/header/header.styled'
import { Cards, Content, Main } from "./styled.projetos"
import project from '../../assets/project-image/site1-overview.png'

export default function Projetos() {



  return (
    <S.AppBox>
    <Header/>
    <Main>
      <Content>
        <h1>Projetos já feitos</h1>
        <Cards>
          <Card
          image={project} 
          title={'Projeto login next.js'}
          desc={'projeto de login e cadstro com página segura usando cookies, acessível apenas quando o usuário está cadastrado'}
          link={'https://github.com/vithord/login-nextjs'}
          link1={'https://nextprojectlogin.netlify.app'}
          name={'projeto login'}
          />

          <Card title={'Projeto'}
          desc={'Página estática do Mc Donalds que quando clicado em alguma '}
          link={'https://github.com/vithord/mc-donalds'}
          link1={'https://mc-donal.netlify.app'}
          name={'Mc Donalds'}
          />
        </Cards>
      </Content>
    </Main>
    </S.AppBox>
  )
}
