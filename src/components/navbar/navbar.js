import React, {useState} from 'react';
// import '../App.css';
import './navbar.scss'
import logo from './logo_header.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUsers, faFileAlt, faConciergeBell, faTicketAlt, faHandHoldingMedical,faAddressCard} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [scroll, setScroll] = useState(false);

    const isScrolling = ()=> {
        if(window.scrollY >= 115) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', isScrolling);

    return (
        <div className=' d-flex nav-wrapper sticky-top col w-100'>
            <div className='col  d-none d-lg-block logo-app d-flex justify-content-center p-3'>
            <a href='/'><img src={logo} alt="logo" href='/' className={!scroll ? 'logo' : 'logo-scroll'} /></a>
            </div>
            <div className="nav  nav-wide col-7 d-flex align-items-center justify-content-end d-none d-lg-block">

               
                    {!scroll ? <div className='d-flex justify-content-end align-items-center mt-4 items-wrapper'>
                    <a className="nav-link active" aria-current="page" href="/"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faHome} className='icons'></FontAwesomeIcon>
                        <p>Acasa</p>
                    </div></a>
                    <a className="nav-link " aria-current="page" href="/team"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faUsers} className='icons'></FontAwesomeIcon>
                        <p>Echipa</p>
                    </div></a>
                    <a className="nav-link " aria-current="page" href="/articles"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faFileAlt} className='icons'></FontAwesomeIcon>
                        <p>Articole</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/services"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faConciergeBell} className='icons'></FontAwesomeIcon>
                        <p>Servicii</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/events"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faTicketAlt} className='icons'></FontAwesomeIcon>
                        <p>Evenimente</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/donate"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faHandHoldingMedical} className='icons'></FontAwesomeIcon>
                        <p>Doneaza</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/contact"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                    <FontAwesomeIcon icon={faAddressCard} className='icons'></FontAwesomeIcon>
                        <p>Contact</p>
                    </div></a>
                    </div> :<div className='d-flex justify-content-end align-items-center mt-4 items-wrapper'>
                    <a className="nav-link active" aria-current="page" href="/"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Acasa</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/team"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Echipa</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/articles"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Articole</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/services"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Servicii</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/events"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Evenimente</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/donate"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Doneaza</p>
                    </div></a>
                    <a className="nav-link active" aria-current="page" href="/contact"><div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                        <p>Contact</p>
                    </div></a>
                    </div>  }
               
            </div>

            {/* ////////toggle xs-lg */}
            <nav className="navbar-theme-primary col px-4 d-lg-none navbar navbar-dark w-100">
            <div className='col-10  d-lg-none logo-app-small d-flex justify-content-center p-3'>
            <a href='/'><img src={logo} alt="logo-small" href='/' className={!scroll ? 'logo' : 'logo-scroll'} /></a>
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
                    <FontAwesomeIcon icon={faHome} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle active" aria-current="page" href="/">Acasa</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faUsers} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/team">Echipa</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faFileAlt} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/articles">Articole</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faConciergeBell} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/services">Servicii</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faTicketAlt} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/events">Evenimente</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faHandHoldingMedical} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/donate">Doneaza</a>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-center p-3">
                    <FontAwesomeIcon icon={faAddressCard} className='icons-toggle'></FontAwesomeIcon>
                        <a className="nav-link-toggle" href="/contact">Contact</a>
                    </li>
                        {/* <SideNavItems
                            link="/dashboard"
                            sidebarText="Dashboard"
                            activeClass="sideNavItem"
                            image={<FontAwesomeIcon icon={faHome} className="fa-svgEdit" />}
                        />

                        <SideNavItems
                            link="/users"
                            sidebarText="Users"
                            activeClass="sideNavItem"
                            image={<FontAwesomeIcon icon={faUsers} className="fa-svgEdit" />}
                        />
                        <SideNavItems
                            link="/location"
                            sidebarText="Location"
                            activeClass="sideNavItem"
                            image={<FontAwesomeIcon icon={faMap} className="fa-svgEdit" />}
                        />
                        <SideNavItems
                            link="/clients"
                            sidebarText="Clients"
                            activeClass="sideNavItem"
                            image={<FontAwesomeIcon icon={faAddressCard} className="fa-svgEdit" />}
                        /> */}
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar