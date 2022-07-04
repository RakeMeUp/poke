import {useContext} from 'react'
import { themeContext } from '../../App'

function ThemeSwitch() {
  let {theme, setTheme} = useContext(themeContext)
  let handleClick=()=>{
    setTheme(theme==='light' ? 'dark':'light')
  }

  return (
    <button className="nav-button" onClick={handleClick}>Theme</button>
  )
}

export default ThemeSwitch