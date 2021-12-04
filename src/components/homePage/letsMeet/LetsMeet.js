import React from 'react';
import './letsMeet.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapPin,faMobileAlt,faEnvelope,faBusinessTime} from '@fortawesome/free-solid-svg-icons'


function LetsMeet() {
    return (
        <div className='wrapper-letsMeet row w-100'>
            <h2 className='d-flex justify-content-center title-letsMeet'>Hai să ne cunoaștem</h2>
            <div className='col-xs-12 col-sm-12 col-md-3 text-center'>
            <FontAwesomeIcon icon={faMapPin} className='icons'></FontAwesomeIcon>
            <h5>Adresă</h5>
                    <p><strong>Strada Dristorului, nr. 63</strong></p>
                    <p><strong>Strada Cezar Bolliac, nr. 72</strong></p>
                    <br/>
                    <p>Mijloace de transport: <br/> Metrou: Dristor/Piata Muncii <br/> Autobuze: 330, 311, 135, 104
                        <br/>  Troleibuze 79, 70 <br/> Tramvaiul 1,10</p>

            <br/>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 text-center'>
            <FontAwesomeIcon icon={faMobileAlt} className='icons'></FontAwesomeIcon>
            <h5>Telefon</h5>
                    <p><a href="tel:+40744318398" ><i class="fa fa-phone" ></i>
                            0744 318 398</a></p>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 text-center'>
            <FontAwesomeIcon icon={faEnvelope} className='icons'></FontAwesomeIcon>
            <h5>Email</h5>
                    <p><a href="mailto:contact@centrulatipic.ro"><i class="fas fa-envelope" ></i> contact@centrulatipic.ro</a></p>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 text-center'>
            <FontAwesomeIcon icon={faBusinessTime} className='icons'></FontAwesomeIcon>
            <h5>Program</h5>
                    <p>Luni – Vineri<br/>
                        10:00 – 19:00</p>
            </div>
           
        </div>
    )
}

export default LetsMeet
