import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoList = () => {

    const logosList = [
        {
            img: 'assets/images/client-logo-1.png',
        },
        {
            img: 'assets/images/client-logo-2.png',
        },
        {
            img: 'assets/images/client-logo-3.png',
        },
        {
            img: 'assets/images/client-logo-4.png',
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
        <section className='grid wide logo-list-slide'>
            <ul className="logo-list">
                <Slider {...settings}>
                    {
                        logosList.map(({ img }, index) => {
                            return (
                                <li key={index} className="logo-item">
                                    <img className='logo-item-img' src={img} alt="" />
                                </li>
                            )
                        })
                    }
                </Slider>
            </ul>
        </section>
    )
}

export default LogoList