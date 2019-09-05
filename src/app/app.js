import { attachTo } from '@/utils/webgl'

import Color from 'color'
import $ from './utils/query'

// import favicon from 'images/favicon.ico'
// import avatar from 'images/avatar.png'
// import avatar_pixelated from 'images/avatar_pixelated.jpg'

const updateGlobalColorVariables = () => {
    const setStyle = (e, p, v) => e.style.setProperty(p, v)
    const getStyleAsRGB = (e, p) =>
        Color(
            getComputedStyle(e)
                .getPropertyValue(p)
                .trim()
        ).object()
    window.color = {
        textNormal: getStyleAsRGB(
            document.documentElement,
            '--text-color--normal'
        ),
        textRicher: getStyleAsRGB(
            document.documentElement,
            '--text-color--richer'
        ),
        textHighlight: getStyleAsRGB(
            document.documentElement,
            '--text-color--highlight'
        ),
        background: getStyleAsRGB(document.documentElement, '--background'),
        backgroundContent: getStyleAsRGB(
            document.documentElement,
            '--background--content'
        ),
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // This will make sure our global color variables are updated when
    // the user changes color schemes.
    window
        .matchMedia('(prefers-color-scheme: light)')
        .addListener(updateGlobalColorVariables)

    // Initialize the global color variables
    updateGlobalColorVariables()

    // Toggles the global font on click
    // @Audit, @HardCoded
    const l1 = 'change to a readable font'
    const l2 = 'change to an unreadable font'
    const cantread = $('#icantread')
    const readableFont = `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`
    const pixelatedFont = 'pxplus_ibm_vga8regular'
    cantread.innerText = l1
    cantread.onclick = () => {
        cantread.innerText = cantread.innerText === l1 ? l2 : l1
        const font = getComputedStyle(document.documentElement)
            .getPropertyValue('--font')
            .trim()
        document.documentElement.style.setProperty(
            '--font',
            font === pixelatedFont ? readableFont : pixelatedFont
        )
    }

    // // @Messy, @BetterWay
    // const hero = $('#avatar')
    // if (hero) {
    //     hero.src = avatar_pixelated
    //     hero.onmouseover = () => {
    //         const src = hero.getAttribute('src') === avatar_pixelated ? avatar :  avatar_pixelated
    //         hero.setAttribute('src', src)
    //     }
    //     hero.onmouseleave = () => {
    //         const src = hero.getAttribute('src') === avatar_pixelated ? avatar :  avatar_pixelated
    //         hero.setAttribute('src', src)
    //     }
    // }

    window.attachTo('p2d')
})
