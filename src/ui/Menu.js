import useAuth from "./hooks/useAuth"
import { Link } from "react-router-dom"

function Menu() {
  const [auth, setAuth] = useAuth()
  const login = e => {
    e.preventDefault()
    setAuth(true)
  }

  const logout = e => {
    e.preventDefault()
    setAuth(false)
  }

  return (
    <ul
      className='container h5 mt-2 p-2 border border-3 border-info-emphasis rounded d-flex'
      style={{ listStyleType: "none" }}>
      <li>
        <Link to='/' className='text-info-emphasis ms-3 text-decoration-none'> Home</Link>
      </li>
      {auth ? (
        <li>
          <a
            href=''
            className='text-decoration-none text-info-emphasis ms-3'
            onClick={logout}>
            Wyloguj
          </a>
        </li>
      ) : (
        <li>
          <a
            href=''
            className='text-decoration-none text-info-emphasis ms-3'
            onClick={login}>
            Zaloguj
          </a>
        </li>
      )}
    </ul>
  )
}

export default Menu
