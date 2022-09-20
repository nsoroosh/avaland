<template>
  <div class="playlist-modal">
    <div class="playlist-modal__header">
      <div class="playlist-modal__buttons">
        <img
          src="../assets/img/icon/linear/close-circle.png"
          alt=""
          class="playlist-modal__close"
        />
        <div class="playlist-modal__actions">
          <button
            class="btn-select"
            :class="addPlaylistModal && 'playlist-modal__btn--active'"
          >
            انتخاب لیست پخش
          </button>
          <button
            class="btn-create"
            :class="createPlaylistModal && 'playlist-modal__btn--active'"
          >
            ایجاد لیست پخش
          </button>
        </div>
      </div>
    </div>
    <span class="line1"></span>

    <!-- createPlaylistModal -->
    <div class="playlists" v-if="createPlaylistModal">
      <div class="playlists__title">نام لیست پخش</div>
      <div class="playlists__name">
        <div class="playlists__new-name">
          <input type="text" class="playlists__input-name" />
        </div>
        <button class="playlists__btn-save">ذخیره</button>
      </div>
      <div class="playlists__musics">
        <div class="playlists__music">
          <img
            class="playlists__music-poster"
            src="../assets/img/Rectangle-9.jpg"
            alt=""
          />
          <div class="playlists__music-info">
            <div class="playlists__music-name">باطل</div>
            <div class="playlists__music-artist">شادمهر عقیلی</div>
          </div>
        </div>

        <div class="playlists__music">
          <img
            class="playlists__music-poster"
            src="../assets/img/Rectangle-9.jpg"
            alt=""
          />
          <div class="playlists__music-info">
            <div class="playlists__music-name">باطل</div>
            <div class="playlists__music-artist">شادمهر عقیلی</div>
          </div>
        </div>
      </div>
    </div>

    <span class="line2" v-if="createPlaylistModal"></span>

    <div class="similar-music" v-if="createPlaylistModal">
      <div class="similar-music__title">آهنگ های مشابه</div>
      <div class="similar-music__musics">
        <div class="similar-music__music">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">عوض نمی‌شی</div>
                  <div class="similar-music__music-artist">شادمهر عقیلی</div>
                </div>
                <img
                  src="../assets/img/posters/Rectangle-8.png"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="similar-music__music">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">عوض نمی‌شی</div>
                  <div class="similar-music__music-artist">شادمهر عقیلی</div>
                </div>
                <img
                  src="../assets/img/posters/Rectangle-8.png"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end createPlaylistModal -->

    <!-- addPlaylistModal -->
    <div class="playlists" v-if="addPlaylistModal">
      <div class="playlists__title">فیلتر لیست پخش ها</div>
      <div class="playlists__name">
        <div class="playlists__new-name">
          <input type="text" class="playlists__input-name" style="height: 48px;" />
        </div>
      </div>
    </div>

    <div class="similar-music" v-if="addPlaylistModal">
      <div class="similar-music__title">آهنگ های مشابه</div>
      <div class="similar-music__musics">
        <div class="similar-music__music">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">عوض نمی‌شی</div>
                  <div class="similar-music__music-artist">شادمهر عقیلی</div>
                </div>
                <img
                  src="../assets/img/posters/Rectangle-8.png"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="similar-music__music">
          <div class="similar-music__content">
            <div class="similar-music__row">
              <div class="similar-music__add-to-playlist">
                اضافه کردن به لیست پخش
              </div>
              <div class="similar-music__col">
                <div class="similar-music__music-info">
                  <div class="similar-music__music-name">عوض نمی‌شی</div>
                  <div class="similar-music__music-artist">شادمهر عقیلی</div>
                </div>
                <img
                  src="../assets/img/posters/Rectangle-8.png"
                  alt=""
                  class="similar-music__poster"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end addPlaylistModal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      createPlaylistModal: true,
      addPlaylistModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin line() {
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  align-self: stretch;
  flex-grow: 0;
  margin: 20px 0px;
}

.line1 {
  @include line();
  order: 1;
}

.line2 {
  @include line();
  order: 2;
}

.playlist-modal {
  direction: ltr;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 32px;
  gap: 24px;

  position: absolute;
  width: 608px;
  height: 664px;
  right: 256px;
  top: 76px;

  background: rgba(53, 53, 53, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  z-index: 10;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 100%;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 100%;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;

    width: 285px;
    height: 44px;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      #fc8f22;
    border-radius: 10px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .btn-select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 142.5px;
    height: 44px;
    border-radius: 10px;
    color: #ffffff;
    background: #00000000;
    border: none;
    display: flex;
    align-items: center;
    text-align: right;
  }

  .btn-create {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 142.5px;
    height: 44px;

    color: #ffffff;
    background: #00000000;
    border-radius: 10px;
    border: none;
    order: 1;
    flex-grow: 0;
  }

  &__btn--active {
    background: #fc8f22 !important;
  }

  .playlists {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      justify-content: end;
      align-items: center;
      text-align: left;
      color: #ffffff;

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    &__name {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #464646;
      border-radius: 10px;
      order: 0;
      align-self: stretch;
      flex-grow: 1;
    }

    &__btn-save {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      gap: 10px;
      width: 110px;
      height: 48px;
      color: #ffffff;
      background: #fc8f22;
      border-radius: 10px 0px 0px 10px;
      border: none;
    }

    &__new-name {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      gap: 16px;
      order: 1;
      align-self: stretch;
      flex-grow: 1;
    }

    &__input-name {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      gap: 8px;
      background: #464646;
      border: none;
      order: 1;
      align-self: stretch;
      flex-grow: 1;
      border-radius: 10px;
    }

    &__musics {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 12px 10px;
      gap: 12px;
      border-radius: 10px;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }

    &__music {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      gap: 40px;
      order: 0;
      flex-grow: 0;
    }

    &__music-poster {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      order: 1;
      flex-grow: 0;
    }

    &__music-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0px;
      order: 0;
      flex-grow: 0;
    }

    &__music-name {
      font-weight: 600;
      font-size: 14px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #ffa928;
      order: 0;
      flex-grow: 0;
      margin: -4px 0px;
    }

    &__music-artist {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #a3a3a3;
      order: 1;
      flex-grow: 0;
    }
  }

  .similar-music {
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 8px;

    order: 3;
    align-self: stretch;
    flex-grow: 0;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: end;
      color: #ffffff;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    &__musics {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0px;
      border-radius: 10px;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }

    &__music {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 8px 12px;
      gap: 10px;
      background: #3f3f3f;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      gap: 40px;
      order: 0;
      flex-grow: 1;
    }

    &__add-to-playlist {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #fc8f22;
    }

    &__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 15px;
      order: 0;
      flex-grow: 1;
    }

    &__col {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;
      order: 1;
      flex-grow: 0;
    }

    &__music-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 0px;
    }

    &__music-name {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #ffffff;
      order: 0;
      flex-grow: 0;
      margin: -4px 0px;
    }

    &__music-artist {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      display: flex;
      align-items: center;
      text-align: right;

      color: #a3a3a3;
      order: 1;
      flex-grow: 0;
    }
  }
}
</style>