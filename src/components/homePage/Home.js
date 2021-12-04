import React from 'react';
import Carousel from './carousel/Carousel'
import Info from './info/Info';
import Info2 from './info2/Info2';
import InfoFirstPage from './infoFirstPage/InfoFirstPage';
import OurStory from './ourStory/OurStory';
import LetsMeet from './letsMeet/LetsMeet';
import Partners from '../partners/Partners';


function Home() {
    return (
        <div>
            <Carousel />
            <Info />
            <Info2 />
            <InfoFirstPage />
            <OurStory />
            <LetsMeet />
            <Partners />
            
        </div>
    )
}

export default Home
