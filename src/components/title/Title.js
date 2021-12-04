import React from 'react';
import './title.scss';

function title({title}) {
    return (
        <div className='row contact p-5 w-100 m-0'>
        <div className='contact-text col'>
            <div class="col d-flex justify-content-center">
                <h1>{title}</h1>
            </div>
            
        </div>
    </div>
    )
}

export default title
