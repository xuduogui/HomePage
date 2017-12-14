<template>
  <div id="app">
    <div class="ourlogo">
        <img src="../src/assets/Mylogo.png" alt="logo" width="33%" height="33%">
    </div>
    <div class="content-box">
      
      <div class="nav-all">
        <!-- 插入导航 -->
        <app-nav style="height:100%;" :btwidth=navw></app-nav>
      </div>

      <div class="index-box">
        <router-link to="/one" class="router-style"></router-link>
        <router-link to="/two" class="router-style"></router-link>
        <router-link to="/three" class="router-style"></router-link>
      </div>
    </div>
    <transition name="my-routers">
      <router-view class="back-ground" />
    </transition>
  </div>
</template>

<script>
import AppNav from "./components/AppNav";
export default {
  name: 'app',
  // date () {
  //   return {
  //     navw: document.documentElement.clientWidth,
  //     boxh: document.documentElement.clientHeight
  //   }
  // },
  computed: {
    navw () {
      return document.documentElement.clientWidth
    },
    boxh () {
      return document.documentElement.clientHeight
    }
  },
  mounted () {
    // 设置高度等于可视高度
    let app = document.querySelector('#app');
    app.style.height = this.boxh + 'px';
    // 设置导航隐藏的宽度和高度
    let navindex = document.querySelector('.nav-all');
    navindex.style.height = this.navw/10 + 'px';
    // navindex.style.width = this.navw/10 + 'px';
  },
  components: {AppNav}
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-ground {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
}
.content-box {
  border: none;
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: center;
}
.index-box {
  position: absolute;
  right: 0;
  top: 45%;
  display: block;
  /* justify-content: center; */
  /* align-items: center; */

}
.router-style {
  display: block;
  width: 0.3rem;
  height: 3rem;
  border-radius: 10px;
  background: #fff;
  margin-right: 4px;
  margin-bottom: 1rem;
  opacity: .5;
}
.my-routers-enter-active, .my-routers-leave-active {
  transition: top .5s;
}
.my-routers-enter {
  top: 100%;
}
.my-routers-leave-to {
  top: -100%;
}
.nav-all {
  width: 70%;
  margin-top: 3%;
  margin-right: -25%;
}
.ourlogo {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 15%;
}
</style>
