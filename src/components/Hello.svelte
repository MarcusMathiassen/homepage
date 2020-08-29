
<script>

    import FancyText from './FancyText.svelte'
    import TopDropTexts from './TopDropTexts.svelte'

</script>

<style lang="sass">
.hero-body
    padding-top: 1rem
.subtitle
    opacity: 0.8
    line-height: 2
.currently-interested-in
    font-size: 1rem
</style>


<template lang="pug">
.columns.is-centered.is-vcentered.has-text-centered
    .column.is-narrow
        .has-text-centered
            .avatar.standing
        h1.title.is-2.is-size-3-mobile.has-text-weight-bold
            span Marcus Mathiassen
        h2.subtitle.is-size-8-mobile.
            #[strong Software Developer] from Northern Norway.
            #[br]
            #[.currently-interested-in Currently interested in #[TopDropTexts(texts="{['SDFs', 'voxels', 'compilers','pathtracing']}")]]

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
