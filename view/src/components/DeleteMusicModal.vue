<template>
  <div class="delete-modal">
    <div class="delete-modal__desc">آیا از حذف این آهنگ اطمینان دارید؟</div>
    <div class="delete-modal__actions">
      <button class="delete-modal__actions--active">حذف</button>
      <button class="delete-modal__actions--disable">لغو</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.delete-modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  position: absolute;
  right: 335px;
  top: 269px;
  background: rgba(53, 53, 53, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  z-index: 10;

  &__desc {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: start !important;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 24px;
    width: 544px;
    height: 56px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    &--active {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 64px;
      gap: 10px;

      width: 310px;
      height: 56px;

      color: #ffffff;
      background: #f54444;
      border-radius: 8px;

      flex: none;
      order: 0;
      flex-grow: 1;
      border: none;
    }

    &--disable {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 64px;
      gap: 10px;

      width: 210px;
      height: 56px;

      color: #ffffff;
      background: #464646;
      border-radius: 8px;
      border: none;
    }
  }
}
</style>