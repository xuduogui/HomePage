<template>
  <div class="back-one">
    <img src="../assets/mountains.jpg">
    <div class="our-describe">
      <p>从这里</p>
      <p>开始你的探索</p>
    </div>
    
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
.our-describe {
  position: absolute;
  top: 60%;
  left: 25%;
  font: 2rem "微软雅黑";
  color: #fff;
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


