import Hotels from "../components/Organisms/Hotels"
import { useState, useEffect } from "react"
import BestHotel from "../components/Molecules/BestHotel"
import useStateStorage from "../hooks/useStateStorage"
import LastHotel from "../components/Molecules/LastHotel"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import LoadingIcon from "../components/Atoms/LoadingIcon"
import axios from "../../axios"
import { objectToArrayWithId } from "../helpers/objects"

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

  const fetchHotels = async () => {
    try {
      const res = await axios.get("/hotels.json")
      const newHotels = objectToArrayWithId(res.data).filter(hotel => hotel.status == 1)
      setHotels(newHotels)
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false)
  }
  
  useEffect(() => {
    fetchHotels()
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
