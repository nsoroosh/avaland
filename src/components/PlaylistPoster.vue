<template>
  <section class="poster">
    <figure>
      <div class="poster__imageplay">
        <img src="../assets/img/profile1.jpg" class="poster__image" />
        <img
          src="../assets/img/icon/bold/play.png"
          alt=""
          class="poster__btn-play"
        />
      </div>
    </figure>
    <div class="poster__desc">
      <div class="poster__tag">لیست پخش</div>
      <h2 class="poster__title">گلچین شاد مجلسی آخر هفته ها</h2>
      <div class="poster__detail">
        <img src="../assets/img/icon/linear/music-filter.svg" />
        <span>۱۲۰ ترانه </span>
        <span class="poster__seperator">|</span>
        <img src="../assets/img/icon/linear/clock.svg" />
        <span>۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه</span>
      </div>
      <div class="poster__buttons">
          <img src="../assets/img/icon/linear/heart.svg" alt="">
          <img src="../assets/img/icon/linear/share.svg" alt="">
          <div @click="showModal" class="poster__more">
          <img src="../assets/img/icon/bold/more.svg" alt="" class="poster__btn-more" />
          <PlaylistOptionModal :styles="count"/>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaylistOptionModal from "../components/PlaylistOptionModal.vue";
export default {
  data() {
    return {
      count: "none",
    };
  },
  methods: {
    showModal() {
      if (this.count == "none") {
        this.count = "block";
      } else {
        this.count = "none";
      }
    },
  },

  
  components: {
    PlaylistOptionModal,
  },
};
</script>


<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.poster {
  background-image: url(../assets/img/poster-background.jpg);
  background-size: cover;
  border-radius: 30px;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  &__imageplay {
    position: relative;
  }
  &__image {
    width: 200px;
    border-radius: 30px;
  }
  &__btn-play {
    width: 68px;
    height: 68px;
    margin-top: 15px;
    position: absolute;
    left: 150px;
    top: 150px;
  }
  &__desc {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    direction: rtl;
  }

  &__tag {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    border-radius: 50px;
    color: $primary-color;
    padding: 6px 20px;
    width: 115px;
    height: 35px;
    background: rgba(251, 138, 13, 0.2);
  }

  &__title {
    font-size: 32px;
    color: #ffffff;
  }

  &__detail {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: $secondry-color;
    gap: 10px;
  }

  &__seperator {
    color: white;
  }
  &__buttons {
    display: flex;
    align-items: center;
    img{
      margin: 10px;
    }
  }
  &__more{
   position: relative;
  }
  &__btn-more {
    width: 24px;
    height: 24px;
    margin-top: 15px;
    rotate: 90deg;
  }
}
</style>
