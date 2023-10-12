import Hotel from "./Hotel"
import React from "react"

function Hotels(props) {
  return (
    <div className='container border border-info-emphasis'>
      <h2 className='text-center pt-3'>Oferty:</h2>
      <div>
        {props.hotels.map(hotel => (
          <Hotel
            key={hotel.id}
            {...hotel}
            theme={props.theme}
          />
        ))}
      </div>
    </div>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels
}

export default React.memo(Hotels, areEqual)
