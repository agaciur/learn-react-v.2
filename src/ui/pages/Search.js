import { useParams } from "react-router-dom"
import axios from "../../axios"
import { objectToArrayWithId } from "../helpers/objects"
import { useEffect, useState } from "react"
import Hotels from "../components/Organisms/Hotels"

export default function Search(props) {
  const { term } = useParams()
  console.log(term)
  const [hotels, setHotels] = useState([])
  const search = async () => {
    try {
      const res = await axios.get("/hotels.json")
      const newHotel = objectToArrayWithId(res.data).filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()))
      setHotels(newHotel)
    } catch (ex) {
      console.log(ex.response)
    }
  }


  useEffect(() => {
    search()
  }, [term])

  return (
    <div className='container'>
      <h2>Wyniki dla frazy "{term}":</h2>
      <Hotels hotels={hotels} />
    </div>
  )
}
