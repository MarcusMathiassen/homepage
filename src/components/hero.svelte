<script>
    import avatar from "../assets/avatar.jpg"
</script>

<style lang="sass">
    .landing-page
        @media only screen and (max-width: 800px)
            margin: 0
            padding: 0
            font-size: 1.5em

    .landing-page--title
        font-size: 1.5em
        font-weight: 700
        padding: 0 
        margin: 0

    .landing-page--subtitle
        margin: 0
        padding: 0
        opacity: 0.75

    .landing--page--hero
        min-width: 230px
        min-height: 341px
        padding: 15px

    .contact-me
        font-weight: 700

    .icon-list
        display: flex
        justify-content: center
        a
            font-size: 2em
            margin: 5px
</style>

<template lang="pug">
.landing-page
    img.landing--page--hero(src='{avatar}' alt="picture of me")
    .landing-page--title Marcus Mathiassen
    .landing-page--subtitle.
        I do compilers and graphics.#[br]
        Interested in systems design and UX.
    br
    a.contact-me(href="mailto:mathiassenmarcus@me.com") Contact Me
    .icon-list
        a(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github") #[i.fontello.icon-github-circled]
        a(href="https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ" target="_blank" rel="noopener" aria-label="Checkout my YouTube") #[i.fontello.icon-youtube-play]

</template>
