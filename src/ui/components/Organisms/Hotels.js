import Hotel from "../Molecules/Hotel"
import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  hotels: PropTypes.array.isRequired,
}
function Hotels(props) {
  return (
    <div className='container border border-info-emphasis'>
      <div>
        {props.hotels.map(hotel => (
          <Hotel
            onOpen={props.onOpen}
            key={hotel.id}
            {...hotel}
            theme={props.theme}
          />
        ))}
      </div>
    </div>
  )
}

Hotels.propTypes = propTypes

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels
}

export default Hotels
