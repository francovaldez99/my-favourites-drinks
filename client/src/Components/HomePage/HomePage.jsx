import React from 'react'
import Filter from '../Filters/Filter'
import Drinks from '../DrinksCards/Drinks'

function HomePage() {
  return (
    <div className='flex w-full  ' >
        <Filter/>
           <Drinks/>
    </div>
  )
}

export default HomePage