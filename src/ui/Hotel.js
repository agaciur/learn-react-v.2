import PropTypes from "prop-types"
import ThemeContext from "./context/ThemeContext"
import { useContext } from "react"

const propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
function Hotel(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className='m-3 border border-info-emphasis m-1'>
      <div className='row g-0'>
        <div className='col-lg-5'>
          <img
            src={props.image}
            className='img-fluid'
            style={{
              height: "100%",
              backgroundSize: "cover",
            }}
            alt='hotel'
          />
        </div>
        <div className='col-lg-7 p-4'>
          <div
            className='card-body d-flex flex-column justify-content-around'
            style={{
              height: "100%",
            }}>
            <div className='d-flex justify-content-between'>
              <div>
                {" "}
                <h4 className='card-title'>{props.name}</h4>
                <p className='pt-2'>{props.city}</p>
              </div>
              <p className='fs-5'>
                Ocena: <span className='fs-4'>{props.rating}</span>
              </p>
            </div>
            <div className='d-grid gap-2 d-md-flex mb-3 justify-content-md-end'>
              <a
                href='#'
                className={`btn btn-${theme.theme} px-4`}>
                Pokaż
              </a>
            </div>
            <p className='card-text'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
Hotel.propTypes = propTypes
export default Hotel
