<script>
    import { onMount } from 'svelte'

    onMount(() => {


        const themeEl = document.getElementById('themeToggler')
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            themeEl.innerText = window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
        })

        const themes = ['light', 'dark', 'trueDark']
        themeEl.onclick = () => {

            const activeTheme = document.documentElement.getAttribute('theme')
            const i = themes.findIndex(t => t === activeTheme)
            const nextTheme = themes[(i + 1) % themes.length]

            document.documentElement.setAttribute('theme', nextTheme)

            themeEl.innerText = nextTheme
        }

        const modernize = document.getElementById('themeStyleToggler')
        const themeStyles = ['modern', 'retro', 'comic']
        modernize.onclick = () => {

            const activeThemeStyle = document.documentElement.getAttribute('theme-style')
            const i = themeStyles.findIndex(t => t === activeThemeStyle)
            const nextThemeStyle = themeStyles[(i + 1) % themes.length]

            document.documentElement.setAttribute('theme-style', nextThemeStyle)

            modernize.innerText = nextThemeStyle
        }

        // Prime them both
        themeEl.innerText = document.documentElement.getAttribute('theme')
        modernize.innerText = document.documentElement.getAttribute('theme-style')
    })
</script>

<style lang="sass">
    footer
        text-align: center
        background: none
        font-size: 0.75em
    .icon-list
        display: flex
        justify-content: center
        a
            font-size: 2em
            margin: 5px

</style>

<template lang="pug">
footer
    hr
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
    button.btn.small#themeStyleToggler
    button.btn.small#themeToggler
    .faint Contact: #[p mathiassenmarcus@gmail.com]

    .icon-list
        a(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener") #[i.fab.fa-github]
        a(href="https://www.youtube.com/channel/UCZ7FbQ4Bvi3GkV0k5ENoXYQ" target="_blank" rel="noopener") #[i.fab.fa-youtube]
</template>
