import BlogCard from '@/components/BlogCard'
import CommentBox from '@/components/CommetBox'
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'
import Page from '@/components/Page'

import React from 'react'

const page = () => {
    return (
        <div>
            <Page />
            <div className=' flex justify-center items-center '>
                <BlogCard />
            </div>
            <div>
                <CommentBox />
            </div>
            <div>
                <NewsLetter />
            </div>
            <div className='max-w-screen-xl mx-auto p-7'>
                <Footer />
            </div>
        </div>
    )
}

export default page