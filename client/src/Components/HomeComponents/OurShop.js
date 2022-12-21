import React from 'react'
import course1 from '../../Images/ShopThumb/shopthumb001.jpg'
import course2 from '../../Images/ShopThumb/shopthumb002.jpg'
import course3 from '../../Images/ShopThumb/shopthumb003.jpg'
import course4 from '../../Images/ShopThumb/shopthumb004.jpg'
import { RatingStar } from "rating-star";
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
    }
]

const OurShop = () => {
    return (
        <div className='h-max '>
            <div className='flex items-center flex-col w-full text-white'>
                <h2 className='font-semibold text-white text-4xl'>Our Shop</h2>
                <p className='text-center leading-8'>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis <br></br>scelerisqu Nullam arcu liquam here was consequat.</p>
            </div>
            <div className='grid mt-5 grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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
                                    <span> <RatingStar id="different-maximum-score" rating={item.rating} maxScore={100} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurShop
