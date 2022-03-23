import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeUserSession } from '../../../utils/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutBtn = (props) => {
    const history = useHistory();

    const handleLogout = (props) => {
        removeUserSession();
        history.push('/login');
    };
    return (
        <div className={props.wrapperClassName} style={props.style}>
            <div className={props.className}>
                <button className={props.btnClassName} value="logout" onClick={handleLogout}>
                    Logout <FontAwesomeIcon icon={faSignOutAlt} className="icon"></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};
export default LogoutBtn;
