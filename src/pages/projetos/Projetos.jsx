import Card from "../../components/cards/Card"
import Header from "../../components/header/Header"
import * as S from '../../components/header/header.styled'
import { Cards, Content, Main } from "./styled.projetos"
import nextLogin from '../../assets/project-image/next-login-overview.png'
import mcdonalds from '../../assets/project-image/static-mcdonald-overview.png'
import './slider.style.css'

import 'swiper/swiper-bundle.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Projetos() {



  return (
    <S.AppBox>
    <Header/>
    <Main>
      <Content>
        <h1>Projetos já feitos</h1>
        <Cards>
          <Swiper modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay
            loop
            pagination={{clickable: true}}
          >
          <SwiperSlide>
            <Card
              image={mcdonalds}
              title={"Projeto Static Mc donald's"}
              desc={'Página estática do Mc Donalds que quando clicado em algum item, troca o item principal para o item que foi clicado.'}
              link={'https://github.com/vithord/mc-donalds'}
              link1={'https://mc-donal.netlify.app'}
              name={'Mc Donalds'}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image={nextLogin}
              title={'Projeto Login next.js'}
              desc={'projeto de login e cadstro com página segura usando cookies, acessível apenas quando o usuário está cadastrado.'}
              link={'https://github.com/vithord/login-nextjs'}
              link1={'https://nextprojectlogin.netlify.app'}
              name={'projeto login'}
            />
          </SwiperSlide>
          </Swiper>
        </Cards>
            
              
            

            

       {/* <Swiper
          
        >
          <SwiperSlide>
              
            </SwiperSlide>
        </Swiper> */}

      </Content>
    </Main>
    </S.AppBox>
  )
}
