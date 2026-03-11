<template>
    <div v-for="item in data" class="tree-wrapper" @click.stop="clickTap(item, $event)">
        <input type="checkbox"><span>{{ item.name }}</span></input>
        <!-- vue3中可以直接使用文件名来递归 -->
        <!-- <tree v-if="item?.children?.length" :data="item?.children"></tree> -->
        <!-- <xiaoman v-if="item?.children?.length" :data="item?.children"></xiaoman> -->
        <thirdway v-if="item?.children?.length" :data="item?.children"></thirdway>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

defineProps<{
    data?: Tree[]
}>()

// 第三种方式 装 unplugin-vue-define-options
// 最新版(vue3.3+)好像能直接使用 defineOptions
defineOptions({
    name: 'thirdway'
})

const clickTap = (item:Tree, e: any) => {
    console.log(item, e)
}
</script>

<!-- 第二种方式使用递归组件的方式 再写一个script定义名称 -->
<!-- <script lang="ts">
export default {
    name: 'xiaoman'
}
</script> -->

<style scoped lang="scss">
.tree-wrapper {
    margin-left: 10px;
}
</style>