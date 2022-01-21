import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';

const Login = () => {
    const history = useHistory();
    // const { loggedIn, setLoggedIn } = useContext(loginContext);
    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async () => {
        debugger;
        try {
            const res = await axios.post('http://localhost:5000/api/v1/auth/login', {
                username,
                password,
                // email,
            });

            setLoading(false);
            setUserSession(res.data.accessToken, res.data);
            history.push('/dashboard');
            console.log(res);
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
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
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
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
