<script>
    
    export let items
    export let label
    export let href


</script>

<style lang='sass'>

.item
    display: block
    padding-left: 1rem
    border-radius: 0.1rem
    &:hover
        border: 1px solid var(--text)

.is-alt
    background: rgba(#fff, 0.2)

@media (prefers-color-scheme: dark)
    .is-alt
        background: rgba(#fff, 0.01)

</style>

<template lang='pug'>
    ul: +each('items as item, i')
        li.item(class:is-alt='{i % 2 == 0}')
            slot({item})

</template>
