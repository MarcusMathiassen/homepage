<script lang="coffee">

    import { onMount } from 'svelte'
    segment = undefined
    export { segment }


    theme = ''
    themeStyle = ''

    themes = ['light', 'dark'] # 'trueDark'
    themeStyles = ['modern', 'retro']

    onMount () =>

        # Listen to the OS theme changes and make sure the text is up to date.
        window.matchMedia('(prefers-color-scheme: light)').addListener () =>
            theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

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

<style lang="sass">

    nav
        position: relative
        margin-top: 15px
        font-weight: 600
    ul 
        margin: 0
        padding: 0

    ul::after
        content: ''
        display: block
        clear: both
    li 
        display: block
        float: left
        margin: 0
        padding: 0
    .selected 
        color: var(--text)
    .selected::after
        position: absolute
        display: block
    a
        color: rgba(var(--text-base), 0.5)
        margin-top: 0px
        padding: 0em 1em
        display: block
    ul
        display: flex
        justify-content: center
    button
        font-size: 1em

    #darkModeToggle
        position: absolute
        top: 10px
        left: 20px

    #retroToggle
        position: absolute
        top: 10px
        right: 20px        

</style>

<template lang="pug">
    
    nav: ul: +each("['home', 'about', 'blog'] as page")
                li: a(class = "{segment === page ? 'selected' : ''}" href = "{page === 'home' ? '.' : page}") {page}

    button#retroToggle(on:click = '{toggleThemeStyle}')
        i.fas.fa-pepper-hot

    button#darkModeToggle(on:click = '{toggleTheme}')
        i(class="fas fa-{theme === 'dark' ? 'sun' : 'moon' }")

</template>
