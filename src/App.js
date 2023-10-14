import "./App.css"
import Header from "./ui/Header"
import Menu from "./ui/Menu"
import Hotels from "./ui/Hotels"
import Searchbar from "./ui/Searchbar"
import Footer from "./ui/Footer"
import Layout from "./ui/Layout"
import { useCallback, useEffect, useReducer } from "react"
import LoadingIcon from "./ui/components/LoadingIcon"
import ThemeContext from "./ui/context/ThemeContext"
import AuthContext from "./ui/context/AuthContext"
import BestHotel from "./ui/BestHotel"

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

const initialState = {
  hotels: [],
  loading: true,
  theme: "warning",
  isAuthenticated: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "danger" ? "warning" : "danger"
      return { ...state, theme }
    case "set-hotels":
      return { ...state, hotels: action.hotels }
    case "set-loading":
      return { ...state, loading: action.loading }
    case "login":
      return { ...state, isAuthenticated: true }
    case "logout":
      return { ...state, isAuthenticated: false }
    default:
      throw new Error("Nie ma takiej akcji" + action.type)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const searchHandler = term => {
    const newHotels = [...backedHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    dispatch({ type: "set-hotels", hotels: newHotels })
  }

  const getBestHotel = useCallback(() => {
    if (state.hotels.length < 2) {
      return null
    } else {
      return state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
    }
  }, [state.hotels])

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "set-hotels", hotels: backedHotels })
      dispatch({ type: "set-loading", loading: false })
    }, 1000)
  }, [])

  const header = (
    <Header>
      <Searchbar onSearch={term => searchHandler(term)}></Searchbar>
    </Header>
  )

  const menu = (
    <div>
      <Menu />
    </div>
  )

  const content = state.loading ? (
    <LoadingIcon />
  ) : (
    <>
      <BestHotel getHotel={getBestHotel} />
      <Hotels hotels={state.hotels} />
    </>
  )
  const footer = <Footer />

  return (
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
        <Layout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
