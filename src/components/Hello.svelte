
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
</style>


<template lang="pug">
.columns.is-centered.is-vcentered.has-text-centered
    .column.is-narrow
        .has-text-centered
            .avatar.standing
        h1.title.is-2.is-size-3-mobile.has-text-weight-bold(style='position: relative; padding-bottom: 1rem; padding-top: 1rem')
            span.group Marcus Mathiassen
        h2.subtitle.is-size-8-mobile.
            #[strong Software Developer] from Northern Norway

        .columns.is-3.is-centered
            .column.is-narrow(style='display: inline-flex')
                a.button.is-size-4.is-size-5-mobile.gallery.underline.has-text-weight-bold(href="gallery")
                    span.icon: i.fas.fa-images
                    span Gallery
            .column.is-narrow(style='display: inline-flex')
                a.button.is-size-4.is-size-5-mobile.blog.underline.has-text-weight-bold(href="blog")
                    span.icon: i.fas.fa-pen
                    span Blog
            .column.is-narrow(style='display: inline-flex')
                a.button.is-size-4.is-size-5-mobile.github.underline.has-text-weight-bold(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
                    span.icon: i.fab.fa-github
                    span Github
            .column.is-narrow(style='display: inline-flex')
                a.button.is-size-4.is-size-5-mobile.youtube.underline(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my Youtube")
                    span.icon: i.fab.fa-youtube
                    span Youtube
</template>
