import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./ui/components/Organisms/Header"
import Menu from "./ui/components/Organisms/Menu"
import Searchbar from "./ui/components/Molecules/Searchbar"
import Footer from "./ui/components/Organisms/Footer"
import Layout from "./ui/components/Layout"
import ThemeContext from "./ui/context/ThemeContext"
import AuthContext from "./ui/context/AuthContext"
import InspiringQuote from "./ui/components/Atoms/InspiringQuote"
import { useReducer, lazy, Suspense } from "react"
import { reducer, initialState } from "./ui/components/reducer"
import Home from "./ui/pages/Home"
import ReducerContext from "./ui/context/ReducerContext"
import Hotel from "./ui/pages/Hotel"
import Search from "./ui/pages/Search"
import NotFound from "./ui/pages/NotFound"
import Login from "./ui/pages/Auth/Login"
import AuthenticatedRoute from "./ui/components/AuthenticatedRoute"
const Profile = lazy(() => import("./ui/pages/Profile"))

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar />
    </Header>
  )

  const menu = (
    <div>
      <Menu />
    </div>
  )

  const content = (
    <div>
      <Suspense fallback={<p className="text-center">Ładowanie...</p>}>
        <Switch>
          <AuthenticatedRoute
            path='/profil'
            component={Profile}
          />
          <Route
            path='/hotele/:id'
            component={Hotel}
          />
          <Route
            path='/wyszukaj/:term?'
            component={Search}
          />
          <Route
            path='/zaloguj'
            component={Login}
          />
          <Route
            path='/'
            exact
            component={Home}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  )
  const footer = <Footer />

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispatch({ type: "login" }),
          logout: () => dispatch({ type: "logout" }),
        }}>
        <ThemeContext.Provider
          value={{
            theme: state.theme,
            changeTheme: () => dispatch({ type: "change-theme" }),
          }}>
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}>
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
