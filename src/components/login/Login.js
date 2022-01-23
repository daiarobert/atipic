import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';
import Logo from '../dashboard/sideNav/logo_header.png';

const Login = () => {
    const history = useHistory();
    // const { loggedIn, setLoggedIn } = useContext(loginContext);
    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async () => {
        setLoading(true);
        try {
            const res = await axios.post('https://atipic.herokuapp.com/api/v1/auth/login', {
                username,
                password,
                // email,
            });

            setLoading(false);
            setUserSession(res.data.accessToken, res.data);
            history.push('/dashboard');
            console.log(res);
            console.log(loading);
        } catch (err) {
            // setLoggedIn(false);
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('lll');
        login();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className=" d-flex row justify-content-center align-items-center"
                style={{ margin: 'auto', height: '100vh' }}
            >
                <div
                    className="card col-12 shadow p-3 mb-5 bg-white rounded"
                    style={{ maxWidth: '350px', height: '450px' }}
                >
                    <div className="card-header">
                        <img src={Logo} style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="card-body mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">
                            username
                        </label>
                        <input
                            type="username"
                            className="form-control"
                            id="exampleInputUsername1"
                            aria-describedby="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        {error && <div className="error">{error}</div>}
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="credentialHelp" className="form-text">
                            <p>
                                <bold>
                                    You can use username: admin <br /> and password: 123456
                                </bold>
                            </p>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit " className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
