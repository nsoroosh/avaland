<template>
  <section class="playlist">
    <div class="playlist__title">محبوب‌ترین‌ها از همین خواننده</div>
    <div class="playlist__content">
      <img
        src="../assets/img/Group-5573.png"
        alt=""
        class="playlist__arrow-right"
      />
      <div class="playlist__list">
        <div
          class="playlist__item"
          v-for="(music, index) in similarMusic"
          :key="index"
        >
          <img
            :src="require(`../assets/img/${music.poster}`)"
            alt=""
            class="playlist__img"
          />
          <div class="playlist__music-info">
            <p class="playlist__music-name">{{ music.name }}</p>
            <img
              src="../assets/img/icon/bold/more.svg"
              alt=""
              class="more-icon"
            />
          </div>
        </div>
      </div>
      <img
        src="../assets/img/Group-5572.png"
        alt=""
        class="playlist__arrow-left"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const similarMusic = ref([
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
  {
    name: "باطل",
    poster: "posters/Rectangle-8.png",
    artist: "شادمهر عقیلی",
  },
]);
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.playlist {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 80px 0px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: right;

    color: #ffffff;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 24px;
    gap: 28px;
    width: 100%;
    height: 288px;
    border-radius: 24px;
    order: 1;
    position: relative;
    // overflow: scroll;
  }

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px;
    gap: 32px;
    width: 100%;
    height: 240px;
    order: 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
    gap: 12px;
  }

  &__img {
    width: 196.4px;
    height: 204px;
    border-radius: 16px;
  }

  &__music-name {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: rgba(255, 255, 255, 0.8);
    margin: 0px;
  }

  &__music-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    order: 1;
    align-self: stretch;
  }

  &__arrow-right {
    position: absolute;
    right: 0px;
    margin-left: 10px;
  }

  &__arrow-left {
    position: absolute;
    left: 10px;
    margin-right: 2%;
  }
}
</style>