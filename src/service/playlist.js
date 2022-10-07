import axios from 'axios';

// axios.defaults.withCredentials = true;

async function getPlaylists(id) {
    let playlists = 'errorrrr';
    await axios({
        method: 'GET',
        url: id ? `http://127.0.0.1:8000/playlist/playlists?id=${id}` : 'http://127.0.0.1:8000/playlist/playlists' ,
        headers: { 'Set-Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0NzE4MzAzMzc0LCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjExMTEiLCJpYXQiOjE2NjQ3MTgzMDN9.Xx4DaAW2MT3aJUUjSFq_YtYpdBeWcYDp4tFf-yunITc; Expires=Sun, 02 Oct 2022 13:45:13 GMT; Path=/; Domain=127.0.0.1'},
    })
        .then(function (response) {
            playlists = response.data.message;
        })
        .catch(function (error) {
            console.log(error.response);
        });
    console.log(playlists);
    return playlists;
}

export default {
    getPlaylists
};