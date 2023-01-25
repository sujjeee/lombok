import React from 'react'
import { RiCloseLine } from 'react-icons/ri';

const NewsModal = (props) => {
    const handleClose = () => {
        props.callback();
    }
    return (
        <div className='absolute'>
            <div class=" py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div class="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-20 relative border-2 border-gray-200 font-faber">
                        <RiCloseLine size={25} className=" text-gray-500 absolute top-6 right-6 hover:text-gray-700 cursor-pointer" onClick={handleClose} />
                        <div class="mb-4 sm:mb-8">
                            <h2 class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center tracking-wider">Get the latest updates</h2>
                            <p class="text-gray-500 text-center">Sign up for our newsletter</p>
                        </div>

                        <form class="w-full max-w-md  gap-2 mb-3 sm:mb-5 flex-col justify-center text-center">
                            <input placeholder="Enter your email..." class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                            <button class=" bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2 mt-8 tracking-[4px] uppercase">Submit</button>

                        </form>

                        <p class="text-gray-400 text-xs text-center">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Term of Service</a> and <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsModal