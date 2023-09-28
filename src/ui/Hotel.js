import PropTypes from "prop-types"
function Hotel(props) {
  const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }

  return (
    <div className='m-3 border border-info-emphasis rounded m-1'>
      <div class='row g-0'>
        <div class='col-md-5'>
          <img
            src={props.image}
            class='img-fluid rounded-start'
            style={{
              height: "100%",
              backgroundSize: "cover",
            }}
            alt='hotel'
          />
        </div>
        <div class='col-md-7 p-4'>
          <div
            class='card-body d-flex flex-column justify-content-around'
            style={{
              height: "100%",
            }}>
            <div className='d-flex justify-content-between'>
              <div>
                {" "}
                <h4 class='card-title'>{props.name}</h4>
                <p className='pt-2'>{props.city}</p>
              </div>
              <p className='fs-5'>
                Ocena: <span className='fs-4'>{props.rating}</span>
              </p>
            </div>
            <div class='d-grid gap-2 d-md-flex mb-3 justify-content-md-end'>
              <a
                href='#'
                className='btn btn-warning px-4'>
                Pokaż
              </a>
            </div>
            <p class='card-text'>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
Hotel.propTypes = propTypes;
export default Hotel
