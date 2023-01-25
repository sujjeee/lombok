import React from 'react'

const Page = () => {
    return (
        <div>
            <div className='w-full h-screen text-white shadow-2xl'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-full bg-gradient-to-t from-black'></div>
                    <img className='w-full h-full object-cover '
                        src={`https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                    />
                    <div className='absolute w-full top-[30%] p-4 md:p-8'>
                        <div className='text-center justify-center flex items-center'>
                            <p className='pb-3 lg:text-[50px] font-faber text-gray-300 font-bold max-w-screen-sm text-[30px] lg:max-w-[700px] text-center tracking-[5px]'>How to use mindfullness in everyday life</p>
                        </div>
                        <div className='w-[50px] sm:w-[80px] mx-auto bg-gray-300 h-0.5 sm:h-2  rounded-lg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page