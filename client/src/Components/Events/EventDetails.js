import React from 'react'
import Navbar from '../GlobalComponents/Navbar'
import courses_bg from '../../Images/Bg/others_bg.jpg'
import Footer from '../GlobalComponents/Footer'
import { useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
const EventDetails = () => {
  const location = useLocation()
  const { eventTitle, speaker, date, month, StartTime, EndTime, detail, image } = location.state.item
  console.log(image)
  return (
    <div>
      <Navbar />
      <section className='h-[50vh] lg:h-[90vh]' style={{
        backgroundImage: `url(${courses_bg})`,
        backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
      }}>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-white text-3xl lg:text-6xl '>Event Details</h1>
        </div>
      </section>
      <section className='h-[100vh] px-10 py-20 flex gap-10 bg-[#f6f6f6]'>
        <div className='bg-white w-2/3 p-10'>
          <img src={image} />
        </div>
        <div className='w-1/3 flex justify-end'>
          <div className='w-full flex justify-end '>
            <div className=''>
            <input className='w-full h-12 outline-none focus:!outline-none' />
              <i><AiOutlineSearch /></i>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default EventDetails
