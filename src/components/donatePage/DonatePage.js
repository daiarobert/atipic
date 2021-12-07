import React from 'react';
import './donatePage.scss';
import DonateItem from './DonateItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandshakeSlash, faHandHoldingUsd, faFileDownload, faAddressCard} from '@fortawesome/free-solid-svg-icons'


function DonatePage() {
    return (
        <div className='wrapper-donate col'>
            <h1 className='text-white text-center p-5 col-12' style={{fontSize:'60px'}}>Implica-te impreuna cu noi !</h1>
            <ul className='d-flex row justify-content-start text-center p-5 w-100'>
                <DonateItem 
                icon={faHandshakeSlash} 
                title='VOLUNTARIAT' 
                description='Dacă iubești copiii și vrei sa te implici activ în viitorul unor micuți speciali, te invităm să ne contactezi și noi îți oferim oportunitatea de a învăța și aplica, într-un mediu organizat și profesionalist, programe de lucru și jocuri pentru copii cu autism și alte tulburări de dezvoltare, într-un mediu vesel și prietenos.'
                btnHref='mailto:contact@centrulatipic.ro'
                btnAlt='redirectare_3.5_impozit_catre_atipic'
                buttonTxt='Contactează-ne'
                grid='col-xs-12 col-md-4'
                />
                <DonateItem 
                icon={faHandHoldingUsd} 
                title='DONEAZĂ' 
                description={ `IBAN ${<strong>RO39BACX0000001587515001</strong>}`}
                btnHref='https://centrulatipic.ro/contract_donatie_impozit_pe_profit_ATIPIC.docx'
                btnAlt='contract_donatie_impozit_pe_profit_ATIPIC'
                buttonTxt='Descarcă formular'
                grid='col-xs-12 col-md-4'
                />
                {/* <DonateItem 
                icon={faFileDownload} 
                title='REDIRECȚIONEAZĂ 3,5%' 
                description='De mai bine de 4 ani venim în sprijinul copiilor cu TSA, sindrom asperger, autism virtual și alte tulburări neuropsihologice, cu programe complexe de terapie ABA și psihoterapie, în toate etapele necesare recuperării și dezvoltării acestora.
                Orice contribuție este importantă și îți mulțumim dacă ai ales să te implici!'
                btnHref='https://centrulatipic.ro/Declaratia_230_Atipic_2020.pdf'
                btnAlt='redirectare_3.5_impozit_catre_atipic'
                /> */}

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
            <ul className='d-flex row justify-content-start text-center p-5 mb-5 w-100'>

                <DonateItem 
                    icon={faAddressCard} 
                    title='Contract de sponsorizare ATIPIC' 
                    btnHref='https://centrulatipic.ro/contract_de_sponsorizare_ATIPIC_nou.doc'
                    btnAlt='redirectare_3.5_impozit_catre_atipic'
                    buttonTxt='Contactează-ne'
                    grid='col-xs-12 col-md-6'
                />
                <DonateItem 
                    icon={faAddressCard} 
                    title='Contract de sponsorizare bunuri si servicii' 
                    btnHref='https://centrulatipic.ro/contract_de_sponsorizare_ATIPIC_nou.doc'
                    buttonTxt='Descarcă formular'
                    grid='col-xs-12 col-md-6'
                />

            </ul>
        </div>
    )
}

export default DonatePage
 