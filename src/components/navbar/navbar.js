import React from 'react';
import { NavData } from './NavbarItem';
import './navbar.scss';
import logo from './logo_header.png';

const Navbar = () => {
    const checkLocation = window.location.pathname;

    return (
        <div className=" d-flex nav-wrapper sticky-top col w-100">
            <div className="col  d-none d-lg-block logo-app d-flex justify-content-center p-3">
                <a href="/">
                    <img src={logo} alt="logo" href="/" className={'logo'} />
                </a>
            </div>
            <div className="nav  nav-wide col-7 d-flex align-items-center justify-content-end d-none d-lg-block">
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
            </div>

            {/* ////////toggle xs-lg */}
            <nav className="navbar-theme-primary  px-4 d-lg-none navbar navbar-dark w-100">
                <div className="col-10  d-lg-none logo-app-small d-flex justify-content-center p-3">
                    <a href="/">
                        <img src={logo} alt="logo-small" href="/" className={'logo'} />
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
                        {NavData.map((data, key) => {
                            return (
                                <a
                                    className="nav-link mt-2"
                                    aria-current="page"
                                    href={data.link}
                                    key={key}
                                    id={checkLocation === data.link ? 'active' : ''}
                                    onClick={() => {
                                        window.location.pathname = data.link;
                                    }}
                                >
                                    <li className="nav-items d-flex flex-column align-items-center justify-content-center ">
                                        <div id="icon">{data.icon}</div>
                                        <p>{data.title}</p>
                                    </li>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
