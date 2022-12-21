import React from 'react'
import Footer from './HomeComponents/Footer'
import Navbar from './Navbar'
import { BsPerson } from 'react-icons/bs'
import courses_bg from '../Images/Bg/others_bg.jpg'
import course_1 from '../Images/Courses/single_courses_thumb_01.jpg'
import course_2 from '../Images/Courses/single_courses_thumb_02.jpg'
import course_3 from '../Images/Courses/single_courses_thumb_03.jpg'
import course_4 from '../Images/Courses/single_courses_thumb_04.jpg'
import course_5 from '../Images/Courses/single_courses_thumb_05.jpg'
import course_6 from '../Images/Courses/single_courses_thumb_06.jpg'
import course_7 from '../Images/Courses/single_courses_thumb_07.jpg'
import course_8 from '../Images/Courses/single_courses_thumb_08.jpg'
import course_9 from '../Images/Courses/single_courses_thumb_09.jpg'
const coursesList = [
    {
        title: "Business Studies",
        category: "Business",
        thumbnail: course_1,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 30
    },
    {
        title: "Computer Engineering",
        category: "Science",
        thumbnail: course_2,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 23
    },
    {
        title: "English For Tommorow",
        category: "English",
        thumbnail: course_3,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 43
    },
    {
        title: "Islamic Studies",
        category: "Religion",
        thumbnail: course_4,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 12
    },
    {
        title: "Electrical Engineering",
        category: "Science",
        thumbnail: course_5,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 30
    },
    {
        title: "Web Development Full",
        category: "Design",
        thumbnail: course_6,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 23
    },
    {
        title: "English For Tommorow",
        category: "English",
        thumbnail: course_7,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 43
    },
    {
        title: "English For Tommorow",
        category: "English",
        thumbnail: course_8,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 12
    },
    {
        category: "English",
        title: "Business Studies",
        thumbnail: course_9,
        descriptiom: "Maecenas fermentum consequat mi fonec has fermentum ellentesque malesuada.",
        seats: 12
    }
]
const Course = () => {
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>Our Courses</h1>
                </div>
            </section>
            <section className='px-10 py-20 bg-[#f6f6f6]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {coursesList.map((item, index) => (
                        <div className=' w-full sm:w-full bg-white' key={index}>
                            <img className='w-full' src={item.thumbnail} alt='Course #1' />
                            <div className='px-4 flex flex-col py-3 border-b gap-1 text-black'>
                                <button className='bg-[#fdc800] font-sans px-3 py-2 rounded-sm transition w-fit text-xs font-medium
                                 text-[#002147] uppercase hover:bg-[#002147] hover:text-white'>{item.category}</button>
                                <span className='text-xl font-semibold font-sans'>{item.title}</span>
                                <span className='text-[#8a8a8a] text-sm'>{item.descriptiom}</span>
                            </div>
                            <div className=' flex justify-between  py-2 px-3'>
                                <div className='flex items-center gap-2'>
                                    <i className='text-lg'><BsPerson /></i>
                                    <span className='font-medium'> {item.seats}</span>
                                </div>
                                <span className='text-[#002147] text-sm font-sans font-semibold transition-all cursor-pointer hover:text-[#fdc800]'>View Details</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' flex justify-center mt-5'>
                    <button className='border text-[#444444] transition-all duration-300 bg-none font-semibold px-5 py-3 hover:border-none hover:bg-[#fdc800]'>View More Courses</button>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Course
