import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link as AnchorLink } from 'react-scroll'
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter()
    const { pathname } = router;
    // console.log('my route', pathname)

    const [openNav, setOpenNav] = useState(false)

    const handleNav = () => {
        setOpenNav(!openNav)
    }
    useEffect(() => {
        const handleScroll = () => {
            setOpenNav(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <div className='z-50'>
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded flex items-center justify-between p-4 z-[100] w-full absolute">
                <div className="flex flex-wrap items-center justify-between w-full mx-auto p-4 sm:p-0">

                    <Link href="/">
                        <h1 className={`text-xl hidden sm:block font-thin font-kessel tracking-[5px] cursor-pointer text-${pathname === '/' ? 'black' : 'white'}`}>LOMBOK</h1>
                    </Link>
                    <div className='flex-col text-right sm:hidden'>
                        <button type="button" onClick={handleNav}>
                            <HiMenuAlt4 className={`text-2xl text-${pathname === '/' ? 'gray-700' : 'white'}`} />
                        </button>
                        <div class={openNav ? 'z-10 text-left bg-[#DCE4DB] divide-y divide-gray-100 rounded-lg shadow w-44  block transform transition-all duration-150 ease-out scale-100' : 'block transform transition-all duration-150 ease-out scale-0'}>
                            <ul class="py-2 text-sm text-gray-700 " >
                                <li>
                                    <AnchorLink
                                        to='about'
                                        smooth={true}
                                        spy={true}
                                        offset={150}
                                        duration={500}
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to='article'
                                        smooth={true}
                                        spy={true}
                                        offset={80}
                                        duration={500}
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Article</AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink
                                        to='subscribe'
                                        smooth={true}
                                        spy={true}
                                        offset={80}
                                        duration={500}
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Subscribe</AnchorLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className={`flex flex-col py-4 rounded-lg md:flex-row text-${pathname === '/' ? 'black' : 'white'} md:space-x-8 mt-0 font-medium uppercase tracking-[3px] items-center`}>
                            <li>
                                <AnchorLink
                                    activeClass="active"
                                    hashSpy={true}
                                    smooth={true}
                                    to="about"
                                    spy={true}
                                    offset={30}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 md:p-0  text-base font-semibold uppercase font-faber cursor-pointer" >About</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink to="article" spy={true} smooth={true} offset={95} duration={500} className="block py-2 pl-3 pr-4  md:p-0 text-base font-semibold uppercase font-faber cursor-pointer">Articles</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink to="subscribe" spy={true} smooth={true} offset={80} duration={500}>
                                    <button type="submit" className={`py-2 px-5 w-full  sm:w-[180px] font-semibold text-center cursor-pointer border-2 border-${pathname === '/' ? 'black' : 'white'} cursor-pointer  uppercase font-faber tracking-[4px] `}>Subscribe</button>
                                </AnchorLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar