import React from 'react';
import Title from './title/Title';
import Members from './members/Members';
import Terapeuti from './terapeuti/Terapeuti';
import Voluntari from './voluntari/Voluntari';
import Administrativ from './administrativ/Administrativ';

function TeamPage() {
    return (
        <div className='col'>
            <Title />
            <Members />
            <Terapeuti />
            <Voluntari />
            <Administrativ />
        </div>
    )
}

export default TeamPage
