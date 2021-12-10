import React from 'react';
import ImgServicesChildren from './servicii-copii-1.png'
import ImgServicesAdults from './servicii-adulti.png'
import './services.scss';
import Title from '../title/Title';

function ServicesPage() {
    return (
        <div className='col'>
            <div className='col-12 mb-5'>
                <Title title='Servicii' />
            </div>
            <div className='row d-flex services-wrapper'>
            <div className='col-xs-12 col-md-6 mb-5'>
                <img src={ImgServicesChildren} alt="servicii copii" style={{maxWidth:'100%'}}></img>
                <h3>Servicii pentru copii</h3>
                <h5 className='text-muted mt-4'>Terapie si recuperare:</h5>
                    <li>Întârziere în dezvoltarea limbajului</li>
                    <li>Tulburări pervazive de dezvoltare</li>
                    <li>Tulburări de spectru autist (TSA)</li>
                    <li>Tulburări de comportament</li>
                    <li>Sindromul Asperger</li>
                    <li>Sindromul Down</li>
                    <li>ADHD</li>
                <br />
                <br />
                <br />
                    <li>Logopedie</li>
                    <li>Terapie ABA</li>
                    <li>Terapie Son-Rise</li>
                    <li>Dezvoltare personală</li>
                    <li>Consiliere psihologică</li>
                    <li>Psihoterapie individuală</li>
                    <li>Psihoterapie cognitiv-comportamentală</li>
            </div>
            <div className='col-xs-12 col-md-6'>
            <img src={ImgServicesAdults} alt="servicii adulti" style={{maxWidth:'100%'}}></img>
                <h3 className='mb-4'>Servicii pentru adulti</h3>
                            <li>Dezvoltare personală</li>
                            <li>Consiliere psihologică, educație pentru sănătate</li>
                            <li>Programe de psihoterapie individuală, de cuplu și de grup</li>
                            <li>Intervenție psihologică clinică primară pentru orice diagnostic</li>
                            <li>Cursuri, workshop-uri și seminarii pe teme psihologice de actualitate</li>
                            <li>Terapie de suport în gestionarea emoțiilor negative, anxietate și fobii specifice</li>
                            <li>Evaluare și intervenție, specifică cuplurilor infertile în reproducerea umană asistată</li>
                      
            </div>
        </div>
        </div>
    )
}

export default ServicesPage
