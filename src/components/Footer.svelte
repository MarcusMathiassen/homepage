<script>
    import { onMount } from 'svelte'

    let theme
    let themeStyle

    const themes = ['light', 'dark'] // 'trueDark'
    const themeStyles = ['modern', 'retro']

    onMount(() => {

        // Listen to the OS theme changes and make sure the text is up to date.
        window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
            theme = window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
        })


        // Restore the last used theme from the sessionStorage.
        // This will maintain the chosen theme when the user reloads the page.
        let lastThemeUsed = sessionStorage.getItem('theme')
        if (lastThemeUsed) {
            document.documentElement.setAttribute('theme', lastThemeUsed)
            theme = lastThemeUsed
        }

        let lastThemeStyleUsed = sessionStorage.getItem('theme-style')
        if (lastThemeStyleUsed) {
            document.documentElement.setAttribute('theme-style', lastThemeStyleUsed)
            themeStyle = lastThemeStyleUsed
        }
        
        theme = document.documentElement.getAttribute('theme')
        themeStyle = document.documentElement.getAttribute('theme-style')
    })

</script>

<style lang="sass">
    footer
        text-align: center
        background: none
        font-size: 0.75em
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
</template>
<!-- theme-style -->
<button on:click = {() => {
    const activeThemeStyle = document.documentElement.getAttribute('theme-style')
    const i = themeStyles.findIndex(t => t === activeThemeStyle)
    const nextThemeStyle = themeStyles[(i + 1) % themeStyles.length]
    document.documentElement.setAttribute('theme-style', nextThemeStyle)
    
    themeStyle = nextThemeStyle
    sessionStorage.setItem('theme-style', themeStyle)

}}>{themeStyle}</button>

<!-- theme -->
<button on:click = {() => {
    const activeTheme = document.documentElement.getAttribute('theme')
    const i = themes.findIndex(t => t === activeTheme)
    const nextTheme = themes[(i + 1) % themes.length]
    document.documentElement.setAttribute('theme', nextTheme)

    theme = nextTheme
    sessionStorage.setItem('theme', theme)

}}>{theme}</button>
