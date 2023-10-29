import Hotels from "../components/Organisms/Hotels"
import { useState, useEffect } from "react"
import BestHotel from "../components/Molecules/BestHotel"
import useStateStorage from "../hooks/useStateStorage"
import LastHotel from "../components/Molecules/LastHotel"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import LoadingIcon from "../components/Atoms/LoadingIcon"

const backedHotels = [
  {
    id: 1,
    name: "Hotel pod bananowcem",
    city: "Funcial",
    rating: "8.8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064_1280.jpg",
  },
  {
    id: 2,
    name: "Hotel pod zorzami",
    city: "Oslo",
    rating: "8.3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
  },
  {
    id: 3,
    name: "Odskocznia nad morzem",
    city: "Ateny",
    rating: "9.1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum reiciendis ipsam nesciunt culpa dolor in repellat fugiat maxime explicabo eos?",
    image: "https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg",
  },
]

export default function Home(props) {
  const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null)
  useWebsiteTitle("Strona główna")

  const [loading, setLoading] = useState(true)
  const [hotels, setHotels] = useState([])

  const getBestHotel = () => {
    if (hotels.length < 2) {
      return null
    } else {
      return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
    }
  }

  const openHotel = hotel => setLastHotel(hotel)
  const removeLastHotel = () => setLastHotel(null)

  useEffect(() => {
    setTimeout(() => {
      setHotels(backedHotels)
      setLoading(false)
    }, 1000)
  }, [])

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      {lastHotel ? (
        <LastHotel
          {...lastHotel}
          onRemove={removeLastHotel}
        />
      ) : null}
      {getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
      <Hotels
        onOpen={openHotel}
        hotels={hotels}
      />
    </>
  )
}
