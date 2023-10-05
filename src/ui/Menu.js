import { useContext } from "react"
import AuthContext from "./context/AuthContext"

function Menu() {
  const auth = useContext(AuthContext)

  const login = e => {
    e.preventDefault()
    auth.login()
  }

  const logout = e => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <ul
      className='container h5 mt-2 p-2 border border-3 border-info-emphasis rounded d-flex'
      style={{ listStyleType: "none" }}>
      <li>
        <a
          href='#'
          className='text-info-emphasis ms-3 text-decoration-none'>
          Home
        </a>
      </li>
      {auth.isAuthenticated ? (
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
