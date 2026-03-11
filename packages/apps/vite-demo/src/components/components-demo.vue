<template>
    <section>
        <cardVue></cardVue>
        <card></card>
        <treeVue :data="data"></treeVue>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import cardVue from './card.vue'
import treeVue from './tree.vue'

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

const data = reactive<Tree[]>([
    {
        name: "no.1",
        checked: false,
        children: [
            {
                name: "no.1-1",
                checked: false,
                children: [
                    {
                        name: "no.1-1-1",
                        checked: false,
                    },
                ],
            },
        ],
    },
    {
        name: "no.2",
        checked: false,
        children: [
            {
                name: "no.2-1",
                checked: false,
            },
        ],
    },
    {
        name: "no.3",
        checked: false,
    },
]);
</script>

<style scoped lang="scss">
section {
    text-align: left;
}
</style>