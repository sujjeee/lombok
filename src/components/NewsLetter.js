import React from 'react'

const NewsLetter = () => {

    return (
        <div className='z-50' id='subscribe'>
            <section className="bg-[#DCE4DB]  py-20">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center ">
                        <h2 className="mb-4 text-4xl tracking-[4px] font-bold text-gray-900  uppercase font-faber">Subscribe</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400 font-faber tracking-wider">Sign-up to our newsletter</p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4  lg:space-y-8 max-w-screen-sm ">
                                <div className="relative w-full">
                                    <input className=" p-3 w-full h-16 text-lg text-gray-900  border-2 border-white  bg-[#F4F5F7] " placeholder="Enter your email" type="email" id="email" required="" />
                                </div>

                                <button type="submit" className="py-3 px-5 w-full  sm:w-[150px]  text-lg font-semibold text-center text-black  border-2 border-black cursor-pointer   uppercase font-faber tracking-[6px] ">Submit</button>


                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsLetter