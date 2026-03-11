<template>
    <section class="flex">
        <div v-for="(item, index) in data" class="tabs" :class="[active == index ? 'active' : '']" @click="switchCom(item, index)">
            <div>{{ item.name }}</div>
        </div>
    </section>
    <component :is="comId" class="com-shell"></component>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef } from "vue"
import aVue from './dynamicA.vue'
import bVue from './dynamicB.vue'
import cVue from './dynamicC.vue'

// component 属性 is 绑定一个ref对象
const comId = shallowRef(aVue)

const active = ref(0)

const data = reactive([
    // 使用markRaw后会添加 __skip__ 属性 
    // reactive碰到该属性就不会去劫持对象全部内容(跳过proxy代理) 避免性能浪费
    {
        name: 'A组件',
        com: markRaw(aVue)
    },
    {
        name: 'B组件',
        com: markRaw(bVue)
    },
    {
        name: 'C组件',
        com: markRaw(cVue)
    },
])

const switchCom = (item, index) => {
    comId.value = item.com
    active.value = index
}
</script>

<!-- 动态组件另一种写法 -->
<!-- 这样注册组件后 上面就不用套markraw -->
<!-- 直接 com: 'aVue1' -->
<!-- 同时 const comId = shallowRef('aVue1') -->
<script lang="ts">
import aVue1 from './dynamicA.vue'
import bVue1 from './dynamicB.vue'
import cVue1 from './dynamicC.vue'
export default {
    components: { aVue1, bVue1, cVue1 }
}
</script>

<style scoped lang="scss">
.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}
.active {
    background: skyblue;
}
.com-shell {
    width: 600px;
    height: 300px;
    border: 1px solid #ccc;
    margin-top: 10px;
}
</style>