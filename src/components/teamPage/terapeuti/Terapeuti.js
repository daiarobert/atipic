import React, { useState, useEffect } from 'react';
import './terapeuti.scss';
import TeamItem from '../TeamItem';
import Axios from 'axios';

function Terapeuti() {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const getMembers = async () => {
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/users/client`);
            setMembers(res.data);
            console.log(res.data);
        };
        getMembers();
    }, []);

    return (
        <div className="wrapper-members row">
            <div class="h1-heading text-center  pt-5 pb-5">Therapists</div>
            <div className="container-members row d-flex  align-items-center">
                {members.map((user) =>
                    user.role === 'Therapists' ? (
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

export default Terapeuti;
