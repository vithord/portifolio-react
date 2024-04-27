import Header from '../../components/header/Header'
import * as S from '../../components/header/header.styled'
import { Content, Main } from './styled.home'
import pic from '../../assets/perf-pic.png'


export default function Home() {
    return (
      <S.AppBox>
        <Header/>
        <Main>
          <Content>
            <div>
            <h1>Seja bem-vinde/o/a! Esse é meu portifólio</h1>
            <h3>
              "Um bom programador é aquele que cosnsegue entender sua ferramenta e dominá-la sem muitos problemas."
            </h3>
            </div>
          <img src={pic} alt="" />
          </Content>
        </Main>
      </S.AppBox>
  )
}
