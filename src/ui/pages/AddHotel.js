import axios from "../../axios"
import { useHistory } from "react-router-dom"
import HotelForm from "../components/Molecules/HotelForm"
import useAuth from "../hooks/useAuth"

export default function AddHotel(props) {
  const history = useHistory()
  const [auth] = useAuth()

  const submit = async form => {
    await axios.post(`/hotels.json?auth=${auth.token}`, form)
    history.push("/profil/hotele")
  }

  return (
    <div className='container p-0'>
      <div className='card'>
        <div className='card-header'>Dodaj Hotel</div>
        <p className="text-muted ps-4 pt-4">Uzupełnij dane hotelu</p>
        <HotelForm
          buttonText='Zapisz'
          onSubmit={submit}
        />
      </div>
    </div>
  )
}
