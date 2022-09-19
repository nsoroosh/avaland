<template>
  <div class="music-info">
    <div class="music-info__title">اطلاعات آهنگ</div>
    <div class="music-info__content">
      <form action="" class="music-info__form">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="name" class="music-info__label">نام آهنگ</label>
              <input
                type="text"
                id="name"
                name="name"
                class="music-info__input"
                value="اشارات"
              />
            </div>
            <div class="form-group">
              <label for="artist" class="music-info__label">نام خواننده</label>
              <input
                type="text"
                id="artist"
                name="artist"
                class="music-info__input"
                value="محمدرضا شجریان و همایون شجریان"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="album" class="music-info__label">نام آلبوم</label>
              <input
                type="text"
                id="album"
                name="album"
                class="music-info__input"
                value="اشارات"
              />
            </div>

            <div class="form-group">
              <label for="duration" class="music-info__label"
                >مدت زمان آهنگ</label
              >
              <input
                type="text"
                id="duration"
                name="duration"
                class="music-info__input"
                value="۰۹:۰۰"
              />
            </div>
          </div>

          <div class="col">
            <div class="form-group browse-button">
              <!-- <label for="poster" class="music-info__label">بارگذاری عکس</label> -->
              <img src="../assets/img/browse.png" alt="" id="loadPoster" />
              <img src="../assets/img/icon/linear/Camera.png" alt="" id="cameraIcon" />
              <button
                class="poster"
                onclick="document.getElementById('poster').click()"
              >
                بارگذاری عکس
              </button>
              <input
                type="file"
                id="poster"
                name="poster"
                class="music-info__input"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="lyric" class="music-info__label">متن آهنگ</label>
          <textarea
            type="text"
            id="lyric"
            name="lyric"
            class="music-info__input">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </textarea>
        </div>

        <div class="buttons-action">
          <input type="button" class="btn-active" value="ذخیره تغییرات" />
          <input type="button" class="btn-disable" value="لغو" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.music-info {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  height: auto;

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
    align-items: center;
    padding: 32px 24px;
    gap: 16px;
    width: 90%;
    height: auto;

    background: rgba(70, 70, 70, 0.4);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 30px;
  }

  &__label {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    // display: flex;
    // align-items: center;
    text-align: right;

    color: #ffffff;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  &__input {
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // align-items: center;
    padding: 8px;

    color: $secondry-color;
    background: rgba(70, 70, 70, 0.3);
    border-radius: 16px;
    width: 99% !important;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    width: auto;
    border: none;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttons-action {
    display: inline-block;
    text-align: left;
  }

  #lyric {
    height: 200px;
  }

  #poster {
    display: none;
  }

  .poster {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 56px;
    padding: 10px;
    border: none;
    color: #ffffff;
    background: rgba(70, 70, 70, 0.5);
    border-radius: 0px 0px 16px 16px;
  }

  #loadPoster {
    background-image: url(../assets/img/browse.png);
    background-size: cover;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border: none;
  }

  .browse-button {
    position: relative;
  }

  #cameraIcon {
    position: absolute;
    bottom: 20px;
    right: 100px;
    width: 20px;
    height: 18px;
    z-index: 999;
  }
}
</style>