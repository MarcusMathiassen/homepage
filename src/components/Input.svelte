<script>

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let value = ''
    export let placeholder = ''
    export let delay

</script>

<style lang='sass'>

input
    border-radius: var(--border-radius)
    background: var(--secondary)
    color: var(--text)
    border: 1px solid var(--third)
    &:hover
        border: 1px solid var(--third)

    &::placeholder
        color: rgba(var(--text-base), 0.3)


</style>

<template lang='pug'>

input.input.is-large.is-bold(type='text' bind:value '{placeholder}')

</template>
