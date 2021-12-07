import React from 'react';
import './partners.scss';
import Logo1 from './logos/jobsora-logo.jpg'
import Logo2 from './logos/mic-pitic-transparent.png'
import Logo3 from './logos/cryptocube-logo.png'
import Logo4 from './logos/ssmb.svg'
import Logo5 from './logos/cora-logo.svg'
import Logo6 from './logos/logo-mycool.svg'

function Partners() {
    return (
        <div className='wrapper-partners row'>
            <h2 className='d-flex justify-content-center mt-5'>Parteneri și sponsori</h2>
            <h4 className='text-muted text-center d-flex justify-content-center'>Împreună construim o lume pentru toți</h4>
                <div className='wrapp row '>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                        <img src={Logo1} alt=''/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <img src={Logo2} alt=''/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <img src={Logo3} alt='' id='crypto'/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <img src={Logo4} alt=''/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <img src={Logo5} alt=''/>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-4 d-flex justify-content-center'>
                    <img src={Logo6} alt=''/>
                    </div>
                </div>
        </div>
        // <div className='wrapper-partners row '>
        //     <div class=" d-flex justify-content-center wrapp">
        //         <h2 className=''>Parteneri și sponsori</h2>
        //         <div className='col-3'>
        //     <h5>Adresă</h5>
        //             <p><strong>Strada Dristorului, nr. 63</strong></p>
        //             <p><strong>Strada Cezar Bolliac, nr. 72</strong></p>
        //             <br/>
        //             <p>Mijloace de transport: <br/> Metrou: Dristor/Piata Muncii <br/> Autobuze: 330, 311, 135, 104
        //                 <br/>  Troleibuze 79, 70 <br/> Tramvaiul 1,10</p>

        //     <br/>
        //     </div>
        //     </div>
        // </div>
    )
}

export default Partners
