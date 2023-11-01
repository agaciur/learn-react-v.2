import { useContext } from "react"
import ReducerContext from "../ui/context/ReducerContext"
import { Redirect, Route } from "react-router-dom"

export default function AuthenticatedRoute(props) {
  const context = useContext(ReducerContext)

  return context.state.isAuthenticated ? <Route {...props} /> : <Redirect to='/zaloguj' />
}
