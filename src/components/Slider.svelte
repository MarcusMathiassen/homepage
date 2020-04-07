<script>

    export let value = 50
    export let min = 0
    export let max = 100
    export let delay
    export let orient = 'horizontal'

</script>

<style lang='sass'>

input
    width: 100%
    margin: 12.5px 0

input[orient=vertical]
    -webkit-appearance: slider-vertical
    transform: rotate(180deg)
    
</style>

<template lang='pug'>

input(bind:value type='range' '{min}' '{max}' '{orient}')

</template>
