import React from 'react';
import { SideNavData } from './SideNavData';
import './sideNav.scss';
import logo from './logo_header.png';
import LogoutBtn from './LogoutBtn';

const SideNav = () => {
    const checkLocation = window.location.pathname;
    return (
        <div className=" col-xs-12 col-lg-3 sticky-top" style={{ maxWidth: 'fit-content' }}>
            <div
                className="sideNav side-wrapper d-none d-lg-block col-lg-3 sticky-top"
                style={{ width: 'fit-content' }}
            >
                <a href="/dashboard">
                    <img src={logo} alt="logo" href="/" className="logo" />
                </a>

                {SideNavData.map((data, key) => {
                    return (
                        <li
                            key={key}
                            id={checkLocation === data.link ? 'active' : ''}
                            className="d-flex liItem flex-direction-row justify-content-center align-items-center"
                            onClick={() => {
                                window.location.pathname = data.link;
                            }}
                        >
                            <div id="icon">{data.icon}</div>
                            <div id="title">{data.title}</div>
                        </li>
                    );
                })}

                <LogoutBtn
                    btnClassName="btn-primary logoutBtn"
                    wrapperClassName="d-flex align-items-center justify-content-center  col-12"
                />
            </div>
            <nav
                className="navbar-theme-primary col px-4 d-lg-none navbar navbar-dark w-100 "
                style={{ backgroundColor: 'white' }}
            >
                <div className="col-10 d-lg-none logo-app-small d-flex justify-content-center p-3">
                    <a href="/">
                        <img src={logo} alt="logo-small" href="/" className="logo" />
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
                        {SideNavData.map((data, key) => {
                            return (
                                <li
                                    key={key}
                                    id={checkLocation === data.link ? 'active' : ''}
                                    className="d-flex liItem flex-direction-row justify-content-center align-items-center"
                                    onClick={() => {
                                        window.location.pathname = data.link;
                                    }}
                                >
                                    <div id="icon">{data.icon}</div>
                                    <div id="title">{data.title}</div>
                                </li>
                            );
                        })}
                        <LogoutBtn
                            btnClassName="btn-primary logoutBtn mb-2"
                            wrapperClassName="d-flex align-items-center justify-content-center  col-12"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNav;
