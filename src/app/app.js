import $ from '@/utils/query'
import '@/utils/p2d'
import { attachTo } from '@/utils/webgl'

import { HSLstringToRGB } from './utils/utility'
import Themer from './utils/themer'

let themer

document.addEventListener('DOMContentLoaded', () => {
    const updateValues = () => {
        const styleTextNormal = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--text-color--normal')

        const styleTextRicher = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--text-color--richer')

        const styleTextHighlight = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--text-color--highlight')

        const styleBackground = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background')

        const styleBackgroundContent = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--background--content')

        // Update our global object with the app colors.
        window.color = {
            textNormal: HSLstringToRGB(styleTextNormal),
            textRicher: HSLstringToRGB(styleTextRicher),
            textHighlight: HSLstringToRGB(styleTextHighlight),
            background: HSLstringToRGB(styleBackground),
            backgroundContent: HSLstringToRGB(styleBackgroundContent),
        }
    }

    const MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type == 'attributes') {
                updateValues()
                console.log('Theme changed')
            }
        })
    })

    observer.observe(document.documentElement, {
        attributes: true, //configure it to listen to attribute changes
    })

    updateValues() // DISABLE TO FIX COLORS ON PARTICLES IN P2D

    const app = $('#app')

    const button = $('<button>')
    button.className = 'btn btn--theme-switcher'
    button.innerHTML = 'this should have a name. Something must be wrong.'
    app.appendChild(button)
    app.appendChild(button)

    const posts = $('<div>')
    posts.className = 'post-content'
    app.appendChild(posts)

    // Setup our post-content div..
    const post = $('<div>')
    post.className = 'post-content'
    app.appendChild(post)

    // ... and lets add a P2D demo for testing.
    const p2dEl = $('<div>')
    p2dEl.id = '111'
    post.appendChild(p2dEl)

    themer = new Themer({
        defaultTheme: 'dark',
        themes: ['light', 'dark', 'purple', 'swamp'],
        className: button.className,
        themedElement: 'html',
        event: 'click',
    })

    const p2dWebGL = $('<div>')
    p2dWebGL.id = 'webgl'
    p2dWebGL.className = 'demo'
    post.appendChild(p2dWebGL)
    window.attachTo(p2dWebGL.id)
})
