import React, {useState,useEffect} from 'react';
import './members.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';



function Administrativ() {

    const [users, setUsers] = useState([])
    const [test, setTest] = useState([])

    
    useEffect(() => {
        const getTest = async () =>  {
            const res = await Axios.get('localhost:5000/users')
            setTest = (res.data);
            console.log(res.data);
        }
        const getUsers = async () =>{
            const res = await Axios.get(`/.netlify/functions/getUsers`);
            setUsers(res.data)
            console.log(res.data);
        }
        getUsers();
        getTest()
    },[])




    return (

        <div className='wrapper-members row'>
           <div class='h1-heading text-center'>Coordonatori</div>
            <div className='container-members row'>
            {users.map(user => (
               <TeamItem userImg={user.picture} name={user.name} description={user.description}/> 
        ))}

                
           </div>
            
        </div>
    )
}

export default Administrativ
