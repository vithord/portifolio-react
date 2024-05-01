import React from 'react'

export default function Languages({image, text}) {
  return (
    <>
    <figure>
        <img src={image} alt={text} />
        <caption>{text}</caption>
    </figure>
    </>
  )
}
