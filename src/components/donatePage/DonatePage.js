import React from 'react';
import './donatePage.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshakeSlash, faHandHoldingUsd, faFileDownload, faAddressCard} from '@fortawesome/free-solid-svg-icons'


function DonatePage() {
    return (
        <div className='wrapper-donate'>
            <div className='row'>
            <h1 className='text-white text-center p-5 col-12' style={{fontSize:'60px'}}>Implica-te impreuna cu noi !</h1>
            <ul className='d-flex row justify-content-start text-center p-5'>
                   <li className='item col-xs-12 col-md-4 ' >
                   <div className='circle mb-4'>
                        <FontAwesomeIcon icon={faHandshakeSlash} className='icons'></FontAwesomeIcon>
                    </div>
                    <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">VOLUNTARIAT</h6>
                        <div class="donate-info mb-4">
                            Dacă iubești copiii și vrei sa te implici activ în viitorul unor micuți speciali, te invităm să ne contactezi și noi îți oferim oportunitatea de a învăța și aplica, într-un mediu organizat și profesionalist, programe de lucru și jocuri pentru copii cu autism și alte tulburări de dezvoltare, într-un mediu vesel și prietenos.
                        </div>
                        <button className='btn btn-outline-primary'><a href="mailto:contact@centrulatipic.ro" class="" alt="redirectare_3.5_impozit_catre_atipic" title="redirectare_3.5_impozit_catre_atipic">Contactează-ne<i></i></a></button>
                    </li> 

                    <li className='item col-xs-12 col-sm-12 col-md-4'>
                        <div className='circle mb-4'>
                            <FontAwesomeIcon icon={faHandHoldingUsd} className='icons'></FontAwesomeIcon>
                        </div>
                        <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">DONEAZĂ</h6>
                        <p>
                            IBAN <strong>RO39BACX0000001587515001</strong>
                        </p>
                        <button className='btn btn-outline-primary mt-2'><a download="" href="https://centrulatipic.ro/contract_donatie_impozit_pe_profit_ATIPIC.docx" class="template-component-button template-component-button-style-2 template-section-white" alt="contract_donatie_impozit_pe_profit_ATIPIC" title="contract_donatie_impozit_pe_profit_ATIPIC">Descarcă formular<i></i></a></button>
                    </li>
                    <li className='item col-xs-12 col-sm-12 col-md-4'>
                        <div className='circle mb-4'>
                            <FontAwesomeIcon icon={faFileDownload} className='icons'></FontAwesomeIcon>
                        </div>
                        <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">REDIRECȚIONEAZĂ 3,5%</h6>

                        <div class="donate-info mb-4">
                            De mai bine de 4 ani venim în sprijinul copiilor cu TSA, sindrom asperger, autism virtual și alte tulburări neuropsihologice, cu programe complexe de terapie ABA și psihoterapie, în toate etapele necesare recuperării și dezvoltării acestora.
                            Orice contribuție este importantă și îți mulțumim dacă ai ales să te implici!
                        </div>
                        <button className='btn btn-outline-primary mb-2'><a download="" href="https://centrulatipic.ro/Declaratia_230_Atipic_2020.pdf" class="template-component-button template-component-button-style-2 template-section-white" alt="redirectare_3.5_impozit_catre_atipic" title="redirectare_3.5_impozit_catre_atipic">Descarcă formular<i></i></a></button>
                        <button className='btn btn-outline-primary'><a href="https://centrulatipic.ro/doneaza/formular230" class="template-component-button template-component-button-style-2 template-section-white" alt="completează formularul 230" title="completează formularul 230">Completează formular<i></i></a></button>
                    </li>
               
            </ul>
            <h2 className='text-white text-center p-5 col-12' style={{fontSize:'60px'}}>Sau devino sponsor !</h2>
            <ul className='d-flex row justify-content-start text-center p-5 mb-5'>
                   <li className='item col-xs-12 col-md-6 ' >
                   <div className='circle mb-4'>
                        <FontAwesomeIcon icon={faAddressCard} className='icons'></FontAwesomeIcon>
                    </div>
                    <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">Contract de sponsorizare ATIPIC</h6>
                        
                        <button className='btn btn-outline-primary'><a href="https://centrulatipic.ro/contract_de_sponsorizare_ATIPIC_nou.doc" class="" alt="redirectare_3.5_impozit_catre_atipic" title="redirectare_3.5_impozit_catre_atipic">Contactează-ne<i></i></a></button>
                    </li> 

                    <li className='item col-xs-12 col-sm-12 col-md-6'>
                        <div className='circle mb-4'>
                            <FontAwesomeIcon icon={faAddressCard} className='icons'></FontAwesomeIcon>
                        </div>
                        <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">Contract de sponsorizare bunuri si servicii</h6>
                        
                        <button className='btn btn-outline-primary'><a download="" href="https://centrulatipic.ro/contract_de_sponsorizare_ATIPIC_nou.doc" title="contract_donatie_impozit_pe_profit_ATIPIC">Descarcă formular<i></i></a></button>
                    </li>
               
            </ul>
        </div>
        </div>
    )
}

export default DonatePage
 