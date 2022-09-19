<template>
  <MainContent>
    <template v-slot:content>
      <MusicDetailPoster />
      <MusicDetailList />
    </template>
  </MainContent>
</template>
    
    <script>
import MainContent from "./MainContent.vue";
import MusicDetailPoster from "./MusicDetailPoster.vue";
import MusicDetailList from "./MusicDetailList.vue";

export default {
  components: {
    MainContent,
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