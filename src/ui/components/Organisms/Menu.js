import useAuth from "../../hooks/useAuth"
import { Link, NavLink } from "react-router-dom"

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
