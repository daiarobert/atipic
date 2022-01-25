import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../sideNav/SideNav';
import CardInfo from './CardInfo';
import CreateButton from '../CreateButton/CreateButton';
import './team.scss';
import Axios from 'axios';
import { getToken } from '../../../utils/Common';
import moment from 'moment';
import Loading from '../loader/Loading';

const Team = () => {
    const history = useHistory();
    console.log('this is team page');
    const [team, setTeam] = useState([]);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState(false);
    useEffect(async () => {
        setLoading(true);
        const token = getToken();
        try {
            const res = await Axios.get('https://atipic.herokuapp.com/api/v1/users', {
                headers: { token: `Bearer ${token}` },
            });
            setTeam(res.data);
            setDate(moment(res.data.createdAt).format('DD MMM, YYYY'));
            setLoading(false);
            console.log(date);
            console.log(team);
            console.log(loading);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleDelete = async (id) => {
        const token = getToken();
        try {
            const res = await Axios.delete(`https://atipic.herokuapp.com/api/v1/users/${id}`, {
                headers: {
                    token: `Bearer ${token}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    const handleCreate = () => {
        history.push('/add/user');
    };
    console.log(admin);
    return (
        <div className="team row g-0 ">
            <SideNav />
            {loading ? (
                <Loading />
            ) : (
                <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                    <select
                        className="form-select"
                        aria-label="role"
                        required
                        onChange={(e) => setAdmin(e.target.value)}
                    >
                        <option selected readOnly>
                            Open this select menu
                        </option>
                        <option value="Coordinator">Coordinator</option>
                        <option value="Therapists">Therapists</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Administrative">Administrative</option>
                    </select>
                    <CreateButton title={'Create User'} onClick={handleCreate} />
                    <div className="row p-3 g-0 d-flex justify-content-center">
                        {team.map((data, key) => {
                            return (
                                <div className="col-md-12 col-lg-6 col-xl-4 p-2 g-0">
                                    <CardInfo
                                        key={key}
                                        cardClassName=""
                                        title={`${data.firstName} ${data.lastName}`}
                                        firstName={data.firstName}
                                        lastName={data.lastName}
                                        email={data.email}
                                        role={data.role}
                                        address={data.address}
                                        telephone={data.telephone}
                                        admin={
                                            data.isAdmin ? (
                                                <p style={{ color: 'green', fontSize: '15px' }}>
                                                    <bold>True</bold>
                                                </p>
                                            ) : (
                                                <p style={{ color: 'red', fontSize: '15px' }}>False</p>
                                            )
                                        }
                                        classNameDelete={data.isAdmin ? 'd-none' : 'd-block'}
                                        createdAt={moment(data.createdAt).format('DD MMM, YYYY')}
                                        updatedAt={moment(data.updatedAt).format('DD MMM, YYYY')}
                                        updateOnClick={() => history.push(`/update/user/${data._id}`)}
                                        deleteOnClick={() => handleDelete(data._id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;
