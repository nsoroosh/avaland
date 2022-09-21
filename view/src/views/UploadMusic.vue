<template>
  <UploadContext />
  <UploadMusicInfo />
</template>

<script>
// import MainContent from "../layout/MainContent.vue";
import UploadContext from "../components/UploadContext.vue";
import UploadMusicInfo from "../components/UploadMusicInfo.vue";

export default {
  components: {
    // MainContent,
    UploadContext,
    UploadMusicInfo,
  },
};
</script>

<style lang="scss">
$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;
template {
  display: inline;
}

.btn-active {
  padding: 10px 64px;
  background: linear-gradient(106.97deg, #fe8a48 -11.29%, #fda53e 91.8%);
  border-radius: 8px;
  order: 1;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
  border: none;
  height: 56px;
}

.btn-disable {
  padding: 10px 64px;
  background: rgba(70, 70, 70, 0.3);
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  height: 56px;
  color: #ffffff;
  text-align: center;
  border: none;
  margin-right: 20px;
}
</style>
