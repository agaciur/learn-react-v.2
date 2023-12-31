import { Link } from "react-router-dom"

const LastHotel = props => {
  return (
    <div className='container card bg-success-subtle mb-3'>
      <div className='card-header'>Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?</div>
      <div className='card-body'>
        <div className='ml-auto d-flex justify-content-between'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='pt-2'>{props.city}</p>
        </div>
        <div
          style={{ width: "100px" }}
          className='ms-auto d-flex justify-content-between'>
          <Link
            to={`/hotele/${props.id}`}
            className='btn btn-sm btn-dark'>
            Tak
          </Link>

          <button
            onClick={props.onRemove}
            className='btn btn-sm btn-dark'>
            Nie
          </button>
        </div>
      </div>
    </div>
  )
}
export default LastHotel
