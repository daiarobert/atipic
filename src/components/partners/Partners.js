import React from 'react';
import './partners.scss';
import Logo1 from './logos/jobsora-logo.jpg';
import Logo2 from './logos/mic-pitic-transparent.png';
import Logo3 from './logos/cryptocube-logo.png';
import Logo4 from './logos/ssmb.svg';
import Logo5 from './logos/cora-logo.svg';
import Logo6 from './logos/logo-mycool.svg';

function Partners() {
    return (
        <div className="wrapper-partners">
            <h2 className="d-flex justify-content-center mt-5 title-partners"> Partners and sponsors </h2>
            <h4 className="text-muted text-center d-flex justify-content-center">
                {' '}
                Together we build a world for all{' '}
            </h4>
            <div className="wrapp row w-100">
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo1} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo2} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo3} alt="" id="crypto" />
                </div>
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo4} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo5} alt="" />
                </div>
                <div className="col-sm-6 col-md-4 d-flex justify-content-center">
                    <img src={Logo6} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Partners;
