import React from 'react';
import './contact.scss';
import Title from '../title/Title';
import Map from './Map';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapPin,faMobileAlt,faEnvelope,faBusinessTime} from '@fortawesome/free-solid-svg-icons'

function ContactPage() {
    return (
        <div className='row'>
            <div className='col-12 mb-5'>
                <Title title='Contact' />
            </div>
            <div className='row contact-wrapper mb-5'>
                <div className='col-6 text-center mb-5'>
                    <FontAwesomeIcon icon={faMapPin} className='icons'></FontAwesomeIcon>
                    <h5 className='pb-4'>Adresă</h5>
                    <p><strong>Strada Dristorului, nr. 63</strong></p>
                    <p><strong>Strada Cezar Bolliac, nr. 72</strong></p>
                </div>
                <div className='col-6 text-center'>
                    <FontAwesomeIcon icon={faMobileAlt} className='icons'></FontAwesomeIcon>
                    <h5 className='pb-4'>Telefon</h5>
                    <p><a href="tel:+40744318398" ><i class="fa fa-phone" ></i>
                        0744 318 398</a>
                    </p>
                </div>
                <div className='col-6 text-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='icons'></FontAwesomeIcon>
                    <h5 className='pb-4'>Email</h5>
                    <p><a href="mailto:contact@centrulatipic.ro"><i class="fas fa-envelope" ></i> contact@centrulatipic.ro</a>
                    </p>
                </div>
                <div className='col-6 text-center'>
                     <FontAwesomeIcon icon={faBusinessTime} className='icons'></FontAwesomeIcon>
                     <h5 className='pb-4'>Program</h5>
                    <p>Luni – Vineri<br/>
                        10:00 – 19:00</p>
                </div>
            
        </div>
        <Map />
        </div>
    )
}

export default ContactPage
