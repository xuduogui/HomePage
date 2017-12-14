<template>
  <div class="one-page">
    <div class="back-one">
      <img src="../assets/car.jpg">
    </div>
    <!-- <img src="../assets/p1.png" alt="loge" class="my-game-loge"> -->
    <transition
      appear
      appear-class="my-company-enter"
      appear-to-class="my-company-enter-to"
      appear-active-class="my-company-enter-active"
    >
      <div class="companyBox">
        <div class="ourCompanyName">毅才德</div>
        <div class="spellName">YiCaiDe</div>
      </div>
    </transition>
  </div>
  
</template>

<script>
export default {
  name: 'one',
}
</script>

<style scoped>
  .companyBox {
    position: absolute;
    bottom: 25%;
    left: 13%;
  }
  .ourCompanyName {
    font: 3rem "黑体";
    color: #fff;
  }
  .spellName {
    color: #fff;
    font: 1rem "微软雅黑"
  }
  .one-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back-one {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
  }
  .back-one img {
    width: 100%;
    min-width: 800px;
    min-height: 100%;
    display: block;
    animation: imgWidth 10s forwards;
  }
  @keyframes imgWidth{
    from {transform: scale(1.5)}
    to {transform: scale(1)}
  }
  .my-company-enter {
    opacity: 0;
    transform: rotateY(90deg);
  }
  .my-company-enter-to {
    opacity: 1;
    transform: rotateY(0deg);
  }
  .my-company-enter-active {
    /* transition: opacity 5s; */
    transition-property: opacity, transform;
    transition-duration: 5s;
  }
  /* .my-game-loge {
    margin: 10% 20% 0 0;
    width: 35%;
    min-width: 300px;
    height: 25%; 
    width: 400px;
    height: 200px;
  } */
</style>


