import { useContext, useState } from "react"
import { cardsContext } from "../../App"

export default function FetchButton() {
  let {cards, setCards} = useContext(cardsContext)

  const handleClick = () =>{
    setCards(true)
  } 

  return (
    <button onClick={handleClick}>FetchButton</button>
  )
}
