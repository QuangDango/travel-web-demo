import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Reviews = () => {
  const reviewsList = [
    {
      img: 'assets/images/pic-1.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
    {
      img: 'assets/images/pic-2.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
    {
      img: 'assets/images/pic-3.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
    {
      img: 'assets/images/pic-4.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
    {
      img: 'assets/images/pic-5.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
    {
      img: 'assets/images/pic-6.png',
      cmt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?',
      userName: 'john deo',
      job: 'designer',
    },
  ];

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
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section id='customer-reviews' className='grid wide reviews-comment'>
      <div className="reviews-title">
        <h3>
          client's reviews
        </h3>
      </div>
      <div className='review-comment-content'>
        <ul className="review-list">
          <Slider {...settings}>
            {
              reviewsList.map(({ img, cmt, userName, job }, index) => {
                return (
                  <li key={index} className="review-item">
                    <p>
                      {cmt}
                    </p>
                    <div className="reviewer-user">
                      <img className='reviewer-img' src={img} alt="" />
                      <div className="review-info">
                        <span className='review-name'>
                          {userName}
                        </span>
                        <span>
                          {job}
                        </span>
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

export default Reviews