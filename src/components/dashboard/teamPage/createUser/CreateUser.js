import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';
import Axios from 'axios';

const Create = () => {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [address, setAddress] = useState();
    const [telephone, setTelephone] = useState();

    const [filename, setFilename] = useState();

    const createUser = async () => {
        try {
            const res = await Axios.post(
                `https://atipic.herokuapp.com/api/v1/auth/register`,

                {
                    firstName,
                    lastName,
                    email,
                    role,
                    address,
                    telephone,
                    filename,
                },
            );

            history.push('/dashboard/users');
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    };

    return (
        <div className="create row g-0">
            <SideNav />
            <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                onChangeImg={(e) => setFilename(e.target.value)}
                                onChangeFirstName={(e) => setFirstName(e.target.value)}
                                onChangeLastName={(e) => setLastName(e.target.value)}
                                onChangeEmail={(e) => setEmail(e.target.value)}
                                onChangeRole={(e) => setRole(e.target.value)}
                                onChangeAddress={(e) => setAddress(e.target.value)}
                                onChangeTelephone={(e) => setTelephone(e.target.value)}
                                btnTitle={'Create'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Create;
