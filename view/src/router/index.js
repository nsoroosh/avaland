import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/about",
    name: "search",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/playmusic",
    name: "playmusic",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MusicDetails.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListPlaylists.vue"),
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UploadMusic.vue"),
  },
  {
    path: "/playlists/:id",
    name: "playlistarchive",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlayListArchive.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "nav__item--active",
});

export default router;
