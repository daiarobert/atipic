import React from 'react';
import ImgServicesChildren from './servicii-copii-1.png';
import ImgServicesAdults from './servicii-adulti.png';
import './services.scss';
import Title from '../title/Title';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function ServicesPage() {
    return (
        <div className="col">
            <Navbar />
            <div className="col-12 mb-5">
                <Title title="Services" />
            </div>
            <div className="row d-flex services-wrapper">
                <div className="col-xs-12 col-md-6 mb-5">
                    <img src={ImgServicesChildren} alt="servicii copii" style={{ maxWidth: '100%' }}></img>
                    <h3> Child Services </h3>
                    <h5 className="text-muted mt-4"> Therapy and recovery: </h5>
                    <li> Delay in language development </li>
                    <li> Pervasive developmental disorders </li>
                    <li> Autism Spectrum Disorders (ASD) </li>
                    <li> Behavioral disorders </li>
                    <li> Asperger's Syndrome </li>
                    <li> Down Syndrome </li>
                    <li> ADHD </li>
                    <br />
                    <br />
                    <br />
                    <li> Speech Therapy </li>
                    <li> ABA Therapy </li>
                    <li> Son Rise Therapy </li>
                    <li> Personal development </li>
                    <li> Psychological counseling </li>
                    <li> Individual psychotherapy </li>
                    <li> Cognitive-behavioral psychotherapy </li>
                </div>
                <div className="col-xs-12 col-md-6">
                    <img src={ImgServicesAdults} alt="servicii adulti" style={{ maxWidth: '100%' }}></img>
                    <h3 className="mb-4"> Adult Services </h3>
                    <li> Personal development </li>
                    <li> Psychological counseling, health education </li>
                    <li> Individual, couple and group psychotherapy programs </li>
                    <li> Primary clinical psychological intervention for any diagnosis </li>
                    <li> Courses, workshops and seminars on current psychological topics </li>
                    <li> Supportive therapy in managing negative emotions, anxiety and specific phobias </li>
                    <li> Assessment and intervention, specific to infertile couples in assisted human reproduction </li>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ServicesPage;
