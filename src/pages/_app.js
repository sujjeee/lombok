import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import React, { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <>
      <div className={`sticky z-50 ${visible ? 'top-0 transition-opacity duration-700 ease-in-out' : 'opacity-0 duration-300 ease-out'}  max-w-screen-xl mx-auto w-full `}>
        <Navbar />
      </div>
      <Component {...pageProps} />

    </>
  )
}

