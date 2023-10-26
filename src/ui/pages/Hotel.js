import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReducerContext from "../context/ReducerContext"

export default function Hotel(props) {
  const { id } = useParams()
  const [hotel, setHotel] = useState({})
  const reducer = useContext(ReducerContext) 

  const fetchHotel = () => {
    reducer.dispatch({type:'set-loading', loading: true})
    setHotel({
      id: 2,
      name: "Hotel pod zorzami",
      city: "Oslo",
      rating: "8.3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
      image: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
    })
    reducer.dispatch({type:'set-loading', loading: false})
  }

  useEffect(() => {
    reducer.dispatch({type:'set-loading', loading: true})
    setTimeout(() => {
      fetchHotel()
    }, 500)
  }, [])

  if (reducer.state.loading) return null

  return <p className='container'>To jest hotel: {hotel.name}</p>
}
