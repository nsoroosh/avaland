<template>
  <div class="option-modal" :style="{ display: styles }">
    <div class="option-modal__trash">
      <img src="../assets/img/icon/outline/trash.svg" alt="" />
      حذف
    </div>
    <div class="option-modal__edit">
      <img src="../assets/img/icon/outline/edit.svg" alt="" />
      اضافه کردن به لیست پخش
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styles: String,
  },
};
</script>

<style lang="scss">
.option-modal {
  color: white;
  position: absolute;
  display: none;
  width: 250px;
  height: 82px;
  left: 10.5px;
  bottom: 18px;
  background: rgba(70, 70, 70, 0.7);
  backdrop-filter: blur(17px);
  border-radius: 10px;
}
.option-modal {
  &__trash {
    border-bottom: #999999 1px solid;
    height: 50%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    img {
      margin: 4px;
    }
  }
  &__edit {
    height: 50%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    img {
      margin: 4px;
    }
  }
}
</style>
