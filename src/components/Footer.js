import React from 'react'
import { FaPinterestP, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="">
                <div className=" sm:flex">

                    <div className="flex flex-col justify-center ">
                        <div className="flex justify-center items-center space-x-14 sm:space-x-9">
                            <FaFacebookF className='text-lg md:text-xl' />
                            <FaInstagram className='text-lg md:text-xl' />
                            <FaTwitter className='text-lg md:text-xl' />
                            <FaPinterestP className='text-lg md:text-xl' />

                        </div>
                    </div>
                    <div className=' py-6  flex-1  sm:text-right text-center text-sm font-semibold text-gray-500'>
                        Powered by CodeBustar.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer