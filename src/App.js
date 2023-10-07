import "./App.css"
import Header from "./ui/Header"
import Menu from "./ui/Menu"
import Hotels from "./ui/Hotels"
import Searchbar from "./ui/Searchbar"
import Footer from "./ui/Footer"
import Layout from "./ui/Layout"
import { useEffect, useState } from "react"
import LoadingIcon from "./ui/components/LoadingIcon"
import ThemeContext from "./ui/context/ThemeContext"
import AuthContext from "./ui/context/AuthContext"

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
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("warning")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const changeTheme = () => {
    const newTheme = theme === "warning" ? "danger" : "warning"
    setTheme(newTheme)
  }

  const searchHandler = term => {
    const newHotels = [...backedHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    setHotels(newHotels)
  }

  useEffect(() => {
    setTimeout(() => {
      setHotels(backedHotels)
      setLoading(false)
    }, 1000)
  }, [])

  const header = (
    <Header>
      <Searchbar
        onSearch={term => searchHandler(term)}
        onChange={theme => changeTheme(theme)}></Searchbar>
    </Header>
  )

  const menu = (
    <div>
      <Menu />
    </div>
  )

  const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />
  const footer = <Footer />

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
      }}>
      <ThemeContext.Provider
        value={{
          theme: theme,
          changeTheme: changeTheme,
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
