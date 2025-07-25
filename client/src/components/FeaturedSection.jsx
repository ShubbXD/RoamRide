import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='w-full'>
        <Title
          title='Featured Vehicles'
          subTitles='Explore our selection of premium vehicles available for your next adventures.'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full'>
        {dummyCarData.slice(0, 6).map((car) => (
          <div key={car._id}>
            <CarCard car={car} />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/cars')
          window.scrollTo(0, 0)
        }}
        className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-10 cursor-pointer'
      >
        Explore All Cars
      </button>
    </div>
  )
}

export default FeaturedSection
