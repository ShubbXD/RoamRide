import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { dummyCarData as carList } from "../assets/assets"; 
import { assets } from "../assets/assets";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carList.find((item) => item.id === parseInt(id));

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>
      <button
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
      >
        <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65' />
        Back to all Cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left Section: Car Info */}
        <div className='lg:col-span-2'>
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className='w-full h-auto max-h-[500px] object-cover rounded-xl mb-6 shadow-md'
          />
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>
                {car.brand} {car.model}
              </h1>
              <p className='text-gray-500 text-lg'>
                {car.category} • {car.year}
              </p>
            </div>

            <hr className='border-borderColor my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              <div className='flex flex-col items-center bg-light p-4 rounded-lg'>
                <img src={assets.users_icon} alt='' className='h-5 mb-2' />
                {car.seating_capacity} Seats
              </div>
              <div className='flex flex-col items-center bg-light p-4 rounded-lg'>
                <img src={assets.fuel_icon} alt='' className='h-5 mb-2' />
                {car.fuel_type}
              </div>
              <div className='flex flex-col items-center bg-light p-4 rounded-lg'>
                <img src={assets.car_icon} alt='' className='h-5 mb-2' />
                {car.transmission} Transmission
              </div>
              <div className='flex flex-col items-center bg-light p-4 rounded-lg'>
                <img src={assets.location_icon} alt='' className='h-5 mb-2' />
                {car.location}
              </div>
            </div>

            {/* Description */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Description</h1>
              <p className='text-gray-500'>{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Features</h1>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {[
                  "360 Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View",
                  "Mirror",
                ].map((feature, index) => (
                  <li key={index} className='flex items-center text-gray-500'>
                    <img src={assets.check_icon} className='h-4 mr-2' alt='' />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section: Placeholder Form */}
        <form className='bg-light p-6 rounded-xl shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Book This Car</h2>
          <p className='text-gray-500'>Booking functionality coming soon...</p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
