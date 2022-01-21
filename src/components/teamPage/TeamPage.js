import React from 'react';
import Title from './title/Title';
import Members from './members/Members';
import Terapeuti from './terapeuti/Terapeuti';
import Voluntari from './voluntari/Voluntari';
import Administrativ from './administrativ/Administrativ';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function TeamPage() {
    return (
        <div className="col">
            <Navbar />
            <Title />
            <Members />
            <Terapeuti />
            <Voluntari />
            <Administrativ />
            <Footer />
        </div>
    );
}

export default TeamPage;
