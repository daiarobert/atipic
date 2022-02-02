import React, { useState, useEffect } from 'react';
import './members.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';

function Administrativ() {
    const [users, setUsers] = useState([]);
    const [test, setTest] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/users/client`);
            setUsers(res.data);
            console.log(res.data);
        };
        getUsers();
    }, []);

    return (
        <div className="wrapper-members row">
            <div class="h1-heading text-center">Coordonatori</div>
            <div className="container-members row">
                {users.map((user) =>
                    user.role === 'Coordinator' ? (
                        <TeamItem
                            userImg={user.picture}
                            name={`${user.firstName} ${user.lastName}`}
                            description={user.role}
                            // description={user.description}
                        />
                    ) : (
                        ''
                    ),
                )}
            </div>
        </div>
    );
}

export default Administrativ;
