<template>
    <section>
        <header class="header">
            <!-- 具名插槽 -->
            <slot name="header"></slot>
        </header>
        <main class="main">
            <!-- 匿名插槽 -->
            <!-- <slot></slot> -->
            <!-- 作用域插槽 还能把值传出去 -->
            <div v-for="(item, index) in data">
                <slot :data="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
            <!-- <slot name="footer"></slot> -->
        </footer>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([
    {
        name: '张三',
        age: 33
    },
    {
        name: '韩莓',
        age: 30
    },
    {
        name: '小明',
        age: 31
    },
])
</script>

<style scoped lang="scss">
.header {
    height: 200px;
    background: red;
    color: #fff;
}
.main {
    height: 300px;
    background: green;
    color: #fff;
}
.footer {
    height: 200px;
    background: blue;
    color: #fff;
}
</style>