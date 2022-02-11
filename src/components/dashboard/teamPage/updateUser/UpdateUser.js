import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';
import Axios from 'axios';
import { getToken } from '../../../../utils/Common';
import { useParams } from 'react-router-dom';
import './update.scss';

const Update = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [isAdmin, setIsAdmin] = useState();
    const [role, setRole] = useState();
    const [address, setAddress] = useState();
    const [telephone, setTelephone] = useState();
    const [image, setImage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        address: '',
        telephone: '',
    });
    const { id } = useParams();
    const token = getToken();
    const headers = {
        token: `Bearer ${token}`,
    };

    useEffect(async () => {
        try {
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/users/find/${id}`, {
                headers: { token: `Bearer ${token}` },
            });
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const updateUser = async () => {
        console.log(`Bearer ${token}`);
        try {
            const res = await Axios.put(
                `http://localhost:5000/api/v1/users/${id}`,

                {
                    firstName,
                    lastName,
                    email,
                    isAdmin,
                    role,
                    address,
                    telephone,
                },

                { headers },
            );

            history.push('/dashboard/users');
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser();
    };

    return (
        <div className="update row d-flex g-0">
            <SideNav />
            <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                onChangeImg={(e) => setImage(e.target.value)}
                                defaultValueUsername={user.username}
                                defaultValueFirstName={user.firstName}
                                onChangeFirstName={(e) => setFirstName(e.target.value)}
                                defaultValueLastName={user.lastName}
                                onChangeLastName={(e) => setLastName(e.target.value)}
                                defaultValueEmail={user.email}
                                onChangeEmail={(e) => setEmail(e.target.value)}
                                defaultValueRole={user.role}
                                onChangeRole={(e) => setRole(e.target.value)}
                                defaultValueIsAdmin={user.isAdmin}
                                onChangeIsAdmin={(e) => setIsAdmin(e.target.value)}
                                defaultValueAddress={user.address}
                                onChangeAddress={(e) => setAddress(e.target.value)}
                                defaultValueTelephone={user.telephone}
                                onChangeTelephone={(e) => setTelephone(e.target.value)}
                                btnTitle="Update"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Update;
