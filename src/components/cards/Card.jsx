import { Carousel } from './card.styled'

export default function Card({image, title, desc, link, link1, name}) {
  return (
    <>
    <Carousel>
      <img src={image} alt="Preview" />
      <h2>
        {title}
      </h2>
      <p>
        {desc}
      </p>
      <a href={link}>
        Github | {name}
      </a>
      <a href={link1} target='_blank'>Deploy | {name}</a>
    </Carousel>
    </>
  )
}
