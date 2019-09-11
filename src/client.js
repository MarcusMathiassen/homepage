import './main.sass'
import * as sapper from '@sapper/app'

import Color from 'color'
import { theme, themeStyle } from './components/stores.js'

const updateGlobalColorVariables = () => {
    const setStyle = (e, p, v) => e.style.setProperty(p, v)
    const getStyleAsRGB = (e, p) =>
        Color(
            getComputedStyle(e)
                .getPropertyValue(p)
                .trim()
        ).object()
    window.color = {
        text: getStyleAsRGB(document.documentElement, '--text'),
        background: getStyleAsRGB(document.documentElement, '--background'),
    }
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type == 'attributes') {
            updateGlobalColorVariables()
            theme.set(document.documentElement.getAttribute('theme'))
            themeStyle.set(document.documentElement.getAttribute('theme-style'))
        }
    })
})

observer.observe(document.documentElement, {
    attributes: true, //configure it to listen to attribute changes
})

window
    .matchMedia('(prefers-color-scheme: light)')
    .addListener(updateGlobalColorVariables)

updateGlobalColorVariables()

window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
    document.documentElement.setAttribute(
        'theme',
        window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'
    )
})

document.documentElement.setAttribute(
    'theme',
    window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
)

sapper
    .start({
        target: document.querySelector('#sapper'),
    })
    .then(() => {
        console.log('client-side app has started')
    })
