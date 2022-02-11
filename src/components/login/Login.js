import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';
import './login.scss';
import Logo from '../dashboard/sideNav/logo_header.png';
import Loading from '../dashboard/loader/Loading';

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
            history.push('/dashboard/users');
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
            {loading ? (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ margin: 'auto', height: '100vh' }}
                >
                    <Loading />
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className=" d-flex row justify-content-center align-items-center"
                    style={{ margin: 'auto', height: '100vh' }}
                >
                    <div
                        className="card col-12 shadow p-3 bg-white rounded"
                        style={{ maxWidth: '350px', height: '450px' }}
                    >
                        <div className="card-header">
                            <img src={Logo} style={{ maxWidth: '100%', backgroundColor: 'rgba(0,0,0,0)' }} />
                        </div>
                        <div className="card-body">
                            <label htmlFor="exampleInputUsername1" className="form-label">
                                Username:
                            </label>
                            <input
                                type="username"
                                className="form-control"
                                id="exampleInputUsername1"
                                aria-describedby="username"
                                placeholder="Enter Username"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="exampleInputPassword1" className="form-label mt-3">
                                Password:
                            </label>
                            {error && <div className="error">{error}</div>}
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter Password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div id="credentialHelp" className="form-text text-muted mt-3">
                                <p style={{ fontSize: '18px' }}>
                                    <bold>
                                        username: admin <br /> password: 123456
                                    </bold>
                                </p>
                            </div>
                        </div>

                        <div className="card-footer row">
                            <button type="submit " className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Login;
