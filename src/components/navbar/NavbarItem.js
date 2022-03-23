import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUsers,
    faFileAlt,
    faConciergeBell,
    faTicketAlt,
    faHandHoldingMedical,
} from '@fortawesome/free-solid-svg-icons';

export const NavData = [
    {
        title: 'Home',
        icon: <FontAwesomeIcon icon={faHome} className="icons"></FontAwesomeIcon>,
        link: '/',
    },
    {
        title: 'Articles',
        icon: <FontAwesomeIcon icon={faFileAlt} className="icons"></FontAwesomeIcon>,
        link: '/articles',
    },
    {
        title: 'Team',
        icon: <FontAwesomeIcon icon={faUsers} className="icons"></FontAwesomeIcon>,

        link: '/team',
    },
    {
        title: 'Services',
        icon: <FontAwesomeIcon icon={faConciergeBell} className="icons"></FontAwesomeIcon>,

        link: '/services',
    },
    {
        title: 'Events',
        icon: <FontAwesomeIcon icon={faTicketAlt} className="icons"></FontAwesomeIcon>,

        link: '/events',
    },
    {
        title: 'Donate',
        icon: <FontAwesomeIcon icon={faHandHoldingMedical} className="icons"></FontAwesomeIcon>,

        link: '/donate',
    },
    {
        title: 'Contact',
        icon: <FontAwesomeIcon icon={faTicketAlt} className="icons"></FontAwesomeIcon>,

        link: '/contact',
    },
];
