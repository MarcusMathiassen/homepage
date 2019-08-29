import { attachTo } from '@/utils/webgl'

import Color from 'color'

const setStyle = (e, p, v) => e.style.setProperty(p, v)
const getStyleAsRGB = (e, p) =>
    Color(
        getComputedStyle(e)
            .getPropertyValue(p)
            .trim()
    ).object()

const updateGlobalColorVariables = () => {
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

    window.attachTo('p2d')
})
