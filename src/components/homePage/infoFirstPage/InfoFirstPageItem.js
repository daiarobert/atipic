import React from 'react';
//import InfoFirstPage from './InfoFirstPage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const InfoFirstPageItem = (props) => {


    return (
        
            <div className=' info col-xs-12  col-sm-12 col-md-4 text-center justify-content-center'>
                <div className={`circle mb-4 ${props.circleClass}`}>
                <FontAwesomeIcon icon={props.icon} className={`icons ${props.iconClass}`}></FontAwesomeIcon>
            </div>
                {/* <FontAwesomeIcon icon={faCircle} className='icons'></FontAwesomeIcon> */}
                            
                <h5 className='m-4' style={{maxWidth:'100%', height:'50px'}}>{props.title}</h5>
                <p className='description' style={{maxWidth:'100%', height:'100px'}}>{props.description}</p>
                {props.btnName ? <button type='button' class="btn btn-outline-primary btn-read-more d-flex w-100 justify-content-center" href="/">{props.btnName}</button> : ''}
                
                
                
            </div>
    )
}


export default InfoFirstPageItem