<template>
  <div class="container">
    <SearchboxHeader />
    <main class="content"></main>
    <PlayerContent />
  </div>
</template>

<script>
import SearchboxHeader from "./SearchboxHeader.vue";
import PlayerContent from "./PlayerContent.vue";
export default {
  components: {
    SearchboxHeader,
    PlayerContent,
  },
};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  // margin-right: 20%;
  margin-bottom: 5%;
}

.content {
  direction: rtl;
  margin: 0px 3%;
}
</style>