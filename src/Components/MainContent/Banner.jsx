import React, { useState } from 'react'
import './Maincontent.css'
import BtnControls from './BtnControls'


const Banner = () => {

  const slideList = [
    {
      content: 'Never Stop',
      title: 'Exploring',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!',
      img: './assets/images/home-bg-1.jpg',
    },
    {
      content: 'Make Tour',
      title: 'Amazing',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!',
      img: './assets/images/home-bg-2.jpg',
    },
    {
      content: 'Explore The',
      title: 'New World',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!',
      img: './assets/images/home-bg-3.jpg',
    },
  ]

  const widthOfSlideContainer = slideList.length * 100;

  const [slideIndexCurrent, setSlideIndexCurrent] = useState(0);

  const nextSlide = () => {
    console.log(slideIndexCurrent);
    if (slideIndexCurrent === slideList.length - 1) {
      setSlideIndexCurrent(0);
    }
    else {
      setSlideIndexCurrent(slideIndexCurrent + 1);
    }
  }

  const prevSlide = () => {
    console.log(slideIndexCurrent);
    if (slideIndexCurrent === slideList.length - 1) {
      setSlideIndexCurrent(((slideIndexCurrent - 1) + slideList.length) % slideList.length);
    }
    else {
      setSlideIndexCurrent(((slideIndexCurrent - 1) + slideList.length) % slideList.length);
    }
  }

  return (
    <section className='banner-wrap'>
      <div style={{ width: `${widthOfSlideContainer}%` }} className='banner-slide'>
        {slideList.map(({ content, title, text, img }, index) => {
          return (
            <div key={index} className={slideIndexCurrent === index ? 'banner-background slide-activated' : 'banner-background'}
              style={(index != slideIndexCurrent) ?
                { backgroundImage: `url(${img})`, opacity: 0 }
                :
                { backgroundImage: `url(${img})` }}>
              <div className='grid wide banner-content-layout'>
                <div className='banner-content'>
                  <span>{content}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button className='btn btn-banner'>
                    Get Start
                  </button>
                </div>
              </div>
            </div>)
        })
        }
        <div className='controls-btn-layout'>
          <BtnControls moveSlide={prevSlide} arrow="left" />
          <BtnControls moveSlide={nextSlide} arrow="right" />
        </div>
      </div>
    </section>
  )
}

export default Banner