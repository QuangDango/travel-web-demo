import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch } from 'react-redux/es/exports'
import { addCart } from '../../Redux/Action'
import Slider from 'react-slick';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} control-btn-right height-center-position`}
      style={{ ...style }}
      onClick={onClick} >
      <button className='control-btn'>
        <i className={'control-btn-icon fa-solid fa-chevron-right'}></i>
      </button>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} control-btn-left height-center-position`}
      style={{ ...style }}
      onClick={onClick} >
      <button className='control-btn'>
        <i className={'control-btn-icon fa-solid fa-chevron-left'}></i>
      </button>
    </div>
  );
}


const Product = () => {
  const productList = [
    {
      id: 1,
      img: "assets/images/product-1.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
    {
      id: 2,
      img: "assets/images/product-2.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
    {
      id: 3,
      img: "assets/images/product-3.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
    {
      id: 4,
      img: "assets/images/product-4.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
    {
      id: 5,
      img: "assets/images/product-5.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
    {
      id: 6,
      img: "assets/images/product-6.jpg",
      name: "survival kits",
      price: "$5.00 - $25.00",
    },
  ]

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section id='shop-product' className='grid wide products-wrap'>
      <div className="row products-title">
        <h3>
          featured products
        </h3>
      </div>

      <div className="products">
        <ul className="products-list">
          <Slider {...settings}>
            {productList.map(({ id, img, name, price }, index) => {
              return (
                <li key={index} className="product-item">
                  <div className='product-item-wrap'>
                    <div className='product-view'>
                      <img className='product-img' src={img} alt="" />
                      <div className="product-btn">
                        <button onClick={() => addProduct({ id, img, name, price })}>
                          <i className="product-btn-icon fa-solid fa-cart-shopping"></i>
                        </button>
                        <button>
                          <i className="product-btn-icon fa-solid fa-eye"></i>
                        </button>
                        <button>
                          <i className="product-btn-icon fa-solid fa-share"></i>
                        </button>
                      </div>
                    </div>
                    <span className='product-name'>{name}</span>
                    <span className='product-price'>{price}</span>
                    <div className='product-rate'>
                      <div className='product-rate-empty'>
                        <i className="product-rate-icon--empty fa-regular fa-star"></i>
                        <i className="product-rate-icon--empty fa-regular fa-star"></i>
                        <i className="product-rate-icon--empty fa-regular fa-star"></i>
                        <i className="product-rate-icon--empty fa-regular fa-star"></i>
                        <i className="product-rate-icon--empty fa-regular fa-star"></i>
                      </div>
                      <div className='product-rate-fill'>
                        <i className="product-rate-icon--fill fa-solid fa-star"></i>
                        <i className="product-rate-icon--fill fa-solid fa-star"></i>
                        <i className="product-rate-icon--fill fa-solid fa-star"></i>
                        <i className="product-rate-icon--fill fa-solid fa-star"></i>
                        <i className="product-rate-icon--fill fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </Slider>
        </ul>
      </div>
    </section>
  )
}

export default Product