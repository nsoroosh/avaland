<template>
  <MainContent />
</template>

<script>
import MainContent from "./layout/MainContent.vue";
export default {
  name: "App",
  components: {
    MainContent,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Peyda";
  font-weight: normal;
  src: url(../src/assets/fonts/peyda-light.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: lighter;
  src: url(../src/assets/fonts/peyda-extralight.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: bold;
  src: url(../src/assets/fonts/Peyda-Bold.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: bolder;
  src: url(../src/assets/fonts/Peyda-ExtraBold.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: 100;
  src: url(../src/assets/fonts/Peyda-Black.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: 400;
  src: url(../src/assets/fonts/Peyda-Medium.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: 600;
  src: url(../src/assets/fonts/Peyda-Regular.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: bold;
  src: url(../src/assets/fonts/Peyda-SemiBold.ttf);
}

@font-face {
  font-family: "Peyda";
  font-weight: 100;
  src: url(../src/assets/fonts/Peyda-Thin.ttf);
}

$primary-color: #fc8f22;
$secondry-color: #999999;
$background-color: #010101;

body {
  direction: rtl;
  background: $background-color;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-family: "Peyda";
  font-style: normal;
  width: 100%;
  flex-direction: row;
}

input,
textarea,
p,
div,
label,
ul,
li,
button {
  font-family: "Peyda";
}
</style>
