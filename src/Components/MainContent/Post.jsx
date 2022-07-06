import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Post = () => {

  const postsList = [
    {
      img: 'assets/images/img-1.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
    {
      img: 'assets/images/img-2.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
    {
      img: 'assets/images/img-3.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
    {
      img: 'assets/images/img-4.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
    {
      img: 'assets/images/img-5.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
    {
      img: 'assets/images/img-6.jpg',
      date: '21st may, 2021',
      useName: 'by admin',
      title: 'blog title goes here.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.',
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='blog' className='grid wide posts-wrap'>
      <div className="posts-title">
        <h3>
          our daily posts
        </h3>
      </div>
      <div className="posts-content">
        <ul className="posts-list">
          <Slider {...settings}>
            {
              postsList.map(({ img, date, useName, title, text }, index) => {
                return (
                  <li key={index} className="post-item">
                    <div className="post-item-layout">
                      <div className="post-item-views">
                        <img className='post-item-img' src={img} alt="" />
                        <div className="post-item-info">
                          <div className="post-item-info-wrap">
                            <div className="post-item-time">
                              <i className="fa-solid fa-calendar"></i>
                              <span>{date}</span>
                            </div>
                            <div className="post-item-arthur">
                              <i className="fa-solid fa-user"></i>
                              <span>{useName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-item-content">
                        <h3>
                          {title}
                        </h3>
                        <p>
                          {text}
                        </p>
                        <a href="" className='btn read-more-btn'>read more</a>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </Slider>
        </ul>
      </div>
    </section>
  )
}

export default Post