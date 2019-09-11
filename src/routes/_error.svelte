<script>
    export let status
    export let error

    const dev = process.env.NODE_ENV === 'development'
</script>

<style lang="sass">
    h1,p
        margin: 0 auto

    h1
        font-size: 2.8em
        font-weight: 700
        margin: 0 0 0.5em 0
    p 
        margin: 1em auto

    @media (min-width: 480px)
        h1
            font-size: 4em
</style>

<template lang="pug">
    
    svelte:head
        title {status}

    h1 {status}

    p {error.message}

    +if('dev && error.stack')
        pre {error.stack}

</template>
