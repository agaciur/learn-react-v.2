import { Link, useRouteMatch } from "react-router-dom"
import axios from "../../axios"
import { useEffect, useState } from "react"
import { objectToArrayWithId } from "../helpers/objects"
import useAuth from "../hooks/useAuth"

export default function ProfileHotels(props) {
  const { url } = useRouteMatch()
  const [hotels, setHotels] = useState([])
  const [auth] = useAuth()

  const fetchHotels = async () => {
    try {
      const res = await axios.get("/hotels.json")
      const newHotel = objectToArrayWithId(res.data).filter(hotel => hotel.user_id === auth.userId)
      setHotels(newHotel)
    } catch (ex) {
      console.log(ex.response)
    }
  }

  useEffect(() => {
    fetchHotels()
  }, [])

  const deleteHotel = async id => {
    try {
      await axios.delete(`/hotels/${id}.json`)
      setHotels(hotels.filter(x => x.id !== id))
    } catch (ex) {
      console.log(ex.response)
    }
  }

  return (
    <div>
      {hotels ? (
        <table className='table'>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Opcje</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr>
                <td>{hotel.name}</td>
                <td>
                  <button className='btn btn-sm btn-warning me-2'>Edytuj</button>
                  <button
                    onClick={() => deleteHotel(hotel.id)}
                    className='btn btn-sm btn-danger'>
                    Usuń
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nie masz jeszcze żadnego hotelu.</p>
      )}
      <Link
        to={`${url}/dodaj`}
        className='btn btn-primary'>
        Dodaj hotel
      </Link>
    </div>
  )
}
