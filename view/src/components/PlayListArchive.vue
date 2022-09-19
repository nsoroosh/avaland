<template>
  <MainContent>
    <template v-slot:content >
      <PlaylistPoster />
      <PalylistMusics />
    </template>
  </MainContent>
  <PlayerContent />
</template>

<script>
import MainContent from "./MainContent.vue";
import PlaylistPoster from "./PlaylistPoster.vue";
import PlayerContent from "./PlayerContent.vue";
import PalylistMusics from "./PlaylistMusics.vue";

export default {
  components: {
    MainContent,
    PlaylistPoster,
    PlayerContent,
    PalylistMusics,
  },
};
</script>

<style lang="scss">
  template {
    display: inline;
  }
</style>