import React from 'react';
import './services.scss';
import Title from '../title/Title';

function ServicesPage() {
    return (
        <div className='col'>
            <div className='col-12 mb-5'>
                <Title title='Servicii' />
            </div>
            <div className='row d-flex justify-content-center services-wrapper'>
            <div className='col-xs-12 col-md-6 '>
                <img src="https://www.centrulatipic.ro/img/servicii-copii-1.png" alt="servicii copii" style={{maxWidth:'380px', height:'280px'}}></img>
                <h1>Servicii pentru copii</h1>
                <h5 className='text-muted mt-3'>Terapie si recuperare:</h5>
                <ul>
                    <li><a href="https://www.centrulatipic.ro/limbajul-copiilor-cu-tsa">Întârziere în dezvoltarea limbajului</a></li>
                    <li><a href="https://www.centrulatipic.ro/cele-5-tipuri-de-autism">Tulburări pervazive de dezvoltare</a></li>
                    <li><a href="https://www.centrulatipic.ro/cele-3-niveluri-ale-tulburarii-de-spectru-autist-tsa">Tulburări de spectru autist (TSA)</a></li>
                    <li><a href="https://www.centrulatipic.ro/cum-gestionam-agresivitatea-copiilor-cu-tsa-si-adhd">Tulburări de comportament</a></li>
                    <li><a href="https://www.centrulatipic.ro/sindromul-asperger">Sindromul Asperger</a></li>
                    <li><a href="https://www.centrulatipic.ro/sindromul-down">Sindromul Down</a></li>
                    <li><a href="https://www.centrulatipic.ro/adhd-evolutie-si-simptome">ADHD</a></li>
                </ul>
                <br />
                <br />
                <br />
                <ul>
                    <li><a href="https://www.centrulatipic.ro/logopedia">Logopedie</a></li>
                    <li><a href="https://www.centrulatipic.ro/terapie-aba">Terapie ABA</a></li>
                    <li><a href="https://www.centrulatipic.ro/terapia-son-rise">Terapie Son-Rise</a></li>
                    <li><a href="https://www.centrulatipic.ro/dezvoltare-personala">Dezvoltare personală</a></li>
                    <li><a href="https://www.centrulatipic.ro/consiliere-psihologica">Consiliere psihologică</a></li>
                    <li><a href="https://www.centrulatipic.ro/psihoterapia">Psihoterapie individuală</a></li>
                    <li><a href="https://www.centrulatipic.ro/psihoterapie-cognitiv-comportamentala">Psihoterapie cognitiv-comportamentală</a></li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6'>
            <img src="https://www.centrulatipic.ro/img/servicii-adulti.png" alt="servicii adulti" style={{maxWidth:'380px', height:'280px'}}></img>
                <h1>Servicii pentru adulti</h1>
                <ul>
                            <li>Dezvoltare personală</li>
                            <li>Consiliere psihologică, educație pentru sănătate</li>
                            <li>Programe de psihoterapie individuală, de cuplu și de grup</li>
                            <li>Intervenție psihologică clinică primară pentru orice diagnostic</li>
                            <li>Cursuri, workshop-uri și seminarii pe teme psihologice de actualitate</li>
                            <li>Terapie de suport în gestionarea emoțiilor negative, anxietate și fobii specifice</li>
                            <li>Evaluare și intervenție, specifică cuplurilor infertile în reproducerea umană asistată</li>
                        </ul>
            </div>
        </div>
        </div>
    )
}

export default ServicesPage
