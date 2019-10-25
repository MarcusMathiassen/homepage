<script lang="coffee">
    segment = undefined
    export { segment }
</script>

<style lang="sass">

    nav
        position: relative
        margin-top: 15px
        font-weight: 600
    ul
        margin: 0
        padding: 0

    ul::after
        content: ''
        display: block
        clear: both
    li
        display: block
        float: left
        margin: 0
        padding: 0
    .selected
        color: var(--text)
    .selected::after
        position: absolute
        display: block
    a
        color: rgba(var(--text-base), 0.5)
        margin-top: 0px
        padding: 0em 1em
        display: block
    ul
        display: flex
        justify-content: center
</style>

<template lang="pug">

    nav: ul: +each("['home', 'about'] as page")
                li: a(class = "{segment === page ? 'selected' : ''}" href = "{page === 'home' ? '.' : page}") {page}
</template>
