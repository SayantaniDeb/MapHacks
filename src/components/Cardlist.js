import React from 'react'
import logo1 from '../img/2.gif'
import logo2 from '../img/3.gif'


function Cardlist() {
  return (
    <div>
   
    <hr className='mx-auto w-1/5'></hr>
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-items-center'>
      <div className='py-2 mx-auto'>
        <div className='rounded overflow-hidden shadow max-w-sm shadow-2xl'>
          <img src={logo1} className='w-full container mx-auto'></img>
          <div className='px-6'>
            <div className='font-bold text-xl mb-2 text-center'>Suggest route</div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6 pt-4'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Route with most fun attractions to visit</span>
            </div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Route with key services like restaurants, toilets, hotels.</span>
            </div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Route with lowest traffic congestion.</span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-2 mx-auto'>
        <div className='rounded overflow-hidden shadow max-w-sm shadow-2xl'>
          <img src={logo2} className='w-full container mx-auto'></img>
          <div className='px-6'>
            <div className='font-bold text-xl mb-2 text-center'>Weather Forecast</div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6 pt-4'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Shows the active weather condition of the place</span>
            </div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Features included: Sunrise, Humidity, Presure, Wind</span>
            </div>
            <div className='grid grid-flow-col gap-5 pb-2 px-6'>
              <span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2 cursor-pointer transition-all duration-200 ease-in-out hover:bg-black hover:text-white'>Predicts weather in real time</span>
            </div>
          </div>
        </div>
      </div>

     
    </div>
    </div>
  )
}

export default Cardlist