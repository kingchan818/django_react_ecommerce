import axios from 'axios';

export const Login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST',
        });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/users/login/', { username: email, password: password }, config);
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FALI',
            payload: error.response && error.response.data.detial ? error.response.data.detial : error.message,
        });
    }
};
