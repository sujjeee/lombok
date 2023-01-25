import React from 'react'

const About = () => {
    return (
        <div >
            <section>
                <div className="mx-auto max-w-screen-2xl  md:h-[800px]">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-full ">
                        <div >
                            <img
                                alt="Student"
                                src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg"
                                className="h-56 w-full object-cover md:h-full"
                            />

                        </div>
                        <div className=" p-8  pb-12  md:p-12 lg:p-20 flex justify-center items-center">
                            <div className="mx-auto max-w-xl text-center">
                                <h2 className="text-2xl font-faber font-bold text-gray-500 md:text-2xl tracking-[3px] uppercase pb-2 ">
                                    About
                                </h2>
                                <div className='w-[40px] mx-auto bg-slate-600 h-1  rounded-lg'></div>

                                <p className=" text-gray-500 mt-8 text-justify md:leading-8 leading-7 lg:px-16 font-content tracking-wider text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex et labore ipsam eos dignissimos a excepturi vero laborum voluptatibus doloribus aut commodi necessitatibus tenetur, perferendis veritatis, accusantium, nemo quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem ipsam, quam quisquam possimus expedita, delectus illo maxime illum saepe perferendis, aliquid molestiae. Ex aspernatur, consequuntur cupiditate doloremque enim voluptate.
                                </p>


                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default About