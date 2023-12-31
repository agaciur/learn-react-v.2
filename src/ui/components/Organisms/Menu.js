import useAuth from "../../hooks/useAuth"
import { Link, NavLink } from "react-router-dom"

function Menu() {
  const [auth, setAuth] = useAuth()
  const logout = e => {
    e.preventDefault()
    setAuth(false)
  }

  return (
    <ul
      className='container h5 mt-2 p-2 border border-3 border-info-emphasis rounded d-flex'
      style={{ listStyleType: "none" }}>
      <li>
        <NavLink
          to='/'
          exact
          className='text-info-emphasis ms-3 text-decoration-none'
          activeClassName='text-decoration-underline'>
          Home
        </NavLink>
      </li>
      {auth ? (
        <>
          <li>
            <NavLink
              className='text-decoration-none text-info-emphasis ms-3'
              to='/profil'
              activeClassName='text-decoration-underline'>
              Mój profil
            </NavLink>
          </li>
          <li>
            <a
              href='#'
              className='text-decoration-none text-info-emphasis ms-3'
              onClick={logout}>
              Wyloguj
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to='/rejestracja'
              className='text-decoration-none text-info-emphasis ms-3'
              activeClassName='text-decoration-underline'>
              Zarejestruj
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/zaloguj'
              className='text-decoration-none text-info-emphasis ms-3'
              activeClassName='text-decoration-underline'>
              Zaloguj
            </NavLink>
          </li>
        </>
      )}
    </ul>
  )
}

export default Menu
