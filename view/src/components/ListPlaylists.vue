<template>
  <MainContent>
    <template v-slot:content>
        <ListAllPlaylist/>
    </template>
  </MainContent>
</template>
    
    <script>
import MainContent from "./MainContent.vue";
import ListAllPlaylist from "./ListAllPlaylist.vue";
export default {
  components: {
    MainContent,
    ListAllPlaylist
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