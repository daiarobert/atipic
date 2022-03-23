import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div class="template-footer-bottom d-flex justify-content-center ">
            <div class="text-center">
                <div class="template-component-social-icon d-flex justify-content-center">
                    <FontAwesomeIcon icon={faInstagram} className="icons"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon>
                </div>
                <strong className="d-flex justify-content-center text-muted text-center copyright">
                    Copyright © 2019 A.T.I.P.I.C. All Rights Reserved.{' '}
                </strong>

                <small>
                    <strong className="d-flex justify-content-center text-center text-muted">
                        Developed by <a href="https://mycool.ro">#mycool</a>
                    </strong>
                </small>
            </div>
        </div>
    );
}

export default Footer;
