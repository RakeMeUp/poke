import FetchButton from "./comps/FetchButton/FetchButton"
import ThemeSwitch from "./comps/ThemeSwitch/ThemeSwitch"
import MainContainer from "./comps/MainContainer/MainContainer";
import { useState, createContext } from "react"

import './App.scss'

export const pokemonsContext = createContext();
export const themeContext = createContext();

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [theme, setTheme] = useState('light')

  return (
	<>
		<themeContext.Provider value={{theme, setTheme}}>
			<nav className="nav-container">
				<h1>PokeCards</h1>
				<ThemeSwitch />
			</nav>
		</themeContext.Provider>

		<themeContext.Provider value={{theme}}>
			<pokemonsContext.Provider value={pokemons}>
				<MainContainer />
			</pokemonsContext.Provider>

			<footer className="footer-container">
				<pokemonsContext.Provider value={{pokemons, setPokemons}}>
					<FetchButton />
				</pokemonsContext.Provider>
			</footer>
		</themeContext.Provider>
	</>
  )
}