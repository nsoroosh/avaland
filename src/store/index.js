import { createStore } from 'vuex'
// import valueStore from './modules/valueStore'
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:8000/playlist/playlists',
  headers: { 
    'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoxNjY0NzE4MzAzMzc0LCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjExMTEiLCJpYXQiOjE2NjQ3MTgzMDN9.Xx4DaAW2MT3aJUUjSFq_YtYpdBeWcYDp4tFf-yunITc; Expires=Sun, 02 Oct 2022 13:45:13 GMT; Path=/; Domain=127.0.0.1'
  }
};
export default createStore(
  {
    namespaced: true,
    state: {
      playlists: [
          
      ]
  },
  actions: {
      getPlaylists({ commit }, id) {
          commit("getPlaylists", id);
      },
      dislike({ commit }, id) {
          commit("DISLIKE_ITEM", id);
      }
  },
  mutations: {
     async getPlaylists(state) {
      await  axios(config)
        .then(function (response) {
          // state.playlists=response.data.message
          for (const iterator of response.data.message) {
            state.playlists.push(iterator)
          }
          console.log(JSON.stringify(response.data));
          console.log(state.playlists);
        })
        .catch(function (error) {
          console.log(error);
        });
         
      },
      DISLIKE_ITEM(state, id) {
          state.items[id].likes--;
      }
  },
  getters: {
      playlists(state) {
          return state.playlists;
      }
  }
  })
