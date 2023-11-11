import axios from "../../axios"
import { useHistory } from "react-router-dom"
import HotelForm from "../components/Molecules/HotelForm"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function EditHotel(props) {
  const [auth] = useAuth()
  const { id } = useParams()
  const history = useHistory()
  const [hotel, setHotel] = useState(null)

  const submit = async form => {
    await axios.patch(`/hotels/${id}.json?auth=${auth.token}`, form)
    history.push("profil/hotele")
  }

  const fetchHotel = async () => {
    const res = await axios.get(`/hotels/${id}.json`)
    const hotelData = res.data
    delete(hotelData.user_id)
    delete(hotelData.rating)


    setHotel(hotelData)
  }

  useEffect(() => {
    fetchHotel()
  }, [])

  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header'>Edytuj Hotel</div>
        <p className='text-muted ps-4 pt-4'>Uzupełnij dane hotelu</p>
        <HotelForm
          buttonText='Zapisz'
          onSubmit={submit}
          hotel={hotel}
        />
      </div>
    </div>
  )
}
