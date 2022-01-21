import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeUserSession } from '../../../utils/Common';

const LogoutBtn = (props) => {
    const history = useHistory();

    const handleLogout = (props) => {
        removeUserSession();
        history.push('/login');
    };
    return (
        <div className={props.wrapperClassName}>
            <div className={props.className}>
                <button className={props.btnClassName} value="logout" onClick={handleLogout}>
                    {' '}
                    Logout
                </button>
            </div>
        </div>
    );
};
export default LogoutBtn;
