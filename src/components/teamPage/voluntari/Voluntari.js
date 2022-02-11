import React, { useState, useEffect } from 'react';
import './voluntari.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';

function Voluntari() {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        const getVolunteers = async () => {
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/users/client`);
            setVolunteers(res.data);
            console.log(res.data);
        };
        getVolunteers();
    }, []);

    return (
        <div className="wrapper-members row">
            <div class="h1-heading text-center  pt-5 pb-5">Volunteer</div>
            <div className="container-members row d-flex  align-items-center">
                {volunteers.map((user) =>
                    user.role === 'Volunteer' ? (
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

export default Voluntari;
