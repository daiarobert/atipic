import React from 'react';
//import Axios from 'axios';
import Title from './title/Title';
import Members from './members/Members';
import Terapeuti from './terapeuti/Terapeuti';
import Voluntari from './voluntari/Voluntari';
import Administrativ from './administrativ/Administrativ';

function TeamPage() {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     const getUsers = async () =>{
    //         const res = await Axios.get('https://randomuser.me/api/');

    //         setUsers(res.data.results)
    //         console.log(res.data.results);
    //     }
    //     getUsers();
    // },[])
    return (
        <div className='col'>
            <Title />
            <Members />
            <Terapeuti />
            <Voluntari />
            <Administrativ />
        </div>
    )
}

export default TeamPage
