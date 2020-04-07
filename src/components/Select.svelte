<script>

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let items
    export let isMulti = false
    export let maxShown = null
    
    export let value
    export let extract = null

    let select

</script>

<style lang='sass'>

select
    font-weight: 700
    border-radius: var(--border-radius)
    background: none
    color: currentColor !important
    border: none
    &:hover
        opacity: 0.8

.select:not(.is-multiple):not(.is-loading)::after
    border-color: currentColor

</style>

<template lang='pug'>

+if('isMulti')
    .select.is-multiple
        select(bind:this='{select}' multiple bind:value size='{maxShown || items.length}')
            +each('items as item')
                option(value='{item}') {extract ? extract(item) : item}
    +else()
        .select
            select(bind:this='{select}' bind:value)
                +each('items as item')
                    option(value='{item}') {extract ? extract(item) : item}

</template>