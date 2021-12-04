import React from 'react';
import'./footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright, faRegistered} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div class="template-footer-bottom row d-flex ">
            <div class="template-align-center template-main">
                <div class="template-component-social-icon template-component-social-icon-style-1 template-clear-fix template-margin-bottom-2">
                    <ul className=' justify-content-center d-flex'>
                        <FontAwesomeIcon icon={faCopyright} className='icons'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faRegistered} className='icons'></FontAwesomeIcon>
                       
                       
                    </ul>
                </div>
                    <strong className='d-flex justify-content-center text-muted copyright'>Copyright © 2019 Centrul A.T.I.P.I.C. Toate drepturile rezervate. </strong>
                    <br/>
                    <small><strong className='d-flex justify-content-center text-muted'>Dezvoltat de <a href="https://mycool.ro">#mycool</a></strong></small>
            </div>
        </div>
    )
}

export default Footer
