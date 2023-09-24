import "./App.css"
import Header from "./ui/Header"
import Menu from "./ui/Menu"
import Hotels from "./ui/Hotels"
import { Component } from "react"



class App extends Component {
  state = {
    hotels: [
      {
        id: 1,
        name: 'Hotel pod bananowcem',
        city: 'Funcial',
        rating: '8.8',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?',
        image: 'https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064_1280.jpg'
      },
      {
        id: 1,
        name: 'Hotel pod zorzami',
        city: 'Oslo',
        rating: '8.3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?',
        image: 'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg'
      },
      {
        id: 1,
        name: 'Odskocznia nad morzem',
        city: 'Ateny',
        rating: '9.1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?',
        image: 'https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg'
      },
    ],
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    )
  }
}

export default App
