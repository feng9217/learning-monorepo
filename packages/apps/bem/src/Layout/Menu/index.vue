<template>
  <div class="xm-menu">Menu</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss">
@include b(menu) {
  min-width: 200px;
  height: 100%;
  border-right: 1px solid #ccc;
}
</style>
