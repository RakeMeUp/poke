import FetchButton from "./comps/FetchButton/FetchButton"
import ThemeSwitch from "./comps/ThemeSwitch/ThemeSwitch"
import MainContainer from "./comps/MainContainer/MainContainer";
import { useState, createContext } from "react"

export const cardsContext = createContext([]);

export default function App() {
  const [cards, setCards] = useState(false)

  return (
    <>
      <nav>
        <h1>PokeCards</h1>
        <ThemeSwitch />
      </nav>

      <cardsContext.Provider value={cards}>
        <MainContainer />
      </cardsContext.Provider>

      <footer>
        <cardsContext.Provider value={{cards, setCards}}>
          <FetchButton />
        </cardsContext.Provider>
      </footer>
    </>
  )
}