import React from 'react';
import Title from '../title/Title';
import EventsItem from './EventsItem';
import './events.scss';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

const EventsPage = () => {
    return (
        <div className="">
            <Navbar />
            <div className="col-12 mb-5">
                <Title title="Evenimente" />
            </div>
            <div className=" services-wrapper">
                <ul className="d-flex row justify-content-start text-center w-100">
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                    <EventsItem />
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default EventsPage;
