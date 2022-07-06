import './Maincontent.css';

import React from 'react'
import AvantureIdea from './AvantureIdea'
import Banner from './Banner'
import Experiences from './Experiences'
import LogoList from './LogoList'
import Offer from './Offer'
import Packages from './Packages'
import Post from './Post'
import Product from './Product'
import Reviews from './Reviews'
import Subscribe from './Subscribe'

const Maincontent = () => {
    return (
        <>
            <Banner />
            <AvantureIdea />
            <Experiences />
            <Product />
            <Packages />
            <Reviews />
            <Offer />
            <Post />
            <Subscribe />
            <LogoList />
        </>
    )
}

export default Maincontent