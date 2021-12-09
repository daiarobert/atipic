import React, {useState,useEffect} from 'react';
import './voluntari.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';



function Voluntari() {

    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        const getVolunteers = async () =>{
            const res = await Axios.get(`/.netlify/functions/getVolunteers`);
            setVolunteers(res.data)
            console.log(res.data);
        }
        getVolunteers();
    },[])




    return (

        <div className='wrapper-members row'>
           <div class='h1-heading text-center  pt-5 pb-5'>Voluntari</div>
            <div className='container-members row d-flex  align-items-center'>
            {volunteers.map(volunteer => (
               <TeamItem userImg={volunteer.picture} name={volunteer.name} description={volunteer.description}/> 
        ))}

                
           </div>
            
        </div>
    )
}

export default Voluntari
