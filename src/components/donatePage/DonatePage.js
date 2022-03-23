import React from 'react';
import './donatePage.scss';
import DonateItem from './DonateItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeSlash, faHandHoldingUsd, faFileDownload, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function DonatePage() {
    return (
        <div className=" col">
            <Navbar />
            <div className="wrapper-donate">
                <h1 className="text-white text-center p-5 col-12" style={{ fontSize: '60px' }}>
                    Get involved with us!
                </h1>
                <ul className="d-flex row justify-content-start text-center p-5 w-100">
                    <DonateItem
                        icon={faHandshakeSlash}
                        title="VOLUNTEERING"
                        description="If you love children and want to be actively involved in the future of some special little ones, we invite you to contact us and we offer you the opportunity to learn and apply, in an organized and professional environment, work programs and games for children with autism and other developmental disorders, in a happy and friendly environment. "
                        btnHref="mailto: contact@centrulatipic.ro"
                        btnAlt="redirect_3.5_tax_to_atypical_"
                        buttonTxt="Contact us"
                        grid="col-xs-12 col-md-4"
                    />
                    <DonateItem
                        icon={faHandHoldingUsd}
                        title="DONATE"
                        description={`IBAN RO39BACX0000001587515001`}
                        btnHref=""
                        btnAlt="ATYPIC_Profit_Prop_ Donation_Contract"
                        buttonTxt="Download form"
                        grid="col-xs-12 col-md-4"
                    />

                    <li className="item col-xs-12 col-sm-12 col-md-4">
                        <div className="circle mb-4">
                            <FontAwesomeIcon icon={faFileDownload} className="icons"></FontAwesomeIcon>
                        </div>
                        <h6 style={{ letterSpacing: '1px' }} class="font-bold mb-4">
                            REDIRECT 3.5%
                        </h6>

                        <div class="donate-info mb-4">
                            For more than 4 years we have been supporting children with ASD, Asperger's Syndrome, and
                            Virtual Autism other neuropsychological disorders, with complex ABA therapy and
                            psychotherapy programs, in all the steps necessary for their recovery and development. Any
                            contribution is important and thank you if you chose to get involved!
                        </div>
                        <button className="btn btn-outline-primary mb-2">
                            <a
                                download=""
                                href="/donate"
                                class="template-component-button template-component-button-style-2 template-section-white"
                                alt="redirect_3.5_tax_to_atypical_"
                                title="redirect_3.5_tax_to_atypical_"
                            >
                                Download form <i> </i>
                            </a>
                        </button>
                        <button className="btn btn-outline-primary">
                            <a
                                href="/donate"
                                class="template-component-button template-component-button-style-2 template-section-white"
                                alt="fill in form 230-"
                                title="fill out form 230"
                            >
                                Fill out the <i> </i> form
                            </a>
                        </button>
                    </li>
                </ul>
                <h2 className="text-white text-center p-5 col-12" style={{ fontSize: '60px' }}>
                    Or become a sponsor!
                </h2>
                <ul className="d-flex row justify-content-start text-center p-5 mb-5 w-100">
                    <DonateItem
                        icon={faAddressCard}
                        title="ATIPIC Sponsorship Agreement"
                        btnHref=""
                        btnAlt="redirect_3.5_tax_to_atypical_"
                        buttonTxt="Contact us"
                        grid="col-xs-12 col-md-6"
                    />
                    <DonateItem
                        icon={faAddressCard}
                        title="Goods and Services Sponsorship Agreement"
                        btnHref=""
                        buttonTxt="Download form"
                        grid="col-xs-12 col-md-6"
                    />
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default DonatePage;
