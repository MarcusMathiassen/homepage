import { attachTo } from '@/utils/webgl'

import Color from 'color'
import $ from './utils/query'

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
    cantread.innerText = l1
    cantread.onclick = () => {
        cantread.innerText = cantread.innerText === l1 ? l2 : l1
        const font = getComputedStyle(document.documentElement).getPropertyValue('--font').trim()
        document.documentElement.style.setProperty('--font', font === 'Helvetica' ? 'pxplus_ibm_vga8regular' : 'Helvetica');
    }

    // fetch('about.html').then(res => {
    //     return res.text()
    // }).then(text => {
    //     console.log(text)
    //     $('#app').innerHTML = text
    // })

    window.attachTo('p2d')
})
