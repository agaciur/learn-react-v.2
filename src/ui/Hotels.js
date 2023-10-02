import { Component } from "react"
import Hotel from "./Hotel"

class Hotels extends Component {
  render() {
    return (
      <div className='container border border-info-emphasis'>
        <h2 className='text-center pt-3'>Oferty:</h2>
        <div>
          {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} theme={this.props.theme} /> )}
 
        </div>
      </div>
    )
  }
}

export default Hotels
