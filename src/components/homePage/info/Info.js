import React from 'react'
import './info.scss';

function Info() {
    return (
        <div className='row contact p-5 w-100 m-0'>
        <div className='contact-text row text-center'>
                <h1 className="col-xs-6 col-md-10 d-flex justify-content-start">
                    Cum îți poți înscrie copilul la noi?</h1>
          
                <button type="button" class="btn btn-outline-light col-xs-6 col-md-2 d-flex justify-content-center">
                    AFLĂ ACUM
                </button>
            {/* <div class="col-xs-6 col-md-8 d-flex justify-content-center">
                <h1>Cum îți poți înscrie copilul la noi?</h1>
            </div>
            <div class="col-xs-6 col-md-4 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-light">
                    AFLĂ ACUM
                </button>
            </div> */}
        </div>
    </div>
    )
}

export default Info
