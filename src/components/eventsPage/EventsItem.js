import React from 'react';

function EventsItem() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 wrapper p-3">
            <div class="header d-flex justify-content-center align-items-center p-5">
                <span class="fz-small ">Ianuarie 2020 - Martie 2020</span>
            </div>
            <h5 class="template-component-pricing-plan-header p-3">
                Grup socializare pentru copii cu TSA Ianuarie 2020
            </h5>

            <div class="template-component-pricing-plan-description">
                Mulți copii și adulți cu tulburarea de spectru autist (TSA) au nevoie de ajutor pentru a învăța cum să
                acționeze în diferite tipuri de situații sociale. Adesea, copiii cu autism au dorinț...
            </div>

            <div class="template-component-pricing-plan-description p-3">
                <button className="btn btn-outline-primary">
                    <a class="btn-border-orange" href="/">
                        Citește mai mult
                    </a>
                </button>
            </div>
        </div>
    );
}

export default EventsItem;
