// var axios = require("axios");
// var config = {
//   method: "get",
//   url: "http://localhost:8000/playlist/playlists",
// };

const value = {
  namespaced: true,
  state: {
    items: [
        {
            title: "item1",
            likes: 10
        },
        {
            title: "item2",
            likes: 24
        }
    ]
},
actions: {
    like({ commit }, id) {
        commit("LIKE_ITEM", id);
    },
    dislike({ commit }, id) {
        commit("DISLIKE_ITEM", id);
    }
},
mutations: {
    LIKE_ITEM(state, id) {
        state.items[id].likes++;
        console.log(state.items);
    },
    DISLIKE_ITEM(state, id) {
        state.items[id].likes--;
    }
},
getters: {
    items(state) {
        return state.items;
    }
}
};

export default value;
