<template>
  <div class="music-card">
    <img
      class="music-card__image"
      :src="require(`@/assets/img/posters/${musicImage}`)"
      alt=""
    />
    <div class="music-card__description">
      <div class="music-card__title">
        <router-link to="/music/:id" class="music-card__title">
          <h3 class="music-card__h3">{{ musicName }}</h3>
        </router-link>
        <span class="music-card__span">{{ musicAuthor }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  musicImage: String,
  musicName: String,
  musicAuthor: String,
});
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;
.music-card {
  max-width: 8em;
  margin: 0.75em;

  img {
    max-width: 8em;
  }
  &__description {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__title {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &__span {
    color: $secondry-color;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
  &__icon-more {
    rotate: 90deg;
  }
  &__option {
    position: relative;
  }
}
@media only screen and (max-width: 768px) {
  .music-card {
    position: relative;
    &__image {
    }
    &__description {
      position: absolute;
      bottom: 6px;
      left: 0;
      background: rgba(70, 70, 70, 0.4);
      backdrop-filter: blur(2px);
      width: 100%;
      border-radius: 0 0 12px 12px;
    }
    &__title {
      font-weight: 700;
      font-size: 12px;
      line-height: 0px;
    }
    &__span {
      font-weight: 500;
      font-size: 10px;
      line-height: 10px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
