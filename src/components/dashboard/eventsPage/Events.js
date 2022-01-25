import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SideNav from '../sideNav/SideNav';
import Card from './Card';
import CreateButton from '../CreateButton/CreateButton';
import Axios from 'axios';
import { getToken } from '../../../utils/Common';
import moment from 'moment';
import Loading from '../loader/Loading';

const Events = () => {
    const [event, setEvent] = useState([]);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(async () => {
        setLoading(true);
        const token = getToken();
        try {
            const res = await Axios.get('https://atipic.herokuapp.com/api/v1/events', {
                headers: { token: `Bearer ${token}` },
            });
            setEvent(res.data);
            setDate(moment(res.data.createdAt).format('DD MMM, YYYY'));
            setLoading(false);
            console.log(date);
            console.log(event);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleDelete = async (id) => {
        const token = getToken();
        try {
            const res = await Axios.delete(`https://atipic.herokuapp.com/api/v1/events/${id}`, {
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
        history.push('/add/event');
    };

    return (
        <div className="events row g-0 ">
            <SideNav />

            {loading ? (
                <Loading />
            ) : (
                <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                    <CreateButton title={'Create Event'} onClick={handleCreate} />

                    <div className="row p-3 g-0">
                        {event.map((data, key) => {
                            return (
                                <div className="col-md-12 col-lg-6 col-xl-4 p-2 g-0" key={key}>
                                    <Card
                                        key={key}
                                        cardClassName=""
                                        title={data.title}
                                        startingEvent={data.startingEvent}
                                        endingEvent={data.endingEvent}
                                        defaultValueDescription={data.description}
                                        defaultValueReadMore={data.readMore}
                                        createdAt={moment(data.createdAt).format('DD MMM, YYYY')}
                                        updatedAt={moment(data.updatedAt).format('DD MMM, YYYY')}
                                        updateOnClick={() => history.push(`/update/event/${data._id}`)}
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

export default Events;
