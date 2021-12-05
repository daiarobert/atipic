import React from 'react';
import './administrativ.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'


function Administrativ() {
    return (
        <div className='wrapper-members row'>
           <div class='h1-heading text-center  pt-5 pb-5'>Administrativ</div>
            <div className='container-members row d-flex justify-content-center align-items-center'>
                <div className='col-xs-12  col-lg-4 member-info text-center'>
                    <FontAwesomeIcon icon={faCircleNotch} className='icons'></FontAwesomeIcon>
                    <h6 className=''>Numele Meu</h6>
                    <div className='text-muted'>Coordonare ABA, Psihologie clinică, Consiliere psihologică și comunicare</div>
                </div>
                <div className='col-xs-12  col-lg-4 member-info text-center'>
                    <FontAwesomeIcon icon={faCircleNotch} className='icons'></FontAwesomeIcon>
                    <h6 className=''>Numele Meu</h6>
                    <div className='text-muted'>Coordonare ABA, Psihologie clinică, Consiliere psihologică și comunicare</div>
                </div>
                <div className='col-xs-12  col-lg-4 member-info text-center'>
                    <FontAwesomeIcon icon={faCircleNotch} className='icons'></FontAwesomeIcon>
                    <h6 className=''>Numele Meu</h6>
                    <div className='text-muted'>Coordonare ABA, Psihologie clinică, Consiliere psihologică și comunicare</div>
                </div>
           </div>
            
        </div>
    )
}

export default Administrativ
