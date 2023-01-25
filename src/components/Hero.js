import React from 'react'

const Hero = () => {
    return (
        <div >
            <div className="bg-cover justify-center items-center flex bg-center h-screen w-full bg-no-repeat " style={{ backgroundImage: "url('/hero2.jpg')" }}>
                <div className='w-full items-center justify-center flex'>
                    <div>

                        <div>
                            <h1 className='font-kessel text-center tracking-[6px] md::tracking-wider text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] text-gray-500'>LOMBOK</h1>
                        </div>
                        <div className='text-center  '>
                            <p className='pb-3 text-sm sm:text-xl md:text-3xl lg:text-4xl font-faber text-gray-700 tracking-[5px]'>HOLISTIC HEALTH</p>
                            <div className='w-[50px] sm:w-[100px] mx-auto bg-slate-600 h-0.5 sm:h-1  rounded-lg'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero