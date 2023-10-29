import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingIcon from "../components/Atoms/LoadingIcon"

export default function Hotel(props) {
  const { id } = useParams()
  const [hotel, setHotel] = useState({})

  const [loading, setLoading] = useState(true)

  const fetchHotel = () => {
    setHotel({
      id: 2,
      name: "Hotel pod zorzami",
      city: "Oslo",
      rating: "8.3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
      image: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
    })
    setLoading(false)
  }

  useEffect(() => {
  
    setTimeout(() => {
      fetchHotel()
    }, 500)
  }, [])



  return loading ? <LoadingIcon /> : <p className='container'>To jest hotel: {hotel.name}</p>
}
