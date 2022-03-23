import React from 'react';
import './letsMeet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faMobileAlt, faEnvelope, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

function LetsMeet() {
    return (
        <div className="wrapper-letsMeet row w-100">
            <h2 className="d-flex justify-content-center title-letsMeet"> Let's meet </h2>
            <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                <FontAwesomeIcon icon={faMapPin} className="icons">
                    {' '}
                </FontAwesomeIcon>
                <h5> Address </h5>
                <p>
                    {' '}
                    <strong> Barcelona Street, no. 11 </strong>{' '}
                </p>
                <p>
                    {' '}
                    <strong> Cezar Street, no. 15 </strong>{' '}
                </p>
                <br />
                <p>
                    {' '}
                    Means of transport: <br /> Metro: Lisabona / Rio <br /> Buses: 330, 311, 135, 104
                    <br /> Trolleybuses 79, 70 <br /> Tram 1.10{' '}
                </p>

                <br />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                <FontAwesomeIcon icon={faMobileAlt} className="icons"></FontAwesomeIcon>
                <h5>Telephone</h5>
                <p>
                    <a href="tel:+40744318398">
                        <i class="fa fa-phone"></i>
                        0744 300 300
                    </a>
                </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                <FontAwesomeIcon icon={faEnvelope} className="icons"></FontAwesomeIcon>
                <h5>Email</h5>
                <p>
                    <a href="mailto:contact@atipic.ro">
                        <i class="fas fa-envelope"></i> contact@atipic.ro
                    </a>
                </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                <FontAwesomeIcon icon={faBusinessTime} className="icons"></FontAwesomeIcon>
                <h5>Program</h5>
                <p>
                    Monday – Friday
                    <br />
                    10:00 – 19:00
                </p>
            </div>
        </div>
    );
}

export default LetsMeet;
