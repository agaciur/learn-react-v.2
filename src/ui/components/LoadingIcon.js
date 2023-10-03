import ThemeContext from "../context/ThemeContext"
import { useContext } from "react"

export default function LoadingIcon() {
  const theme = useContext(ThemeContext)
  return (
    <div className='text-center mt-5'>
      <div
        className={`spinner-border text-${theme.theme}`}
        role='status'>
        <span className='visually-hidden'>Ładowanie...</span>
      </div>
    </div>
  )
}
