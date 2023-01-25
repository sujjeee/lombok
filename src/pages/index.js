import About from '@/components/About'
import Article from '@/components/Article'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewsLetter from '@/components/NewsLetter'
import NewsModal from '@/components/NewsModal'
import { useEffect, useState } from 'react';

const index = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopUp(true);
  //   }, 3000);
  // }, []);


  const handleClose = () => {
    setShowPopUp(false);
  }
  return (
    <>
      {showPopUp && (
        <div className='fixed inset-0 flex justify-center items-center top-0 left-0 backdrop-blur-lg z-50'>
          <NewsModal callback={handleClose} />
        </div>
      )}
      <div >
        <Hero />
      </div>
      <div className='mt-5' id='article'>
        <Article />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='subscribe'>
        <NewsLetter />
      </div>
      <div className='max-w-screen-xl mx-auto p-7'>
        <Footer />
      </div>
    </>
  )
}

export default index