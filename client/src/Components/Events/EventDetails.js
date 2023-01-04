import React from 'react'
import Navbar from '../GlobalComponents/Navbar'
import courses_bg from '../../Images/Bg/others_bg.jpg'
const EventDetails = () => {
  return (
    <div>
          <Navbar />
          <section className='h-[50vh] lg:h-[90vh]' style={{
              backgroundImage: `url(${courses_bg})`,
              backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
          }}>
              <div className='flex justify-center items-center h-full'>
                  <h1 className='text-white text-3xl lg:text-6xl '>Book Details</h1>
              </div>
          </section>
    </div>
  )
}

export default EventDetails
