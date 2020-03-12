<template lang="pug">
    header
        nav
            Avatar(size='{{x: 100, y: 100}}')
            span Marcus Mathiassen
            ul: +each("links as link")
                li
                    span.icon(class="icon fontello {link.icon}")
                    a(href="{link.url}") {link.name}
</template>

<script lang="coffee">
    import Avatar from "./avatar.svelte"

    segment = undefined
    export { segment }

    links = [
        {name: 'Github', icon: 'icon-github', url: 'https://github.com/MarcusMathiassen'},
        {name: 'Youtube', icon: 'icon-youtube', url: 'https://www.youtube.com/user/MathiassenMarcus'},
    ]

</script>

<style lang="sass">
    nav img
        width: 30px
</style>
