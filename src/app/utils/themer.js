import $ from './query'
import CircleArray from './circle-array'

export default class Themer {
    constructor(config) {
        this.defaultTheme = config.defaultTheme
        this.themes = new CircleArray(config.themes)
        this.className = config.className
        this.event = config.event
        this.themedElement = config.themedElement

        let startingTheme = this.defaultTheme
        // Check if the browser supporst the query. If not, set it manually
        if (
            window.matchMedia('(prefers-color-scheme: light)').media !=
            'not all'
        ) {
            // The OS preference overrides the app preference.
            // So we watch on changes and update appropriataly.
            const res = window.matchMedia('(prefers-color-scheme: light)')
            res.addListener(this.osUpdateTheme.bind(this))
            this.osUpdateTheme(res)
        } else {
            const el = $(this.themedElement)[0]
            el.setAttribute('theme', this.defaultTheme)
        }
    }

    osUpdateTheme(query) {
        const el = $(this.themedElement)[0]
        query.matches
            ? el.setAttribute('theme', 'light')
            : el.setAttribute('theme', 'dark')

        const theme = query.matches ? 'light' : 'dark'
        $(`.${this.className}`).forEach(element => {
            element.textContent = theme
        })

        if (theme != this.themes.curr()) this.themes.next()
        return theme
    }
}
