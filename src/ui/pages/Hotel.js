import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingIcon from "../components/Atoms/LoadingIcon"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import axios from "../../axios"
import { image } from "../components/Atoms/Images"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useAuth from "../hooks/useAuth"

export default function Hotel(props) {
  const history = useHistory()
  const auth = useAuth()
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(10)
  const setTitle = useWebsiteTitle()

  const fetchHotel = async () => {
    try {
      const res = await axios.get(`/hotels/${id}.json`)
      setHotel(res.data)
      setTitle("Hotel: " + res.data.name)
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false)
  }

  const rateHotel = async () => {
    try {
      await axios.put(`/hotels/${id}/rating.json?auth=${auth.token}`, rating)
      history.push("/")
    } catch (ex) {
      console.log(ex.response)
    }
  }

  useEffect(() => {
    fetchHotel()
  }, [])


  return loading ? (
    <LoadingIcon />
  ) : (
    <div className='container p-0'>
      <div className='card mb-3'>
        <img
          src={image()}
          className='card-img-top'
          alt='hotel'></img>
        <div className='card-body'>
          <h1 className='card-title'>{hotel.name}</h1>
          <h5 className='card-text'>{hotel.city}</h5>
          <p className='card-text'>
            Miejsca: <b>{hotel.rooms}</b>
          </p>
          <p></p>
          <p className='card-text'>{hotel.description}</p>
          {hotel.features ? (
            <>
              <p>Wyposażenie:</p>
              <ul>
                {hotel.features.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          <h4>Ocena: {props.rating ?? "brak ocen"}</h4>
        </div>
      </div>
      <div className='card-footer'>
        {auth ? (
          <div className='form-group row mt-4'>
            <div className='col'>
              <select
                className='form-control form-select mb-3'
                value={rating}
                onChange={e => setRating(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>
            <div className='col'>
              <button
                className='btn btn-info'
                onClick={rateHotel}>
                Oceń
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
