<template>
  <PlaylistPoster />
  <PalylistMusics />

  <PlayerContent />
</template>

<script>
import PlaylistPoster from "../components/PlaylistPoster.vue";
import PlayerContent from "../components/PlayerContent.vue";
import PalylistMusics from "../components/PlaylistMusics.vue";

export default {
  components: {
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
