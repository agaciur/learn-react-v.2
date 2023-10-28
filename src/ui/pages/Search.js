import { useParams } from "react-router-dom"

export default function Search(props) {
    const { term } = useParams()
//   const searchHandler = term => {
    // const newHotels = [...backedHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
    return (
        <div>Wyniki dla frazy "{term}":</div>
    )
  }