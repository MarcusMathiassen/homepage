import { attachTo } from '@/utils/webgl'

import Color from 'color'
import $ from './utils/query'
import avatar from 'images/avatar.png'


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

    const burger = $('#burger')
    burger.onclick = () => {
        burger.innerText = burger.innerText === '✖' ? '☰' : '✖'
        $('.nav--list').forEach(el => el.style.display =  el.style.display === 'block' ? 'none' : 'block')
    }

    // Toggles the global font on click
    // @Audit, @HardCoded
    $('#icantread').onclick = () => {
        $('#icantread').innerText = $('#icantread').innerText === 'font is painful' ? 'no no ill take the pain' : 'font is painful'
        const font = getComputedStyle(document.documentElement).getPropertyValue('--font').trim()
        document.documentElement.style.setProperty('--font', font === 'Helvetica' ? 'pxplus_ibm_vga8regular' : 'Helvetica');
    }

    window.attachTo('p2d')
})
