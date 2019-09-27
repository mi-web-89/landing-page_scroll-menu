<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>     
    </div> -->

    <!-- header -->
    <app-header></app-header>

    <!-- router -->
    <router-view />
    
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
   'appHeader' : Header,
   'appFooter' : Footer
  } 
}
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
@import "./assets/styles/icons.scss";

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
