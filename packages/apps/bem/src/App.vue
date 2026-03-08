<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <div class="xm-text">
    1111
    <div class="xm-text__inner">el222</div>
    <div class="xm-text--success">sucess333</div>
  </div> -->
  <Layout></Layout>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, onMounted } from 'vue'
import Layout from './Layout/index.vue'
</script>

<style lang="scss">
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
// bem
@include b(text) {
  color: red;
  @include e(inner) {
    color: blue;
  }
  @include m(success) {
    color: green;
  }
}

#app {
  @include bfc;
}
</style>
