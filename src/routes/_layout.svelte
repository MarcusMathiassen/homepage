<script>
    import Footer from '../components/Footer.svelte'
    import { onMount } from 'svelte'

    export let segment
    $: segment = segment === undefined ? 'home' : segment
</script>

<style lang="sass">
    main
        margin: 0px
        width: 100%
        height: 100%
        position: relative
        padding: 0
        padding-top: 20px

</style>

<template lang="pug">
    <!-- Nav(segment='{segment}') -->
    main: slot
    <!-- Spices -->
    Footer
</template>
