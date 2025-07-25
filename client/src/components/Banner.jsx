import React from 'react';
import { assets } from '../assets/assets'; // make sure this exists and exports banner_car_image

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-6 md:pl-10 pt-8 pb-6 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-5xl mx-4 md:mx-auto rounded-xl overflow-hidden">
      <div className="text-white max-w-lg">
        <h2 className="text-2xl font-medium">Do you own a Luxury Car?</h2>
        <p className="mt-1.5">
          Monetize your vehicle effortlessly by listing it on RoamRide.
        </p>
        <p className="max-w-[480px] mt-1">
          We take care of the insurance, driver verification, and secure payment — so you can earn passive income, stress-free.
        </p>
        <button className="px-5 py-2 bg-white hover:bg-slate-100 transition-all text-blue-800 rounded-lg text-sm mt-4 cursor-pointer">
          List your Car
        </button>
      </div>

      <img
        src={assets.banner_car_image}
        alt="Luxury car"
        className="max-h-52 mt-8"
      />
    </div>
  );
};

export default Banner;
