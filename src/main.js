import App from './App.svelte'
import Color from 'color'

const updateGlobalColorVariables = () => {
    const setStyle = (e, p, v) => e.style.setProperty(p, v)
    const getStyleAsRGB = (e, p) =>
        Color(getComputedStyle(e)
                .getPropertyValue(p)
                .trim()
        ).object()
    window.color = {
        text: getStyleAsRGB(document.documentElement, '--text'),
        background: getStyleAsRGB(document.documentElement, '--background')
    }

    console.log('theme changed:', window.color)
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type == 'attributes') {
            console.log('attributes changed')
            updateGlobalColorVariables()
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

window
    .matchMedia('(prefers-color-scheme: light)')
    .addListener(() =>
        document.documentElement.setAttribute(
            'theme',
            window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light'
                : 'dark'
        )
    )

document.documentElement.setAttribute(
    'theme',
    window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
)

const app = new App({ target: document.body })

export default app
