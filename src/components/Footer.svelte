<script>
    import { onMount } from 'svelte'

onMount(() => {
        const themeEl = document.getElementById('theme')
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            themeEl.innerText = window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
        })
        themeEl.onclick = () => {
            const theme =
            document.documentElement.getAttribute('theme') === 'light' ? 'dark' : 'light'
            document.documentElement.setAttribute('theme', theme)
            themeEl.innerText = theme
        }
        const modernize = document.getElementById('modernize')
        modernize.onclick = () => {
            const theme =
            document.documentElement.getAttribute('theme-style') === 'retro' ? 'modern' : 'retro'
            document.documentElement.setAttribute('theme-style', theme)
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
footer
    .faint.
        Built using
        #[b #[a(href="https://sapper.svelte.dev/" target="_blank" rel="noopener") Sapper]]
        &
        #[b #[a(href="https://svelte.dev/" target="_blank" rel="noopener") Svelte]]
        &
        #[b #[a(href="https://webpack.js.org" target="_blank" rel="noopener") Webpack]]
        &
        #[b #[a(href="https://sass-lang.com" target="_blank" rel="noopener") Sass]]
        &
        #[b #[a(href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noopener") Pug]]
    .faint Font: #[b #[a(href="https://int10h.org/oldschool-pc-fonts/" target="_blank" rel="noopener") PxPlus IBM VGA8]]
    .faint Host: #[b #[a(href="https://www.netlify.com/" target="_blank" rel="noopener") Netlify]]
    br
    button.btn.small#modernize modern
    button.btn.small#theme light
    .faint Contact: #[b mathiassenmarcus@gmail.com]

    .icon-list
        a(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener") #[i.fab.fa-github]
        a(href="https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ" target="_blank" rel="noopener") #[i.fab.fa-youtube]
</template>
