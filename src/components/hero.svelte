<style lang="sass">

    .landing-page--title
        font-size: 1.5em
        font-weight: 700
        padding: 0 
        margin: 0

    .landing-page--subtitle
        margin: 0
        padding: 0
        font-size: 1em
        opacity: 0.8

    .landing--page--hero
        margin: 20px
        width: 300px
        height: 300px

    .contact-me
        font-weight: 600
    .icon-list
        display: flex
        justify-content: center
        a
            font-size: 2em
            margin: 5px
</style>

<template lang="pug">

    img.landing--page--hero(src="avatar.png" alt="picture of me" width="300" height="300")
    .landing-page--title Marcus Mathiassen
    .landing-page--subtitle.
        I do compilers and graphics.#[br]
        Interested in systems design and UX.
    br
    a.contact-me(href="mailto:mathiassenmarcus@me.com") Contact Me
    .icon-list
        a(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener") #[i.fab.fa-github]
        a(href="https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ" target="_blank" rel="noopener") #[i.fab.fa-youtube]

</template>
