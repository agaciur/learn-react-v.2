import { useState, useRef, useEffect } from "react"
import ThemeButton from "./components/ThemeButton"
import ThemeContext from "./context/ThemeContext"
import { useContext } from "react"
import { useHistory } from "react-router-dom"

function Searchbar(props) {
  const [term, setTerm] = useState("")
  const theme = useContext(ThemeContext)
  const searchRef = useRef()
  const history = useHistory()

  const search = () => {
    history.push(`wyszukaj/${term}`);
  }

  const onKeyDownHendler = e => {
    if (e.key === "Enter") {
      search()
    }
  }

  const focusInput = () => {
    searchRef.current.focus()
  }

  useEffect(() => {
    focusInput()
  }, [])

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <div className='d-flex flex-row align-items-center'>
        <input
          ref={searchRef}
          value={term}
          onKeyDown={onKeyDownHendler}
          onChange={e => setTerm(e.target.value)}
          type='text'
          className='border border-secondary m-0 p-2 '
          placeholder='Szukaj...'
        />

        <button
          onClick={search}
          className={`btn btn-${theme.theme} rounded-0 ms-1 p-2 m-0`}
          type='button'>
          Szukaj
        </button>

        <ThemeButton />
      </div>
    </div>
  )
}

export default Searchbar
