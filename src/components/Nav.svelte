<script>
	export let segment
	let burger = false

	const toggleBurger = () => burger = !burger
</script>

<style lang='sass'>
	img
		border-radius: 50%

	.navbar-item
	    color: var(--text)
	    background: var(--background) !important
	    &:hover
	        color: var(--link-color)
	        background: rgba(var(--text-base),0.03) !important
</style>

<template lang='pug'>

nav.is-fixed-top.navbar(role="navigation" aria-label="main navigation")
	.container
		.navbar-brand
			a.navbar-item(href='.')
				img(src="avatar.jpg" alt='picture of me')

			a.navbar-item.fancy-font(style='color: #6fbb89;' href="mailto:hello@mathiassen.dev" aria-label="Contact me")
				span.icon: i.fas.fa-envelope
				span Say Hello
			.navbar-burger.burger(on:click='{toggleBurger}' class:is-active='{burger}' role="button" aria-label="menu" aria-expanded="{burger}" data-target="navbarBasicExample")
				span(aria-hidden="true")
				span(aria-hidden="true")
				span(aria-hidden="true")

		.navbar-menu#navbarBasicExample(class:is-active='{burger}')
			.navbar-end
				a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === undefined}" href=".")
					span.icon: i.fas.fa-home
					span Home
				a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'gallery'}" href="gallery")
					span.icon: i.fas.fa-images
					span Gallery
				a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'blog'}" href="blog")
					span.icon: i.fas.fa-book-open
					span Blog
				a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'about'}" href="about")
					span.icon: i.fas.fa-portrait
					span About
</template>
				<!-- a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'projects'}" href="projects")
					span.icon: i.fas.fa-layer-group
					span Projects -->

