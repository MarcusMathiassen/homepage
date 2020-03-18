<style lang="sass">
.center
    display: block
    margin-left: auto
    margin-right: auto
    width: 50%

img
    border-radius: 50%
    margin-bottom: 2rem

.v1
    font-weight: 700
    color: red
.v2
    font-weight: 700
    color: blue

</style>


<template lang="pug">
section.hero
    .hero-body
        .container.has-text-centered
            .columns.is-centered.is-vcentered
                .column.is-narrow
                    img(src="avatar.jpg" width='200px' alt='picture of me')
                    h1.title.is-2 Marcus Mathiassen
                    h2.subtitle.
                        Interested in #[span.has-text-weight-bold.fancy-font graphics] and all things #[span.has-text-weight-bold.fancy-font UX].

                    .columns.is-3.is-centered
                        .column.is-narrow
                            a.button.is-text.is-size-4(href="gallery")
                                span.icon: i.fas.fa-images
                                span Gallery
                        .column.is-narrow
                            a.button.is-text.is-size-4(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
                                span.icon: i.fab.fa-github
                                span Github
                        .column.is-narrow
                            a.button.is-text.is-size-4(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my Youtube")
                                span.icon: i.fab.fa-youtube
                                span Youtube

</template>
