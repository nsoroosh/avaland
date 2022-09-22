<template>
  <MusicDetailPoster />
  <MusicDetailList />
</template>

<script>
import MusicDetailPoster from "../components/MusicDetailPoster.vue";
import MusicDetailList from "../components/MusicDetailList.vue";

export default {
  components: {
    MusicDetailPoster,
    MusicDetailList,
  },
};
</script>

<style>
template {
  display: inline;
}

.more-icon {
  rotate: 90deg;
}
</style>
