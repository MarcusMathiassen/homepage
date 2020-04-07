<script>
	export let segment
	let burger = false

	const toggleBurger = () => burger = !burger
</script>

<style lang='sass'>
	img
		border-radius: 50%

	.navbar-item
		color: rgba(var(--text-base), 0.8) !important
		background: var(--background) !important
		--a: 0.0
		&:hover
			--a: 0.3
		@media (max-width: 400px)
			padding: 0.5rem !important
		@media (min-width: 400px)
			&::before
				content: ""
				width: 100%
				height: 3px
				background: var(--c) !important
				opacity: var(--a) !important
				position: absolute
				left: 0
				bottom: 0

	.is-text
		border-radius: 0

	.selected
		--a: 0.2
		@media (min-width: 400px)
			&::before
				content: ""
				width: 100%
				height: 3px
				background: currentColor !important
				opacity: var(--a) !important
				position: absolute
				left: 0
				bottom: 0
		color: var(--c) !important
		position: relative
		background: none
		border: none
</style>

<template lang='pug'>

nav.is-fixed-top.navbar(role="navigation" aria-label="main navigation")
	.container.has-text-weight-bold
		.navbar-brand
			a.navbar-item(href='.')
				img(src="avatar.jpg" alt='picture of me')

			a.navbar-item.home(href="mailto:hello@mathiassen.dev" aria-label="Contact me")
				span.icon: i.fas.fa-envelope
				span Get in touch
			.navbar-item
				span.home Available for work
			.navbar-burger.burger(on:click='{toggleBurger}' class:is-active='{burger}' role="button" aria-label="menu" aria-expanded="{burger}" data-target="navbarBasicExample")
				span(aria-hidden="true")
				span(aria-hidden="true")
				span(aria-hidden="true")

		.navbar-menu#navbarBasicExample(class:is-active='{burger}')
			.navbar-end.has-text-centered
				a.navbar-item.home(on:click='{toggleBurger}' class:selected="{segment === undefined}" href=".")
					span.icon: i.fas.fa-home
					span Home
				a.navbar-item.gallery(on:click='{toggleBurger}' class:selected="{segment === 'gallery'}" href="gallery")
					span.icon: i.fas.fa-images
					span Gallery
				a.navbar-item.blog(on:click='{toggleBurger}' class:selected="{segment === 'blog'}" href="blog")
					span.icon: i.fas.fa-pen
					span Blog
				a.navbar-item.about(on:click='{toggleBurger}' class:selected="{segment === 'about'}" href="about")
					span.icon: i.fas.fa-portrait
					span About
</template>
				<!-- a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'projects'}" href="projects")
					span.icon: i.fas.fa-layer-group
					span Projects -->

