import $ from '@/utils/query'
import '@/utils/p2d'
import { attachTo } from '@/utils/webgl'

import { HSLstringToRGB } from 'utils/utility'
import Themer from 'utils/themer'

import avatar from 'images/avatar.png'
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

    const left = $('<div>')
    left.id = 'left'
    app.appendChild(left)

    const right = $('<div>')
    right.id = 'right'
    app.appendChild(right)

    const header = $('<div>')
    header.id = 'header'
    left.appendChild(header)

    const marcus = $('<h1>')
    marcus.id = 'header-marcus'
    marcus.innerText = 'Marcus'
    header.appendChild(marcus)

    const mathiassen = $('<h1>')
    mathiassen.id = 'header-mathiassen'
    mathiassen.innerText = 'Mathiassen'
    header.appendChild(mathiassen)

    const picture = $('<img>')
    picture.src = avatar
    picture.id = 'header-avatar'
    picture.alt = 'picture of me'
    picture.height = '250'
    header.appendChild(picture)

    // const button = $('<button>')
    // button.className = 'btn btn--theme-switcher'
    // button.innerHTML = 'this should have a name. Something must be wrong.'
    // left.appendChild(button)

    // Setup our post-content div..
    const post = $('<div>')
    post.className = 'post-content'
    right.appendChild(post)

    // ... and lets add a P2D demo for testing.
    const p2dEl = $('<div>')
    p2dEl.id = 'p2d'
    post.appendChild(p2dEl)

    // PS: I removed the button for now..
    themer = new Themer({
        defaultTheme: 'light',
        themes: ['light', 'dark'],
        className: "",
        themedElement: 'html',
        event: 'click',
    })

    // const p2dWebGL = $('<div>')
    // p2dWebGL.id = 'webgl'
    // p2dWebGL.className = 'demo'
    // post.appendChild(p2dWebGL)
    // window.attachTo(p2dWebGL.id)
})
