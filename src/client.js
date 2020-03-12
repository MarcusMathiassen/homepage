import * as sapper from '@sapper/app'

// set the theme to whatever the system theme is
document.documentElement.setAttribute(
	'theme',
	window.matchMedia('(prefers-color-scheme: light)').matches
		? 'light'
		: 'dark'
)

// listen to changes to the system theme
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

sapper.start({
	target: document.querySelector('#sapper'),
})
