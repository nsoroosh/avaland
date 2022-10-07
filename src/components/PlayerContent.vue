<template>
  <div class="player">
    <div class="player__options">
      <img src="../assets/img/icon/bold/more.svg" class="player__icon-more" />
      <img src="../assets/img/icon/bold/heart.svg" />
    </div>

    <div class="player__controler">
      <img
        class="player__controler-previous"
        src="../assets/img/icon/bold/previous.svg"
        alt=""
        srcset=""
      />
      <img
        class="player__controler-pause"
        src="../assets/img/icon/bold/puseButtton.svg"
        alt=""
        srcset=""
      />
      <img
        class="player__controler-next"
        src="../assets/img/icon/bold/next.svg"
        alt=""
        srcset=""
      />

      <span class="player__main-time">۴:۵۹</span>
      <div class="player__control-bar">
        <div class="player__progsive-bar"></div>
        <div class="player__progsive-button"></div>
      </div>
      <span class="player__left-time">۴:۵۹</span>
      <img
        class="player__volume-icon"
        src="../assets/img/icon/bold/volume-high.svg"
      />

      <div class="player__volume-bar">
        <div class="player__volume-level"></div>
      </div>
    </div>

    <div class="player__music-profile">
      <div class="player__artist-name">
        <span class="player__name">دستبند</span>
        <span class="player__artist">رهام</span>
      </div>
      <img
        src="../assets/img/profile1.jpg"
        class="player__pic"
        alt="MusicPoster"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.player {
  direction: ltr;
  background-color: rgba(41, 41, 41, 0.8);
  height: 90px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  // flex-direction: row-reverse;
  padding: 3px;

  &__controler {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0 10%;
  }

  &__options {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    // margin-left: 120px;
  }

  &__icon-more {
    rotate: 90deg;
  }

  &__control-bar {
    height: 4px;
    width: 100%;
    border-radius: 5px;
    background-color: #46464680;
    display: flex;
    align-items: center;
    margin: 0px 20px;
  }

  &__progsive-bar {
    background: $primary-color;
    height: inherit;
    width: 200px;
  }

  &__progsive-button {
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }

  &__main-time,
  &__left-time {
    color: white;
    font-size: 16px;
  }

  &__volume-bar {
    height: 4px;
    width: 100px;
    background: $secondry-color;
    border-radius: 10px;
  }

  &__volume-level {
    border-radius: 10px;
    height: 4px;
    width: 60%;
    background: white;
  }

  &__pic {
    border-radius: 17px;
  }

  &__music-profile {
    display: flex;
    color: white;
    // margin-right: 230px;
    gap: 20px;
  }

  &__artist {
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media only screen and (max-width: 768px) {
  .player {
    width: 100vw;
    height: 48px;
    bottom: 63px;
    &__volume-icon {
      display: none;
    }
    &__options {
      display: none;
    }
    &__main-time {
      display: none;
    }
    &__control-bar {
      display: none;
    }
    &__left-time {
      display: none;
    }
    &__volume-bar {
      display: none;
    }
    &__controler-previous {
      display: none;
    }
    &__controler-pause {
      //  background-color: none;
    }
    &__controler-next {
      display: none;
    }
    &__pic {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
    &__artist-name {
    }
  }
}
</style>
