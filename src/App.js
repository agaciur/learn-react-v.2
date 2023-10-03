import "./App.css"
import Header from "./ui/Header"
import Menu from "./ui/Menu"
import Hotels from "./ui/Hotels"
import Searchbar from "./ui/Searchbar"
import Footer from "./ui/Footer"
import Layout from "./ui/Layout"
import { Component } from "react"
import LoadingIcon from "./ui/components/LoadingIcon"
import ThemeContext from "./ui/context/ThemeContext"

class App extends Component {
  static contextType = ThemeContext
  hotels = [
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

  state = {
    hotels: [],
    loading: true,
    theme: "warning",
  }

  searchHandler = term => {
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    this.setState({ hotels })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hotels: this.hotels,
        loading: false,
      })
    }, 1000)
  }

  changeTheme = () => {
    const newTheme = this.state.theme === "warning" ? "danger" : "warning"
    this.setState({ theme: newTheme })
  }

  render() {
    const header = (
      <Header>
        <Searchbar
          onSearch={term => this.searchHandler(term)}
          onChange={theme => this.changeTheme(theme)}></Searchbar>
      </Header>
    )

    const menu = (
      <div>
        <Menu />
      </div>
    )

    const content = (
      this.state.loading ? 
      <LoadingIcon /> : 
      <Hotels hotels={this.state.hotels} />)

    const footer = <Footer />

    return (
      <div className='App'>
        <ThemeContext.Provider value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme
          }}>
          <Layout
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
