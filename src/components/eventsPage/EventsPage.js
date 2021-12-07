import React from 'react';
import Title from '../title/Title';
import EventsItem from './EventsItem';
import './events.scss';

function EventsPage() {
    return (
        <div className=''>
            <div className='col-12 mb-5'>
                <Title title='Evenimente' />
            </div>
            <div className=' services-wrapper'>
            
            <ul className='d-flex row justify-content-start text-center w-100'>
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                <EventsItem />
                
                {/* <li class=" col-4 w-100 inactiv text-center" >
                    <div class="template-component-pricing-plan-price ">
                    <span class="fz-small">Ianuarie 2020 - Martie 2020</span>
                    </div>
                    <h5 class="template-component-pricing-plan-header">
                        Grup socializare pentru copii cu TSA Ianuarie 2020
                    </h5>

                    <div class="template-component-pricing-plan-description">
                        Mulți copii și adulți cu tulburarea de spectru autist (TSA) au nevoie de ajutor pentru a învăța cum să acționeze în diferite tipuri de situații sociale.
                        Adesea, copiii cu autism au dorinț...
                    </div>

                    <div class="template-component-pricing-plan-description">
                        <a class="btn-border-orange" href="https://centrulatipic.ro/evenimente/grup-socializare-pentru-copii-cu-tsa-ianuarie-2020">Citește
                            mai mult</a>
                    </div>
                </li>
                <li class=" col-4 w-100 inactiv text-center" >
                    <div class="template-component-pricing-plan-price ">
                    <span class="fz-small">Ianuarie 2020 - Martie 2020</span>
                    </div>
                    <h5 class="template-component-pricing-plan-header">
                        Grup socializare pentru copii cu TSA Ianuarie 2020
                    </h5>

                    <div class="template-component-pricing-plan-description">
                        Mulți copii și adulți cu tulburarea de spectru autist (TSA) au nevoie de ajutor pentru a învăța cum să acționeze în diferite tipuri de situații sociale.
                        Adesea, copiii cu autism au dorinț...
                    </div>

                    <div class="template-component-pricing-plan-description">
                        <a class="btn-border-orange" href="https://centrulatipic.ro/evenimente/grup-socializare-pentru-copii-cu-tsa-ianuarie-2020">Citește
                            mai mult</a>
                    </div>
                </li> */}
                </ul>
            
        </div>
        </div>
    )
}

export default EventsPage
