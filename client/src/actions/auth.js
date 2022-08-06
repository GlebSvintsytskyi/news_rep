import axios from 'axios';
import { setUser } from '../store/userReducer';

export const registration = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/registration', {
                email,
                password
            });

        dispatch( setUser(response.data.user) );
        localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', {
            email,
            password
        });

        dispatch( setUser(response.data.user) );
        localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await axios.get('http://localhost:5000/api/user/auth', 
                {headers:{Authorization:`Bearer ${token}`
            }});

            dispatch( setUser(response.data.user) );
            localStorage.setItem('token', response.data.token);
            }
        } catch (error) {
            localStorage.removeItem('token');
        }
    }
}