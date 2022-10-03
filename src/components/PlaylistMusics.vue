<template>
  <table class="music-list">
    <th class="music-list__num">#</th>
    <th class="music-list__title">عنوان</th>
    <th class="music-list__album">آلبوم</th>
    <th class="music-list__release-time">تاریخ انتشار</th>
    <th></th>
    <th></th>
    <th></th>

    <tbody>
      <tr class="music-list__row" v-for="item in musiclist" :key="item.number">
        <td class="music-list__num">{{ item.number }}</td>
        <td class="music-list__title">
          <div class="music-list__music-profile">
            <img
              src="../assets/img/profile1.jpg"
              class="music-list__pic"
              alt="MusicPoster"
            />
            <div class="music-list__artist-name">
              <span class="music-list__name">{{ item.name }}</span>
              <span class="music-list__artist">{{ item.artist }}</span>
            </div>
          </div>
        </td>
        <td class="music-list__album-name">{{ item.albumname }}</td>
        <td class="music-list__release-time">{{ item.releasetime }}</td>
        <td>
          <div class="music-list__time">{{ item.time }}</div>
        </td>
        <td>
          <img
            class="music-list__like"
            src="../assets/img/icon/linear/heart.svg"
          />
        </td>
        <td>
          <div class="music-list__btn-options" @click="showModal">
            <img
              class="music-list__options"
              src="../assets/img/icon/bold/more.svg"
            />
            <MusicOptionModal :styles="count" />
          </div>
        </td>
      </tr>

      <tr class="music-list__row">
        <td class="music-list__num--active">
          <img src="../assets/img/icon/bold/selectMusic.svg" alt="" />
        </td>
        <td class="music-list__title">
          <div class="music-list__music-profile">
            <img
              src="../assets/img/posters/Rectangle-10.png"
              class="music-list__pic"
              alt="MusicPoster"
            />
            <img
              src="../assets/img/icon/bold/pause.svg"
              alt=""
              class="music-list__pause"
            />
            <div class="music-list__artist-name">
              <span class="music-list__name--active">دستبند</span>
              <span class="music-list__artist">رهام</span>
            </div>
          </div>
        </td>
        <td class="music-list__album-name">نماهنگ</td>
        <td class="music-list__release-time">5 روز پیش</td>
        <td>
          <div class="music-list__time--active">۰۴:۴۲</div>
        </td>
        <td>
          <img
            class="music-list__like--active"
            src="../assets/img/icon/bold/heartFillYellow.svg"
          />
        </td>
        <td>
          <img
            class="music-list__options"
            src="../assets/img/icon/bold/more.svg"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import MusicOptionModal from "../components/MusicOptionModal.vue";
export default {
  data() {
    return {
      count: "none",
      musiclist: [
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
        {
          number: "۰۱",
          image: "profile1.jpg",
          name: "دستبند",
          artist: "رهام",
          albumname: "نماهنگ",
          releasetime: "5 روز پیش",
          time: "۰۴:۴۲",
        },
      ],
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
    MusicOptionModal,
  },
};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.music-list {
  direction: rtl;
  text-align: right;
  background-color: $background-color;
  color: whitesmoke;
  border-collapse: collapse;
  margin-top: 90px;

  th {
    color: $secondry-color;
    border-bottom: 1px solid;
    font-size: 20px;
    padding-bottom: 20px;
  }

  &__row {
    height: 100px;
  }

  &__num {
    width: 5%;
  }

  &__title {
    width: 30%;
  }

  &__album {
    width: 30%;
  }

  &__release-time {
    width: 30%;
  }

  &__music-profile {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__pic {
    border-radius: 16px;
    height: 64px;
  }

  &__artist-name {
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__name {
    font-family: "Peyda";
    font-size: 16px;
  }

  &__name--active {
    color: $primary-color;
  }

  &__artist {
    font-size: 12px;
    color: $secondry-color;
  }

  &__album-name {
    color: white;
  }

  &__time,
  &__like {
    padding: 5px;
    font-size: 16px;
  }

  &__time--active {
    color: $primary-color;
  }

  &__options {
    rotate: 90deg;
    width: 24px;
    height: 24px;
  }
  &__btn-options {
    position: relative;
  }
  &__pause {
    position: absolute;
    right: 16px;
    background-color: $primary-color;
    padding: 5px;
    border-radius: 50%;
  }
}
@media only screen and (max-width: 768px) {
  th {
    display: none;
  }
  tr {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  }
  .music-list {
    &__album-name {
      display: none;
    }
    &__release-time {
      display: none;
    }
    &__time {
      display: none;
    }
    &__like {
      display: none;
    }
  }
}
</style>
