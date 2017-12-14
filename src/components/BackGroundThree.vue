<template>
  <div class="back-one">
    <img src="../assets/mountains.jpg">
  </div>
</template>

<script>
export default {
  name: 'three',
}
</script>

<style scoped>
.back-one {
  width: 100%;
  height: 100%;
}
.back-one img {
  width: 100%;
  min-width: 800px;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  display: block;
  animation: imgWidth 10s forwards;
}
@keyframes imgWidth{
  from {transform: scale(1.5)}
  to {transform: scale(1)}
}
</style>


