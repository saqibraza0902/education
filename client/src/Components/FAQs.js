import React from 'react'
import Navbar from './GlobalComponents/Navbar'
import Footer from './GlobalComponents/Footer'
import courses_bg from '../Images/Bg/others_bg.jpg'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
const QuestionsArray = [
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    },
    {
        ques: "How all this mistaken idea of denouncing pleasure and praising pain?",
        ans: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blandi sentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique."
    }
]
const FAQs = () => {
    return (
        <div>
            <Navbar />
            <section className='h-[50vh] lg:h-[90vh]' style={{
                backgroundImage: `url(${courses_bg})`,
                backgroundPosition: 'center center ', backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-white text-3xl lg:text-6xl '>Frequently Ask Questions</h1>
                </div>
            </section>
            <section className='px-10 py-20 border-b'>
                <div>
                    <h2 className='text-[#444444] text-2xl lg:text-3xl font-semibold'>Frequently Ask Questions :</h2>
                    <p className='text-justify lg:w-7/12 text-[#666666] text-sm my-4 leading-8'>Will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happi nesso one rejects.</p>
                </div>
                {QuestionsArray.map((item) => (
                    <div className="accordion" id="accordionExample">
                        <div className=" bg-white lg:w-1/2 py-3">
                            <h2 className="accordion-header mb-0" id="headingOne">
                                <button className="text-justify relative flex items-center font-normal w-full text-base text-gray-800 bg-white rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className='text-[#666666] mr-3'><HiOutlineQuestionMarkCircle /></i>
                                    {item.ques}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body text-[#8a8a8a] text-sm text-justify">
                                    {item.ans}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className='p-10 flex items-center flex-col'>
                <h1 className='text-center font-bold text-xl lg:text-3xl text-[#444444]'>Do You Have Any Questions</h1>
                <form className='flex flex-col items-center gap-5 lg:w-1/2 mt-5'>
                    <div className='flex flex-col lg:flex-row gap-5 w-full'>
                        <input className='w-full h-12 pl-4' placeholder='Name :' />
                        <input className='w-full h-12 pl-4' placeholder='Email :' />
                    </div>
                    <textarea rows={5} className='w-full pl-4' placeholder='Message :'></textarea>
                    <button className='uppercase px-20 font-semibold py-3 bg-[#002147] text-white hover:!text-[#002147] transition-all duration-500 hover:bg-[#fdc800] w-max'>Submit Now</button>
                </form>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default FAQs
