import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard';

const CommentBox = () => {
    // State to hold user input
    const [inputValue, setInputValue] = useState('');
    // State to hold comments
    const [comments, setComments] = useState([]);

    // Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    // Function to handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Save comment to local storage
        localStorage.setItem('comments', JSON.stringify([...comments, inputValue]));
        // Clear input
        setInputValue('');
        // Update comments state
        setComments([...comments, inputValue]);
    }

    // Get comments from local storage on component mount
    useEffect(() => {
        try {
            const commentsFromLocalStorage = JSON.parse(localStorage.getItem('comments'));
            if (commentsFromLocalStorage) {
                setComments(commentsFromLocalStorage);
            }
        } catch (error) {
            console.log(error)
        }
    }, []);
    return (
        <div>
            <section className="bg-[#F4F5F7]  py-20">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center ">
                        <h2 className="mb-4 text-4xl tracking-[4px] font-semibold text-gray-900 font-faber uppercase">Leave a comment</h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400 font-faber tracking-wider">and join the conservation</p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="items-center mx-auto mb-3 space-y-4  lg:space-y-8 max-w-screen-sm ">
                                <div className="relative w-full">
                                    <input className=" p-3 w-full h-16 text-lg text-gray-900  border-2 border-gray-300  bg-white " placeholder="Write a comment..." type="text" value={inputValue} onChange={handleInputChange} required="" />
                                </div>

                                <button type="submit" className="py-3 px-5 w-full  sm:w-fit  text-lg font-semibold text-center text-black  border-2 border-black cursor-pointer   uppercase font-faber tracking-[6px] ">comment </button>
                            </div>
                        </form>
                        <div className='mt-16'>
                            <CommentCard comments={comments} />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommentBox