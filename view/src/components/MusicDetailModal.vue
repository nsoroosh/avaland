<template>
  <div class="modal">
    <div class="modal__row">
      <img
        src="../assets/img/icon/linear/receipt-square.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">اضافه کردن به لیست پخش</div>
    </div>
    <span class="modal__row--underline"></span>

    <div class="modal__row">
      <img
        src="../assets/img/icon/linear/edit.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">ویرایش آهنگ</div>
    </div>
    <span class="modal__row--underline"></span>

    <div class="modal__row">
      <img
        src="../assets/img/icon/linear/trash.png"
        alt=""
        class="modal__icon"
      />
      <div class="modal__desc">حذف آهنگ</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0px;
  gap: 20px;
  isolation: isolate;
  width: 231px;
  height: 168px;

  background: rgba(70, 70, 70, 0.7);
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  order: 2;

  &__row {
    display: flex;
    flex-direction: row-reverse;
    // align-items: flex-start;
    padding: 0px 14px;
    gap: 10px;
    flex: none;
    position: relative;
    // order: 2;


    &::after {
      content: "";
      position: absolute;
      bottom: -13px;
      right: 13px;
      width: 204px;
      height: 0px;
      border: 1px solid rgba(255, 255, 255, 0.24);
      transform: rotate(180deg);
      order: 3;
      flex-grow: 0;
      z-index: 3;
    }
  }

  &__desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: right;

    color: #ffffff;
  }

  &__icon {
    width: 24px;
    height: 24px;
    flex: none;
    order: 1;
  }
}
</style>