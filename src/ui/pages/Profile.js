import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import ProfileHotels from "./ProfileHotels"
import ProfileSettings from "./ProfileSettings"


export default function Profile() {
  const { path, url } = useRouteMatch()
  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header bg-body-secondary px-3'>
          <h2>Mój profil</h2>
        </div>
        <div className='card-body'>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                exact
                to={`${url}`}>
                Ustawienia
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to={`${url}/hotele`}>
                Twoje hotele
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='p-4'>
          <Switch>
            <Route
              path={`${path}/hotele`}
              component={ProfileHotels}
            />
            <Route
              path={`${path}`}
              component={ProfileSettings}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}
