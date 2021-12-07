import React from 'react';
import InfoFirstPageItem from './InfoFirstPageItem';
import './infoFirstPage.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBaby, faChess, faSmileBeam, faTree, faCubes, faUsers} from '@fortawesome/free-solid-svg-icons'



const InfoFirstPage = () => {



    return(
        <div className='wrapper'>
                
            <div className='row p-3'>
                <InfoFirstPageItem icon={faCubes} btnName='Citește mai mult' title='Ce este terapia ABA?' description='Terapia ABA este o metodă de terapie bazată pe principiile învățării și ale terapiei comportamentale.'/>
                  
                
                <InfoFirstPageItem icon={faChess} btnName='Citește mai mult' title='Terapia ocupațională - învățăm jucându-ne' description='Deoarece lucrăm cu princhindei, știm cât de important este să le captăm atenția prin metode cât mai interactive și dinamice, așa că folosim tehnici de terapie jucându-ne.'/>
                
                
                <InfoFirstPageItem icon={faSmileBeam} btnName='Citește mai mult' title='Art terapia sau terapia prin artă' description='Art terapia este o metodă de abordare terapeutică în cadrul unui program complex de intervenție, bazată pe limbaj vizual și creativitate.'/>
                
                
                <InfoFirstPageItem icon={faBaby} btnName='Citește mai mult' title='Terapia axată pe comportamentale verbale (VB)' description='Terapia VB încurajează învățarea limbajului și a comunicării conectând cuvintele cu semnificația lor, învățând astfel că folosind anumite cuvinte putem obține ce ne dorim.'/>

                <InfoFirstPageItem icon={faUsers} iconClass='icon-blue' circleClass='circle-blue'  title='Dezvoltarea personală și psihoterapia – sunt procese adresate oricărei persoane aflate pe drumul autocunoașterii sau optimizării personale, profesionale, relaționale sau persoanelor aflate în impas, ce doresc combaterea unei tulburări emoționale, comportamentale, alimentare, psihosomatice, etc.'/>
                
                
                
            </div>
           
        </div>
       
    )
}

 
export default InfoFirstPage