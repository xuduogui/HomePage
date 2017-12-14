<template>
  <div>
      <!-- <el-button type="danger" class="btx" @click="btControl">X</el-button> -->
      <transition name="my-nav" class="nav-items">
          <nav-item v-show="myNav" :navw=navw></nav-item>
      </transition>
  </div>
</template>

<script>
import NavItem from "./AppNav/NavItem";
export default {
    props: {
        'btwidth': {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            navw: this.btwidth/10,
            myNav: false
        };
    },
    mounted () {
        let btx = document.querySelector('.btx');
        btx.style.width = this.navw + 'px';
        btx.style.height = this.navw + 'px';
    },
    methods: {
        btControl () {
            this.myNav = !this.myNav
        }
    },
    components: {NavItem}
}
</script>
<style scoped>
    .btx {
        padding: 0;
        height: 100%;
        float: right;
    }
    .nav-items {
        float: right;
        height: 100%;
        width: 80%;
        overflow: hidden;
    }
    .my-nav-enter, .my-nav-leave-to {
        width: 0;
    }
    .my-nav-enter-to,.my-nav-leave {
        width: 80%;
    }
    .my-nav-enter-active,.my-nav-leave-active {
        transition: width .5s;
    }
</style>

