import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const Footer = () => {
  const theme = useContext(ThemeContext)
  return <p className={`text-center text-${theme.theme} p-3`}>Noclegi 2023</p>
}

export default Footer
