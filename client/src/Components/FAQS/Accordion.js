import React, { useState } from 'react'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { VelocityTransitionGroup } from 'velocity-react';
const Accordion = ({ ques, ans }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className=" bg-white lg:w-1/2 py-3">
                    <div onClick={() => setShow(!show)} className="w-full mb-0">
                        <button className="text-start relative flex items-center font-normal w-full text-base text-gray-800 bg-white rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className='text-[#666666] mr-3'><HiOutlineQuestionMarkCircle /></i>
                            {ques}
                        </button>
                    </div>
                    <div className='w-full ml-2 pb-0'>
                        <VelocityTransitionGroup component="div" enter={{ animation: 'slideDown', duration: 450 }}
                            leave={{ animation: 'slideUp', duration: 300 }}>
                            {show && <div className="accordion-body text-[#8a8a8a] text-sm text-justify pb-0">
                                {ans}
                            </div>
                            }
                        </VelocityTransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
