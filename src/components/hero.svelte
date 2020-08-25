
<script>

    import FancyText from './FancyText.svelte'
    import TopDropTexts from './TopDropTexts.svelte'

</script>

<style lang="sass">

.subtitle
    line-height: 2

</style>


<template lang="pug">
section.hero
    .hero-body
        .container.has-text-centered
            .columns.is-centered.is-vcentered
                .column.is-narrow
                    .has-text-centered
                        .avatar.standing
                    h1.title.is-2 Marcus Mathiassen
                    h2.subtitle.
                        #[strong Software Developer] from Northern Norway.
                        #[br]
                        Currently interested in #[TopDropTexts(texts="{['SDFs', 'voxels', 'compilers','pathtracing']}")]

                    .columns.is-3.is-centered
                        .column.is-narrow(style='display: inline-flex')
                            a.button.is-size-4.gallery.underline.has-text-weight-bold(href="gallery")
                                span.icon: i.fas.fa-images
                                span Gallery
                        .column.is-narrow(style='display: inline-flex')
                            a.button.is-size-4.blog.underline.has-text-weight-bold(href="blog")
                                span.icon: i.fas.fa-pen
                                span Blog
                        .column.is-narrow(style='display: inline-flex')
                            a.button.is-size-4.github.underline.has-text-weight-bold(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
                                span.icon: i.fab.fa-github
                                span Github
                        .column.is-narrow(style='display: inline-flex')
                            a.button.is-size-4.youtube.underline(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my Youtube")
                                span.icon: i.fab.fa-youtube
                                span Youtube

</template>
