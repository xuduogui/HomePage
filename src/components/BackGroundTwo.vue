<template>
  <div class="back-one">
    <img src="../assets/waterBlue.jpg">
    <p>这是一行测试的文字</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.back-one {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-one p {
  color: #fff;
}
.back-one img {
  width: 100%;
  min-height: 100%;
  min-width: 800px;
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