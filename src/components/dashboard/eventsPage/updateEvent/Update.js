import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';
import Axios from 'axios';
import { getToken } from '../../../../utils/Common';
import { useParams } from 'react-router-dom';
//import './update.scss';

const Update = () => {
    const history = useHistory();
    const [event, setEvent] = useState({});
    const [title, setTitle] = useState();
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();
    const [description, setDescription] = useState();
    const [readMore, setReadMore] = useState();
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
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/events/find/${id}`, {
                headers: { token: `Bearer ${token}` },
            });
            setEvent(res.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const updateEvent = async () => {
        console.log(`Bearer ${token}`);
        try {
            const res = await Axios.put(
                `https://atipic.herokuapp.com/api/v1/events/${id}`,

                {
                    title,
                    startingDate,
                    endingDate,
                    description,
                    readMore,
                },

                { headers },
            );

            history.push('/dashboard/events');
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEvent();
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
                                //onChangeImg={(e) => setImage(e.target.value)}

                                defaultValueTitle={event.title}
                                onChangeTitle={(e) => setTitle(e.target.value)}
                                defaultValueStartingDate={event.startingDate}
                                onChangeStartingDate={(e) => setStartingDate(e.target.value)}
                                defaultValueEndingDate={event.endingDate}
                                valueEndingDate={event.endingDate}
                                onChangeEndingDate={(e) => setEndingDate(e.target.value)}
                                defaultValueDescription={event.description}
                                onChangeDescription={(e) => setDescription(e.target.value)}
                                defaultValueReadMore={event.readMore}
                                onChangeReadMore={(e) => setReadMore(e.target.value)}
                                btnTitle={'Update'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Update;
