import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { getToken } from '../../../../utils/Common';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';

const CreateEvent = () => {
    const history = useHistory();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [readMore, setReadMore] = useState();
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();

    const createEvent = async () => {
        const token = getToken();
        const headers = {
            token: `Bearer ${token}`,
        };

        try {
            const res = await Axios.post(
                `https://atipic.herokuapp.com/api/v1/events/admin/add`,

                {
                    startingDate,
                    endingDate,
                    title,
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
        createEvent();
    };

    console.log(JSON.stringify(startingDate));
    console.log(JSON.stringify(endingDate));

    return (
        <div className="row g-0">
            <SideNav />
            <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                <div className="row g-0 ">
                    <div className="col-12">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                onChangeStartingDate={(e) => JSON.stringify(setStartingDate(e.target.value))}
                                onChangeEndingDate={(e) => JSON.stringify(setEndingDate(e.target.value))}
                                onChangeTitle={(e) => setTitle(e.target.value)}
                                onChangeDescription={(e) => setDescription(e.target.value)}
                                onChangeReadMore={(e) => setReadMore(e.target.value)}
                                btnTitle={'Create'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
