import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addCart, deleteCart, removeCart } from '../../Redux/Action'
import { useSelector } from 'react-redux';
import './Header.css'

const Header = () => {

    const stateNum = useSelector((stateNum) => stateNum.handleCart)

    const [state, setState] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const delProduct = (product) => {
        dispatch(deleteCart(product));
    }

    const removeProduct = (product) => {
        dispatch(removeCart(product));
    }

    const handleClickOnTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setState(true);
            } else {
                setState(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <header className={state ? 'header-wrapper active' : 'header-wrapper'}>
            <div className='header grid wide'>
                <div className='header__logo'>
                    <a href="" className="header__logo-link">
                        <i className="header__logo-icon fa-solid fa-person-hiking"></i>
                        <span className='header__logo-label'>Travel.</span>
                    </a>
                </div>
                <div className='header__navbar hide-on-mobile-tablet'>
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Home
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#experiences" className="header__navbar-item-link">
                                About
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#shop-product" className="header__navbar-item-link">
                                Shop
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#buy-packages" className="header__navbar-item-link">
                                Packages
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#customer-reviews" className="header__navbar-item-link">
                                Reviews
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#blog" className="header__navbar-item-link">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header__icon'>
                    <label htmlFor='close-bar-control' className='header__icon-bar'>
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    <label htmlFor='close-cart-control' className='header__icon-link'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className='qty-item-in-cart'>
                            {stateNum.length}
                        </div>
                    </label>
                    <label htmlFor='close-search-control' className='header__icon-search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                </div>
            </div>
            {state &&
                <div className="on-top-control">
                    <button onClick={handleClickOnTop} className='on-top-btn'>
                        <i className="on-top-btn-icon fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            }
            <input type="checkbox" name="close-bar-control" id="close-bar-control" />
            <input type="checkbox" name="close-search-control" id="close-search-control" />
            <input type="checkbox" name="close-cart-control" id="close-cart-control" />
            <div className='header__navbar-tablet-mobile'>
                <label htmlFor='close-bar-control' className="header__navbar-overlay"></label>
                <div className="header__navbar-layout">
                    <ul className="header__navbar-list">
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Home
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="#experiences" className="header__navbar-item-link">
                                About
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Shop
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Packages
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Reviews
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a href="" className="header__navbar-item-link">
                                Blogs
                            </a>
                        </li>
                    </ul>
                    <label htmlFor='close-bar-control' className='bar-close'>
                        <i className="fa-solid fa-xmark"></i>
                    </label>
                </div>
            </div>
            <div className='header__search-overlay'>
                <div className='header__search'>
                    <input className='search-input' type="text" placeholder='Search here' />
                    <button className='search-btn'>
                        <i className="search-btn-icon fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <label htmlFor='close-search-control' className='search-close'>
                    <i className="fa-solid fa-xmark"></i>
                </label>
            </div>
            <div className='cart-container'>
                <div className="cart-overlay"></div>
                <div className="cart-layout">
                    <ul className="cart-list">
                        <div className="cart-title">
                            Cart
                        </div>
                        {stateNum.map((item, index) => {
                            return (
                                <li key={index} className="cart-item">
                                    <div className="product-cart">
                                        <div className="product-cart-info">
                                            <img className='product-cart-img' src={item.img} alt="" />
                                            <div className="product-cart-detail">
                                                <div className="product-cart-text">
                                                    <span>{item.name}</span>
                                                    <span>{item.price}</span>
                                                </div>
                                                <div className="product-cart-qty">
                                                    <button onClick={() => addProduct(item)}>
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <span> {item.qty} </span>
                                                    <button onClick={() => delProduct(item)}>
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>
                                                </div>
                                                <div onClick={() => removeProduct(item)} className="remove-product-btn">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="cart-check-btn">
                        <button>
                            Check out
                        </button>
                    </div>
                    <label htmlFor='close-cart-control' className='cart-close'>
                        <i className="fa-solid fa-xmark"></i>
                    </label>
                </div>
            </div>

        </header>
    )
}

export default Header
