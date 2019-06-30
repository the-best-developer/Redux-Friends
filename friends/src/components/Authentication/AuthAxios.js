import axios from 'axios';

export default () => {
    const key = localStorage.getItem('loginKey');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${key}`,
        }
    });
};