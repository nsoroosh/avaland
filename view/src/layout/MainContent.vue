<template>
  <SidebarNavigation />
  <div class="container">
    <SearchboxHeader />
    <main class="content">
      <template>
        <slot name="content">
          <router-view></router-view>
        </slot>
      </template>
    </main>
  <slot name="player"></slot>
  </div>
  

</template>

<script>
import SearchboxHeader from "../components/SearchboxHeader.vue";
import SidebarNavigation from "./SidebarNavigation.vue";

export default {
  components: {
    SearchboxHeader,
    SidebarNavigation,
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
  // height: 100vh;
}
</style>
