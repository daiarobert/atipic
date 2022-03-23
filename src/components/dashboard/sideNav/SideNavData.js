import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export const SideNavData = [
    {
        title: 'Articles',
        icon: <FontAwesomeIcon icon={faNewspaper} className="icons"></FontAwesomeIcon>,
        link: '/dashboard/articles',
    },
    {
        title: 'Team',
        icon: <FontAwesomeIcon icon={faUsers} className="icons"></FontAwesomeIcon>,

        link: '/dashboard/users',
    },
    {
        title: 'Events',
        icon: <FontAwesomeIcon icon={faCalendarAlt} className="icons"></FontAwesomeIcon>,

        link: '/dashboard/events',
    },
];
