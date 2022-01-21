import React from 'react';
import './contact.scss';
import Title from '../title/Title';
import Map from './Map';
import ContactItem from './ContactItem';
import { faMapPin, faMobileAlt, faEnvelope, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function ContactPage() {
    return (
        <div className="col">
            <Navbar />
            <div className="col-12 mb-5">
                <Title title="Contact" />
            </div>

            <div className="row contact-wrapper mb-5 w-100">
                <ContactItem
                    icon={faMapPin}
                    title="Adresă"
                    paragraph1="Strada Dristorului, nr. 63"
                    paragraph2="Strada Cezar Bolliac, nr. 72"
                />

                <ContactItem
                    icon={faMobileAlt}
                    title="Telefon"
                    paragraph1={
                        <a href="tel:+40744318398">
                            <i class="fa fa-phone"></i>
                            0744 318 398
                        </a>
                    }
                />

                <ContactItem
                    icon={faEnvelope}
                    title="Email"
                    paragraph1={
                        <a href="mailto:contact@centrulatipic.ro">
                            <i class="fas fa-envelope"></i> contact@centrulatipic.ro
                        </a>
                    }
                />

                <ContactItem
                    icon={faBusinessTime}
                    title="Program"
                    paragraph1={
                        <p>
                            Luni – Vineri
                            <br />
                            10:00 – 19:00
                        </p>
                    }
                />
            </div>
            <Map />
            <Footer />
        </div>
    );
}

export default ContactPage;
