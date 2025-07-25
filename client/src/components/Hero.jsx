import React, { useState } from 'react'
import mainCar from '../assets/main_car.png'
import { cityList, assets } from '../assets/assets'

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-5xl font-semibold'>Luxury cars on Rent</h1>

      <form className='flex flex-col md:flex-row items-center justify-center px-6 py-8 rounded-full w-full max-w-[780px] bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-10'>
        {/* Pickup Location */}
        <div className='flex flex-col items-start gap-1'>
          <label htmlFor='pickupLocation' className='font-medium'>Pickup Location</label>
          <select
            id='pickupLocation'
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className='bg-transparent text-gray-800 focus:outline-none'
          >
            <option value="">Select Location</option>
            {cityList.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className='flex flex-col items-start gap-1'>
          <label htmlFor='pickupDate' className='font-medium'>Pickup Date</label>
          <input
            type='date'
            id='pickupDate'
            min={new Date().toISOString().split('T')[0]}
            className='bg-transparent text-gray-800 focus:outline-none'
            required
          />
        </div>

        {/* Return Date */}
        <div className='flex flex-col items-start gap-1'>
          <label htmlFor='returnDate' className='font-medium'>Return Date</label>
          <input
            type='date'
            id='returnDate'
            className='bg-transparent text-gray-800 focus:outline-none'
            required
          />
        </div>

        {/* Search Button */}
        <button className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all'>
          <img src={assets.search_icon} alt="search" className='w-4 h-4 brightness-0 invert' />
          Search
        </button>
      </form>

      <img src={mainCar} alt="car" className='max-h-80' />
    </div>
  )
}

export default Hero
