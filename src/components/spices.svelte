<script lang="coffee">

    import { onMount } from 'svelte'

    theme = ''
    themeStyle = ''

    themes = ['light', 'dark']
    themeStyles = ['modern', 'retro']

    onMount () =>

        window.matchMedia('(prefers-color-scheme: light)').addListener () =>
            theme = if window.matchMedia('(prefers-color-scheme: light)').matches then 'light' else 'dark'

        # Restore the last used theme from the sessionStorage.
        # This will maintain the chosen theme when the user reloads the page.
        lastThemeUsed = sessionStorage.getItem('theme')
        if lastThemeUsed
            document.documentElement.setAttribute('theme', lastThemeUsed)
            theme = lastThemeUsed

        lastThemeStyleUsed = sessionStorage.getItem('theme-style')

        if lastThemeStyleUsed
            document.documentElement.setAttribute('theme-style', lastThemeStyleUsed)
            themeStyle = lastThemeStyleUsed

        theme = document.documentElement.getAttribute('theme')
        themeStyle = document.documentElement.getAttribute('theme-style')

    toggleThemeStyle = () =>
        activeThemeStyle = document.documentElement.getAttribute('theme-style')
        i = themeStyles.findIndex((t) => t == activeThemeStyle)
        nextThemeStyle = themeStyles[(i + 1) % themeStyles.length]
        document.documentElement.setAttribute('theme-style', nextThemeStyle)

        themeStyle = nextThemeStyle
        sessionStorage.setItem('theme-style', themeStyle)

    toggleTheme = () =>
        activeTheme = document.documentElement.getAttribute('theme')
        i = themes.findIndex((t) => t == activeTheme)
        nextTheme = themes[(i + 1) % themes.length]
        document.documentElement.setAttribute('theme', nextTheme)

        theme = nextTheme
        sessionStorage.setItem('theme', theme)


</script>

<!--     #retroToggle(on:click = '{toggleThemeStyle}')
        i.themeToggle(class="fontello icon-{themeStyle === 'retro' ? 'fire' : 'water' }")
 -->
<template lang="pug">

    #darkModeToggle(on:click = '{toggleTheme}')
        i.themeToggle(class="fontello icon-{theme === 'light' ? 'sun' : 'moon' }")

</template>
