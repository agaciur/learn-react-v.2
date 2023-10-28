import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./ui/Header"
import Menu from "./ui/Menu"
import Searchbar from "./ui/Searchbar"
import Footer from "./ui/Footer"
import Layout from "./ui/Layout"
import ThemeContext from "./ui/context/ThemeContext"
import AuthContext from "./ui/context/AuthContext"
import InspiringQuote from "./ui/InspiringQuote"
import { useReducer } from "react"
import { reducer, initialState } from "./ui/reducer"
import Home from "./ui/pages/Home"
import ReducerContext from "./ui/context/ReducerContext"
import Hotel from "./ui/pages/Hotel"
import Search from "./ui/pages/Search"

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
      <Switch>
        <Route
          path='/hotele/:id'
          component={Hotel}
        />
        <Route
          path='/wyszukaj/:term'
          component={Search}
        />
        <Route
          path='/'
          component={Home}
        />
      </Switch>
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
