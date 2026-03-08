<template>
    <section>子级</section>
    <div>传值：{{ title }}</div>
    <div>传值：{{ arr }}</div>
    <button @click="send">给父组件传值</button>
    <div class="wraps">
        <div class="items" v-for="item in waterList" :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

// 接收传值
// const props = defineProps({
//     title: {
//         type: String,
//         default: ''
//     }
// })
// ts 还可以使用 withDefaults() 来定义默认值
// withDefaults(defineProps<{
//     title: string,
//     arr: number[]
// }>(), {
//     arr: () => [666]
// })
const props = defineProps<{
    title: string,
    arr: number[],
    list: any[]
}>()
console.log(props.title, '在 script 中使用需要定义一个变量')

onMounted(() => {
    init()
})

const waterList = reactive<any>([])
const heightList:number[] = [] // 维护每列当前高度
const gap = 20 // 间隔
const init = () => {
    const width = 130
    const x = document.body.clientWidth
    const column = Math.floor(x/width)
    for (let i = 0; i < props.list.length; i++) {
        // 初始列 (第一列)
        if (i < column) {
            props.list[i].left = i * width
            props.list[i].top = 0
            waterList.push(props.list[i])
            heightList.push(props.list[i].height + gap)
        } else {
            // 其它列
            let current = heightList[0] || 0
            let index = 0
            // 找出最小高度单位放置 item
            heightList.forEach((h, i) => {
                if (current > h) {
                    current = h
                    index = i
                }
            })
            props.list[i].top = current
            props.list[i].left = index * width
            // 更新最小高度：之前的高度 + 插入块的高度 + 间隔
            heightList[index] = current + props.list[i].height + gap
            waterList.push(props.list[i])
        }
    }
}

// 给父组件传值
const emit = defineEmits(['on-click'])
// 如果使用 ts 还可以用以下写法
// const emit = defineEmits<{
//     (e: 'on-click', name:string): void
// }>()
const send = () => {
    emit('on-click', '小满', '值 2!!!')
}

// 暴露属性 or 方法给父组件调用
defineExpose({
    name: '小满',
    open: () => {
        console.log(1)
    }
})
</script>

<style scoped lang="scss">
.wraps {
    position: relative;
    height: 100%;
    .items{
        position: absolute;
        width: 120px;
    }
}
</style>
