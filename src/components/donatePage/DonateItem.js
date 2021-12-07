import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function DonateItem(props) {
    return (
        <li className={`item ${props.grid} mb-5`} >
            <div className='circle mb-4'>
                <FontAwesomeIcon icon={props.icon} className='icons'></FontAwesomeIcon>
            </div>
            <h6 style={{letterSpacing: '1px'}} class="font-bold mb-4">{props.title}</h6>
            <div class="donate-info mb-4">
                {props.description}
            </div>
            <button className='btn btn-outline-primary'><a href={props.btnHref} class="" alt={props.btnAlt} title={props.btnTitle}>{props.buttonTxt}<i></i></a></button>
        </li> 
    )
}

export default DonateItem
