import React, { useState } from 'react';
import { NavData } from './NavbarItem';
// import '../App.css';
import './navbar.scss';
import logo from './logo_header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUsers,
    faFileAlt,
    faConciergeBell,
    faTicketAlt,
    faHandHoldingMedical,
    faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const isScrolling = () => {
        if (window.scrollY >= 115) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    const checkLocation = window.location.pathname;
    window.addEventListener('scroll', isScrolling);

    return (
        <div className=" d-flex nav-wrapper sticky-top col w-100">
            <div className="col  d-none d-lg-block logo-app d-flex justify-content-center p-3">
                <a href="/">
                    <img src={logo} alt="logo" href="/" className={!scroll ? 'logo' : 'logo-scroll'} />
                </a>
            </div>
            <div className="nav  nav-wide col-7 d-flex align-items-center justify-content-end d-none d-lg-block">
                {!scroll ? (
                    <div className="d-flex justify-content-end align-items-center mt-4 items-wrapper">
                        {NavData.map((data, key) => {
                            return (
                                <a
                                    className="nav-link "
                                    aria-current="page"
                                    href={data.link}
                                    key={key}
                                    id={checkLocation === data.link ? 'active' : ''}
                                    onClick={() => {
                                        window.location.pathname = data.link;
                                    }}
                                >
                                    <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                        <div id="icon">{data.icon}</div>
                                        <p>{data.title}</p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                ) : (
                    <div className="d-flex justify-content-end align-items-center mt-4 items-wrapper">
                        {NavData.map((data, key) => {
                            <a>
                                <div
                                    className="nav-link "
                                    aria-current="page"
                                    href={data.link}
                                    key={key}
                                    id={checkLocation === data.link ? 'active' : ''}
                                    onClick={() => {
                                        window.location.pathname = data.link;
                                    }}
                                    className="nav-item-scroll d-flex flex-column align-items-center justify-content-center "
                                >
                                    <p>{data.title}</p>
                                </div>
                            </a>;
                        })}
                        {/* <a className="nav-link " aria-current="page" href="/">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Home</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/team">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Team</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/articles">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Articles</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/services">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Services</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/events">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Events</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/donate">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Donate</p>
                            </div>
                        </a>
                        <a className="nav-link " aria-current="page" href="/contact">
                            <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                                <p>Contact</p>
                            </div>
                        </a> */}
                    </div>
                )}
            </div>

            {/* ////////toggle xs-lg */}
            <nav className="navbar-theme-primary  px-4 d-lg-none navbar navbar-dark w-100">
                <div className="col-10  d-lg-none logo-app-small d-flex justify-content-center p-3">
                    <a href="/">
                        <img src={logo} alt="logo-small" href="/" className={!scroll ? 'logo' : 'logo-scroll'} />
                    </a>
                </div>

                <button
                    className="navbar-toggler col-2 d-flex justify-content-end bg-primary collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="toggle-nav w-100 m-0">
                    <div className="toggle-nav-items-wrapper collapse" id="sidebarMenu">
                        <li className="nav-item d-flex  align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faHome} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faUsers} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/team">
                                Team
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faFileAlt} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/articles">
                                Articles
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faConciergeBell} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faTicketAlt} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/events">
                                Events
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faHandHoldingMedical} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/donate">
                                Donate
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center justify-content-center p-3">
                            <FontAwesomeIcon icon={faAddressCard} className="icons-toggle"></FontAwesomeIcon>
                            <a className="nav-link-toggle" href="/contact">
                                Contact
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
