<template>
  <div class="xm-content">
    Content
    <div class="xm-content__items" v-for="item in 20" :key="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;
  @include e(items) {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
