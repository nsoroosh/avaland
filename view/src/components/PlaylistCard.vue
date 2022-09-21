<template>
  <div class="playlist">
    <img :src="require(`@/assets/img/posters/${playlistImage}`)" alt="" />
    <div class="playlist__description">
      <div class="playlist__title">
        <h3 class="playlist__h3">{{ playlistName }}</h3>
        <span class="playlist__span">ایجاد شده توسط مصطفی</span>
      </div>

      <div class="playlist__option" @click="showModal">
        <img
          src="../assets/img/icon/bold/more.svg"
          alt=""
          class="playlist__icon-more"
        />
        <PlaylistOptionModal :styles="count" />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistOptionModal from "./PlaylistOptionModal.vue";
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

  props: {
    playlistName: String,
    playlistImage: String,
  },
  components: {
    PlaylistOptionModal,
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;
.playlist {
  max-width: 200.5px;
  // height: 314px;
  img {
    max-width: 200.5px;
  }
  &__description {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__h3 {
    color: rgba(255, 255, 255, 1);
  }
  &__span {
    color: $secondry-color;
  }
  &__icon-more {
    rotate: 90deg;
  }
  &__option {
    position: relative;
  }
}
</style>
