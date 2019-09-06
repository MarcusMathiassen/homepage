<script>
    import { onMount } from 'svelte'

    onMount(() => {
        const modernize = document.getElementById('modernize')
        modernize.onclick = () => {
            const theme =
            document.documentElement.getAttribute('theme') === 'retro' ? 'modern' : 'retro'
            document.documentElement.setAttribute('theme', theme)
            modernize.innerText = theme
        }
    })
</script>

<style lang="sass">
    footer
        text-align: center
        background: none
    .icon-list
        display: flex
        justify-content: center

        a
            font-size: 2em
            margin: 5px
</style>

<template lang="pug">
- var sapper_href = "https://sapper.svelte.dev/"
- var svelte_href = "https://svelte.dev/"
- var webpack_href = "https://webpack.js.org"
- var sass_href = "https://sass-lang.com"
- var pug_href = "https://pugjs.org/api/getting-started.html"
- var font_href = "https://int10h.org/oldschool-pc-fonts/"
- var github_pages_href = "https://pages.github.com"
footer
    .faint.
        Built using
        #[b #[a(href=sapper_href target="_blank" rel="noopener") Sapper]]
        &
        #[b #[a(href=svelte_href target="_blank" rel="noopener") Svelte]]
        &
        #[b #[a(href=webpack_href target="_blank" rel="noopener") Webpack]]
        &
        #[b #[a(href=sass_href target="_blank" rel="noopener") Sass]]
        &
        #[b #[a(href=pug_href target="_blank" rel="noopener") Pug]]
    .faint Font: #[b #[a(href=font_href target="_blank" rel="noopener") PxPlus IBM VGA8]]
    .faint Host: #[b #[a(href=github_pages_href target="_blank" rel="noopener") Github Pages]]
    br
    button.btn.small#icantread
    button.btn.small#modernize retro
    .faint Contact: #[b mathiassenmarcus@gmail.com]

    .icon-list
        a(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener") #[i.fab.fa-github]
        a(href="https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ" target="_blank" rel="noopener") #[i.fab.fa-youtube]
</template>
