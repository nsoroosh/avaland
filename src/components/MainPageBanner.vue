<template>
  <div class="banner">
    <div class="banner__background-image">
      <img src="../assets/img/Rectangle9.png" alt="dnkcjsdc" />
    </div>
    <div class="banner__image">
      <img src="../assets/img/banner.png" alt="" />
    </div>
    <div class="banner__title">
      <img src="../assets/img/title.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  position: relative;
  max-width: 60vw;
  &__background-image {
    max-width: inherit;
    img {
      max-width: inherit;
    }
  }
  &__image {
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      max-width: 10em;
    }
  }
  &__title {
    position: absolute;
    left: 204px;
    bottom: 0;
    img{
      max-width: 20em;
    }
  }
}
@media only screen and (max-width: 768px) {
  .banner{
   max-width: 100vw;
    &__image {
    position: absolute;
    bottom: 0;
    left: 0;
    img {
      max-width: 7em;
    }
  }
  &__title {
    position: absolute;
    left: 104px;
    bottom: 0;
    img{
      max-width: 12em;
    }
  }
  }
}
</style>
