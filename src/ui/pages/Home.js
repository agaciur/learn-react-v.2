import Hotels from "../Hotels"
import { useContext, useEffect } from "react"
import BestHotel from "../BestHotel"
import useStateStorage from "../hooks/useStateStorage"
import LastHotel from "../LastHotel"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import ReducerContext from "../context/ReducerContext"
import LoadingIcon from "../components/LoadingIcon"

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
  const reducer = useContext(ReducerContext)

  const getBestHotel = () => {
    if (reducer.state.hotels.length < 2) {
      return null
    } else {
      return reducer.state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0]
    }
  }

  const openHotel = hotel => setLastHotel(hotel)
  const removeLastHotel = () => setLastHotel(null)

  useEffect(() => {
    setTimeout(() => {
      reducer.dispatch({ type: "set-hotels", hotels: backedHotels })
      reducer.dispatch({ type: "set-loading", loading: false })
    }, 1000)
  }, []);

  if (reducer.state.loading) {
    return <LoadingIcon />
  }

  return (
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
        hotels={reducer.state.hotels}
      />
    </>
  )
}
