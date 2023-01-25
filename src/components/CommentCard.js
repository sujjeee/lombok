import React from 'react'

const CommentCard = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => (
                //   <div key={index}>{comment}</div>
                <div key={index} className="flex w-full gap-4 max-w-screen-sm mx-auto mt-6">
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" className="w-full h-full object-cover object-center" />
                    </div>

                    <div>
                        <div className="text-indigo-500 text-sm md:text-base font-bold text-left font-faber tracking-wide">Greg Jackson</div>
                        <p className="text-gray-500 text-sm md:text-sm text-justify tracking-wide sm:max-w-lg max-w-[280px]">{comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentCard