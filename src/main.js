import App from './App.svelte'

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
