import { Component } from "react"
import Hotel from "./Hotel"

class Hotels extends Component {
  render() {
    return (
      <div className='container border border-info-emphasis rounded'>
        <h2 className='text-center pt-3'>Oferty:</h2>
        <div>
          <Hotel />
          <Hotel />
          <Hotel />
        </div>
      </div>
    )
  }
}

export default Hotels
