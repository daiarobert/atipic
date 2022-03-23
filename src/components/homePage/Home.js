import React from 'react';
import Carousel from './carousel/Carousel';
import Info from './info/Info';
import Info2 from './info2/Info2';
import InfoFirstPage from './infoFirstPage/InfoFirstPage';
import OurStory from './ourStory/OurStory';
import LetsMeet from './letsMeet/LetsMeet';
import Partners from '../partners/Partners';
import Map from '../contactPage/Map';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function Home() {
    return (
        <div className="row g-0">
            <Navbar />
            <Carousel />
            <Info />
            <Info2 />
            <InfoFirstPage />
            <OurStory />
            <Map />
            <LetsMeet />
            <Partners />
            <Footer />
        </div>
    );
}

export default Home;
