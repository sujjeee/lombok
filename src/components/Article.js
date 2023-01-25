import Link from 'next/link'
import React from 'react'


const Article = () => {
    return (
        <div className='mx-auto justify-center items-center py-40  bg-[#F4F5F7] px-5' >
            <div>

                <div className='text-center mx-auto justify-center items-center pb-20'>
                    <h2 className='font-medium uppercase tracking-wider  pb-6 text-gray-500 text-4xl'>Latest Articles</h2>
                    <div className='w-[100px] mx-auto bg-slate-600 h-1  rounded-lg'></div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-[1280px] mx-auto '>

                    <div className="max-w-sm bg-white border border-gray-200 mx-auto mb-4 shadow-2xl rounded-sm cursor-pointer">
                        <Link href='/article'>
                            <img className='rounded-sm' src="https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg" alt="" />

                            <div className="py-20 px-14 justify-center tracking-wider">
                                <div className='w-[50px] mx-auto bg-slate-600 h-1  rounded-lg'></div>
                                <div className='text-xl font-semibold text-gray-700 text-center pt-4  font-faber tracking-widest leading-8'>How to use mindfullness in everyday life</div>
                            </div>
                        </Link>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 mx-auto mb-4 shadow-2xl rounded-sm cursor-pointer">
                        <Link href='/article'>
                            <img className='rounded-sm' src="https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_960_720.jpg" alt="" />

                            <div className="py-20 px-14  justify-center tracking-wider">
                                <div className='w-[50px] mx-auto bg-slate-600 h-1  rounded-lg'></div>
                                <div className='text-xl font-semibold text-gray-700 text-center pt-4  font-faber tracking-widest leading-8'>10 Best Nootropics for Social Anxiety</div>
                            </div>
                        </Link>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 mx-auto mb-4 shadow-2xl rounded-sm cursor-pointer">
                        <Link href='/article'>
                            <img className='rounded-sm' src="https://cdn.pixabay.com/photo/2023/01/14/05/34/street-7717463_960_720.jpg" alt="" />

                            <div className="py-20 px-14  justify-center tracking-wider">
                                <div className='w-[50px] mx-auto bg-slate-600 h-1  rounded-lg'></div>
                                <div className='text-xl font-semibold text-gray-700 text-center pt-4  font-faber tracking-widest leading-8'>10 Best Nootropics for Social Anxiety</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article