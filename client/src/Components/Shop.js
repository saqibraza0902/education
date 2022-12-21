import React from 'react'
import Footer from './HomeComponents/Footer'
import Navbar from './Navbar'
import course1 from "../Images/ShopThumb/shopthumb001.jpg"
import course2 from "../Images/ShopThumb/shopthumb002.jpg"
import course3 from "../Images/ShopThumb/shopthumb003.jpg"
import course4 from "../Images/ShopThumb/shopthumb004.jpg"
import course5 from "../Images/ShopThumb/shopthumb005.jpg"
import course6 from "../Images/ShopThumb/shopthumb006.jpg"
import { RatingStar } from "rating-star";
import courses_bg from '../Images/Bg/others_bg.jpg'
const books = [
    {
        image: course1,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 80
    },
    {
        image: course2,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 90
    },
    {
        image: course3,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 30
    },
    {
        image: course4,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 50
    },
    {
        image: course5,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 80
    },
    {
        image: course6,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 90
    },
    {
        image: course3,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 30
    },
    {
        image: course4,
        title: "Graphic Design Book",
        writer: "Robert Cool",
        price: 49.99,
        rating: 50
    }
]
const Shop = () => {
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>Our Shop</h1>
                </div>
            </section>
            <section className='bg-[#f6f6f6] h-max py-20 px-10'>
                <div>
                    <div className='grid mt-5 grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {books.map((item, index) => (
                            <div className='mx-2' key={index}>
                                <div className='w-max pr-4 bg-white py-4 '>
                                    <img src={item.image} alt='' />
                                    <div className='mx-3 my-2 '>
                                        <h1 className='text-lg font-bold text-[#444444] !font-sans'>{item.title}</h1>
                                        <span className='text-sm '>Writer:
                                            <span className='font-bold ml-2'>{item.writer}</span>
                                        </span>
                                        <div className='flex items-center'>
                                            <span className='flex gap-2'>
                                                <span className='text-[#777777] font-semibold'>Price:</span>
                                                <span className='text-[#f6393e] font-bold text-base'>{item.price}</span>
                                            </span>
                                            <span>{ item.rating}<RatingStar id="different-maximum-score" rating={item.rating} maxScore={100} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Shop