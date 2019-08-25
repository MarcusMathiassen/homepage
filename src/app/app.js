import $ from '@/utils/query'
import { attachTo } from '@/utils/webgl'

import Color from "color";

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
        textNormal: Color(styleTextNormal.trim()).object(),
        textRicher: Color(styleTextRicher.trim()).object(),
        textHighlight: Color(styleTextHighlight.trim()).object(),
        background: Color(styleBackground.trim()).object(),
        backgroundContent: Color(styleBackgroundContent.trim()).object(),
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.matchMedia('(prefers-color-scheme: light)').addListener(updateValues)
    const app = $('#app')
    updateValues()
    window.attachTo('p2d')
})
