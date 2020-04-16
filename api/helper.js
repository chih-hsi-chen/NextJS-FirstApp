import axios from 'axios';

const BaseUrl = 'http://localhost:5000';

export function handleLogin(username, password) {
    let url = `${BaseUrl}/auth/signin`;
    
    return axios.post(url, {
        username,
        password
    }).then(function(res) {
        if(res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}