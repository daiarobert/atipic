import React from 'react';

const EventsItem = (props) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 wrapper p-3">
            <div class="header d-flex justify-content-center align-items-center p-5">
                <span class="fz-small ">Ianuarie 2020 - Martie 2020</span>
            </div>
            <h5 class="template-component-pricing-plan-header p-3">
                Grup socializare pentru copii cu TSA Ianuarie 2020
            </h5>

            <div class="template-component-pricing-plan-description ">
                Mulți copii și adulți cu tulburarea de spectru autist (TSA) au nevoie de ajutor pentru a învăța cum să
                acționeze în diferite tipuri de situații sociale. Adesea, copiii cu autism au dorinț...
            </div>

            {/* <div class="template-component-pricing-plan-description p-3">
                <button className="btn btn-outline-primary">
                    <a class="btn-border-orange" href="/">
                        Citește mai mult
                    </a>
                </button>
            </div> */}
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                >
                    {props.btnName}
                </button>

                <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    {props.modalTitle}
                                </h5>
                                <button
                                    type="button"
                                    className="modal__close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">{props.modalBody}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsItem;
