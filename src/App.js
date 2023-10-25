import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
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

const backedHotels = [
  {
    id: 1,
    name: "Hotel pod bananowcem",
    city: "Funcial",
    rating: "8.8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064_1280.jpg",
  },
  {
    id: 2,
    name: "Hotel pod zorzami",
    city: "Oslo",
    rating: "8.3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
  },
  {
    id: 3,
    name: "Odskocznia nad morzem",
    city: "Ateny",
    rating: "9.1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg",
  },
]

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const searchHandler = term => {
    const newHotels = [...backedHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    dispatch({ type: "set-hotels", hotels: newHotels })
  }

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar onSearch={term => searchHandler(term)}></Searchbar>
    </Header>
  )

  const menu = (
    <div>
      <Menu />
    </div>
  )

  const content = (
    <>
      <Route
        exact
        path='/'>
        <Home />
      </Route>

      <Route path='/hotel/:id'>
        <h1>To jest hotel</h1>
      </Route>
    </>
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
          <ReducerContext.Provider value={{
            state: state,
            dispatch: dispatch
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
