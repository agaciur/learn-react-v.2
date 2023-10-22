import Hotel from "./Hotel"
import React from "react"
import { useMemo } from 'react'

const slowFunction = count => {
  for (let i = 0; i < 12000000; i++) {}
  return count
}

function Hotels(props) {
  const count = useMemo(() => {
    return slowFunction(props.hotels.length)
  }, [props.hotels.length])
  return (
    <div className='container border border-info-emphasis'>
      <h2 className='text-center pt-3'>Oferty:({count})</h2>
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

const areEqual = (prevProps, nextProps) => {
  return prevProps.hotels === nextProps.hotels
}

// export default React.memo(Hotels, areEqual)
export default Hotels
