import React from 'react';
import Logo from '../sideNav/logo_header.png';
import './loading.scss';

const Loading = () => {
    return (
        <div className="loading-wrapper col-sm-12  col-lg-9 g-0 d-flex justify-content-center align-items-center">
            <img src={Logo} style={{ minWidth: '250px', maxHeight: '250px' }} alt="loading"></img>
        </div>
    );
};

export default Loading;
