import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';
import Axios from 'axios';

const Create = () => {
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [role, setRole] = useState();
    const [address, setAddress] = useState();
    const [telephone, setTelephone] = useState();

    const [img, setImg] = useState();
    console.log(isAdmin);
    const createUser = async () => {
        try {
            const res = await Axios.post(
                `http://localhost:5000/api/v1/auth/register`,

                {
                    username,
                    firstName,
                    lastName,
                    email,
                    role,
                    address,
                    telephone,
                    img,
                    isAdmin,
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
                    <div className="col-8">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                onChangeImg={(e) => setImg(e.target.value)}
                                onChangeFirstName={(e) => setFirstName(e.target.value)}
                                onChangeLastName={(e) => setLastName(e.target.value)}
                                onChangeEmail={(e) => setEmail(e.target.value)}
                                onChangeEmail={(e) => setUsername(e.target.value)}
                                onChangeRole={(e) => setRole(e.target.value)}
                                onChangeAddress={(e) => setAddress(e.target.value)}
                                onChangeTelephone={(e) => setTelephone(e.target.value)}
                                onChangeIsAdmin={(e) => setIsAdmin(e.target.value)}
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
