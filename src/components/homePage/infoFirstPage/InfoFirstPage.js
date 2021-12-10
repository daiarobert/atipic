import React from 'react';
import InfoFirstPageItem from './InfoFirstPageItem';
import './infoFirstPage.scss';
import {faBaby, faChess, faSmileBeam, faCubes, faUsers} from '@fortawesome/free-solid-svg-icons'



const InfoFirstPage = () => {



    return(
        <div className='wrapper'>
                
            <div className='row p-3'>
                <InfoFirstPageItem 
                    icon={faCubes} 
                    btnName='Citește mai mult' 
                    title='Ce este terapia ABA?' 
                    description='Terapia ABA este o metodă de terapie bazată pe principiile învățării și ale terapiei comportamentale.'
                    modalTitle='Ce este terapia ABA?'
                    modalBody={
                    <div class="modal__content">
                        <p>Terapia ABA este o metodă de terapie bazată pe principiile învățării și ale terapiei
                            comportamentale care ne ajută să înțelegem: 
                        </p>
                        <div class="list-checked">
                            <ul>
                                <li> Cum funcționează comportamentul</li>
                                <li> Cum mediul înconjurător influențează comportamentul</li>
                                <li> Cum are loc procesul de învățare</li>
                            </ul>
                        </div>
                        <p><strong>Obiectivele terapiei ABA sunt:</strong></p>
                        <div class="list-checked">
                            <ul>
                                <li> Dezvoltarea limbajului (comunicare, abilități sociale, scris, citit)</li>
                                <li> Autoîngriire (hrănire, îmbrăcare, igiena personală, manipulare obiecte, activități
                                    casnice)
                                </li>
                                <li> Reducerea comportamentelor nedorite (autostimulări, stereotipii, non-complianță,
                                    agresivitate)
                                </li>
                                <li> Întărirea și introducerea comportamentelor dezirabile</li>
                            </ul>
                        </div>
                    </div>
                }
                />
                  
                
                <InfoFirstPageItem 
                    icon={faChess} 
                    btnName='Citește mai mult' 
                    title='Terapia ocupațională - învățăm jucându-ne' 
                    description='Deoarece lucrăm cu princhindei, știm cât de important este să le captăm atenția prin metode cât mai interactive și dinamice, așa că folosim tehnici de terapie jucându-ne.'
                    modalTitle='Terapia ocupațională - învățăm jucându-ne'
                    modalBody={<div class="modal__content">
                    <p>Deoarece lucrăm cu princhindei, știm cât de important este să le captăm atenția prin metode cât
                        mai interactive și dinamice, așa că folosim tehnici de terapie jucându-ne.</p>
                    <p>Terapia ocupațională este o metodă ce ajută la dezvoltarea capacităților cognitive, sociale,
                        fizice și motorii cu scopul de a dezvolta abilități zilnice ce potențează independența și
                        participarea în cat mai multe activități.
                    </p>
                    <p><strong>Activitățile ocupaționale cuprind:</strong>
                    </p>
                    <div class="list-checked">
                        <ul>
                            <li>Autoîngrijirea: hrănire, igiena personală, îmbrăcat, pieptănat, mobilitate și transfer,
                                manipulare de obiecte
                            </li>
                            <li>Activități lucrative</li>
                            <li>Activități educationale</li>
                            <li>Activități recreative: jocuri, sporturi, hobby</li>
                        </ul>
                    </div>

                </div>}
                />
                
                
                <InfoFirstPageItem 
                    icon={faSmileBeam} 
                    btnName='Citește mai mult' 
                    title='Art terapia sau terapia prin artă' 
                    description='Art terapia este o metodă de abordare terapeutică în cadrul unui program complex de intervenție, bazată pe limbaj vizual și creativitate.'
                    modalTitle='Art terapia sau terapia prin artă'
                    modalBody={<div class="modal__content">
                    <p>Art-terapia este o metodă de abordare terapeutică în cadrul unui program complex de intervenție,
                        bazată pe limbaj vizual și creativitate. Urmând și completând alte metode terapeutice, art
                        terapia dezvoltă și îmbunătățește starea emoțională a pacientului, îmbunătățește anumite
                        abilități motrice și cognitve.</p>
                    <p>Folosim ca tehnici de lucru: pictura, desen, modelaj, colaj, recitare, muzica, dans.</p>
                    <p><strong>Obiectivele art terapiei sunt:</strong></p>
                    <div class="list-checked">
                        <ul>
                            <li>Integrarea și reglarea senzorială</li>
                            <li>Redarea emoțiilor și exprimarea de sine</li>
                            <li>Rezolvarea deficientelor motorii și abilități grafice</li>
                            <li>Pauze productive</li>
                            <li>Coordonare mână-ochi</li>
                            <li>Diminuarea anxietății</li>
                            <li>Dezvoltarea capacităților cognitive și a atenției</li>
                        </ul>
                    </div>
                </div>}
                />
                
                
                <InfoFirstPageItem 
                    icon={faBaby} 
                    btnName='Citește mai mult' 
                    title='Terapia axată pe comportamentale verbale (VB)' 
                    description='Terapia VB încurajează învățarea limbajului și a comunicării conectând cuvintele cu semnificația lor, învățând astfel că folosind anumite cuvinte putem obține ce ne dorim.'
                    modalTitle='Terapia axată pe comportamentale verbale (VB)'
                    modalBody={<div class="modal__content text-start">
                    <div>
                        <p>Terapia VB încurajează învățarea limbajului și a comunicării conectând cuvintele cu
                            semnificația lor, învățând astfel că folosind anumite cuvinte putem obține ce ne dorim. VB
                            nu folosește cuvintele ca etichete ci mai degrabă explică de ce folosim aceste cuvinte și
                            cum sunt ele utile în a face cereri sau a comunica idei.</p>
                        <p>VB este o terapie bazată pe principiile Analizei Comportamentale Aplicate (ABA) și teoriile
                            comportamentalistului B. F. Skinner. Acesta a clasificat limbajul în 4 categorii numite
                            “operanți” fiecare având o altă funcție:
                        </p>
                    </div>

                    <div class="list-checked">
                        <ul>
                            <li>“Mand”: Formarea unei cereri</li>
                            <li>Tact: Stimularea răspunsului cu ajutorul unui comentariu sau un stimul vizual</li>
                            <li>Intraverbal: Un cuvânt folosit pentru a reacționa sau a răspunde la o întrebare</li>
                            <li>Echoic: Repetarea sau imitația cuvintelor ajută la învățarea lor</li>
                        </ul>
                    </div>
                </div>}
                />

                <InfoFirstPageItem 
                    icon={faUsers} 
                    iconClass='icon-blue' 
                    circleClass='circle-blue'  
                    title='Dezvoltarea personală și psihoterapia – sunt procese adresate oricărei persoane aflate pe drumul autocunoașterii sau optimizării personale, profesionale, relaționale sau persoanelor aflate în impas, ce doresc combaterea unei tulburări emoționale, comportamentale, alimentare, psihosomatice, etc.'
                    
                />
                
                
                
            </div>
           
        </div>
       
    )
}

 
export default InfoFirstPage