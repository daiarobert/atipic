import React, {useState,useEffect} from 'react';
import './terapeuti.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';



function Terapeuti() {

    const [members, setMembers] = useState([])
    useEffect(() => {
        const getMembers = async () =>{
            const res = await Axios.get(`/.netlify/functions/getMembers`);
            setMembers(res.data)
            console.log(res.data);
        }
        getMembers();
    },[])




    return (

        <div className='wrapper-members row'>
           <div class='h1-heading text-center  pt-5 pb-5'>Administrativ</div>
            <div className='container-members row d-flex  align-items-center'>
            {members.map(member => (
               <TeamItem userImg={member.picture} name={member.name} description={member.description}/> 
        ))}

                
           </div>
            
        </div>
    )
}

export default Terapeuti
