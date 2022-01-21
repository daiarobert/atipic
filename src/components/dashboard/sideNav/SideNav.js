import React from 'react';
import { SideNavData } from './SideNavData';
import './sideNav.scss';
import logo from './logo_header.png';
import LogoutBtn from './LogoutBtn';

const SideNav = () => {
    const checkLocation = window.location.pathname;
    return (
        <div className="sideNav col-2 sticky-top">
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
    );
};

export default SideNav;
