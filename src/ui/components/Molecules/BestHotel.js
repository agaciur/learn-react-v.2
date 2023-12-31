import { useEffect, useState, useRef } from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const BestHotel = props => {
  const [time, setTime] = useState("")
  const hotel = props.getHotel()
  const endTime = moment().add(36, "minutes").add(45, "seconds")
  let interval = useRef(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      const leftTime = -moment().diff(endTime) / 1000
      const minutes = Math.floor(leftTime / 60)
      const seconds = Math.floor(leftTime % 60)
      setTime(`minut: ${minutes} i sekund: ${seconds}`)
    }, 1000)
    return () => {
      clearInterval(interval.current)
    }
  }, [endTime])

  return (
    <div className='container card bg-success text-white'>
      <div className='card-header'>Najlepsza oferta!</div>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>{hotel.name}</h5>
          <p>Ocena: {hotel.rating}</p>
        </div>
        <p>Do końca oferty pozostało: {time}</p>
        <Link
          className='btn btn-sm btn-light'
          to={`/hotele/${hotel.id}`}>
          Pokaż
        </Link>
      </div>
    </div>
  )
}

export default BestHotel
