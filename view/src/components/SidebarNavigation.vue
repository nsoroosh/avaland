<template>
  <aside class="sidebar">
    <img src="../assets/logo.png" alt="" />

    <div class="nav">
      <div
        class="nav__item"
        :class="index == 0 && 'nav__item--active'"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <p class="nav__desc">{{ menu.name }}</p>
        <img
          :src="require(`../assets/img/${menu.icon}`)"
          alt=""
          class="nav__icon"
        />
      </div>
    </div>
  </aside>
</template>

<script setup>
const menus = [
  {
    name: "صفحه اصلی",
    icon: "icon/linear/home-2.svg",
    link: "/",
  },
  {
    name: "جستجو",
    icon: "icon/linear/discover.svg",
    link: "/search",
  },
  {
    name: "پخش آهنگ",
    icon: "icon/linear/play.svg",
    link: "/playmusic",
  },
  {
    name: "محبوب ترین ها",
    icon: "icon/linear/heart.svg",
    link: "/favorites",
  },
  {
    name: "لیست پخش منتخب",
    icon: "icon/linear/receipt-square.svg",
    link: "/playlists",
  },
  {
    name: "آپلود آهنگ",
    icon: "icon/linear/frame.svg",
    link: "/upload",
  },
];
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.sidebar {
  direction: ltr;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;
  gap: 64px;
  width: 230px;
  // height: 100vh;
  right: 0px;
  top: 0px;
  background: rgba(70, 70, 70, 0.2);
  backdrop-filter: blur(10px);
  // position: fixed;

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 32px;

    &__item {
      transition: all 0.3s;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 16px 0px 0px;
      gap: 16px;
      height: 32px;
      align-self: stretch;

      &:hover {
        cursor: pointer;
        // filter: invert(83%) sepia(39%) saturate(4484%) hue-rotate(38deg) brightness(269%) contrast(101%);
        // border-right: 2px solid $primary-color;
        // border-radius: 1px;
      }
    }

    &__desc {
      font-family: "Peyda";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: $secondry-color;
    }

    &__icon {
      width: 24px;
      height: 24px;
      box-sizing: border-box;
    }

    &__item--active,
    &__item:hover {
      border-right: 2px solid $primary-color;
      border-radius: 1px;
    }

    &__item--active,
    &__item:hover,
    &__desc:hover,
    &__icon:hover,
    &__item:focus,
    &__desc:focus,
    &__icon:focus {
      filter: brightness(0) saturate(100%) invert(57%) sepia(96%) saturate(956%)
        hue-rotate(344deg) brightness(101%) contrast(98%);

      // filter: invert(60%) sepia(53%) saturate(1407%) hue-rotate(344deg) brightness(101%) contrast(98%);
      & path {
        stroke: $primary-color !important;
        fill: $primary-color !important;
      }
    }
  }
}
</style>
