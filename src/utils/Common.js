// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('data');
    if (userStr) return JSON.parse(userStr);
    else return null;
};

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('accessToken') || null;
};

export const isAuth = () => {
    const data = getUser();
    return getToken() && data.isAdmin;
};
// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('data');
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
    sessionStorage.setItem('accessToken', token);
    sessionStorage.setItem('data', JSON.stringify(user));
};
