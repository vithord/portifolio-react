import Header from "../../components/header/Header";
import * as S from '../../components/header/header.styled'
import Languages from "./Languages.card";
import { Footer, Main, Text } from "./styled.sobre";
import sql from '../../assets/commons/sql.png'
import htmlIcon from '../../assets/commons/html-icon.png'
import cssIcon from '../../assets/commons/css-icon.png'
import jsIcon from '../../assets/commons/js-icon.png'
import reactIcon from '../../assets/commons/react-icon.png'
import gitIcon from   '../../assets/commons/git-icon.png'
import styledIcon from '../../assets/commons/styled-components.png'


export default function Sobre() {
  return (
    <S.AppBox>
      <Header/>
      <Main>
        <h1>Um pouco sobre mim:</h1>

        <Text>
          <p>Olá, me chamo Kauã Vitor, tenho 19 anos e programo para valer tem uns meses, e isso graças ao projeto Vai na Web que me fez aprofundar um pouco mais na área de front-end, fazendo alguns projetos, além de me motivar a voltar a estudar programação. Agora eu sei, além das linguágens que eu ja sabia usar minimamente, outras ferramentas como o ReactJs e bibliotecas que ajudam na criação de um site dinâmico, juntamente com boas práticas.</p>

          <p>Eu gosto de assuntos como porgramação desde pequeno, nunca tive um computador nem muito contato com essa área, mas já me interessava em temas como hacking e segurança da informação. Foi quando apenas em 2021 tive a oportunidade de conhecer um pouco mais desse mundo no meu curso técnico da ETEC. Desde então eu comecei a querer saber mais como as coisas funcionavam por dentro delas, então acabei gostando muito de programação.</p>
        </Text>
        
        <Footer>
          <h1> Linguagens e tecnologias aprendidas:</h1>
          <div>
            <Languages image={htmlIcon} text={'HTML'}/>
            <Languages image={cssIcon} text={'CSS'}/>
            <Languages image={jsIcon} text={'JavaScript'}/>
            <Languages image={reactIcon} text={'ReactJs'}/>
            <Languages image={gitIcon} text={'Git'}/>
            <Languages image={styledIcon} text={'Styled components'}/>
            <Languages image={sql} text={'SQL Server'}/>
          </div>
        </Footer>
      </Main>
    </S.AppBox>
  )
}
