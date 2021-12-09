import React, {useState,useEffect} from 'react';
import './administrativ.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';



function Administrativ() {

    const [staff, setStaff] = useState([])
    useEffect(() => {
        const getStaff = async () =>{
            const res = await Axios.get(`/.netlify/functions/getStaffMembers`);
            setStaff(res.data)
            console.log(res.data);
        }
        getStaff();
    },[])




    return (

        <div className='wrapper-members row'>
           <div class='h1-heading text-center  pt-5 pb-5'>Administrativ</div>
            <div className='container-members row d-flex  align-items-center'>
            {staff.map(staff => (
               <TeamItem userImg={staff.picture} name={staff.name} description={staff.description}/> 
        ))}

                
           </div>
            
        </div>
    )
}

export default Administrativ
