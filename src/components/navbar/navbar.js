import React from 'react';
// import '../App.css';
import './navbar.scss'
import logo from './logo_header.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUsers, faFileAlt, faConciergeBell, faTicketAlt, faHandHoldingMedical,faAddressCard} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {



    return (
        <div className='col d-flex nav-wrapper sticky-top w-100 '>
            <div className='col logo-app d-flex justify-content-center p-3'>
            <a href='/'><img src={logo} alt="logo" href='/' className='logo' /></a>
            </div>
            <div className="nav  nav-wide col-7 d-flex align-items-center justify-content-end d-none d-lg-block">

                <div className='d-flex justify-content-end align-items-center mt-4 items-wrapper'>
                <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                   <FontAwesomeIcon icon={faHome} className='icons'></FontAwesomeIcon>
                    <a className="nav-link active" aria-current="page" href="/">Acasa</a>
                </div>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faUsers} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/team">Echipa</a>
                </li>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faFileAlt} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/articles">Articole</a>
                </li>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faConciergeBell} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/services">Servicii</a>
                </li>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faTicketAlt} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/events">Evenimente</a>
                </li>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faHandHoldingMedical} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/donate">Doneaza</a>
                </li>
                <li className="nav-item d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={faAddressCard} className='icons'></FontAwesomeIcon>
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
                </div>
               
            </div>
        </div>
        
    )
}

export default Navbar