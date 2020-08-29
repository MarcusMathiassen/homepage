<script>
	export let segment
	let burger = false
	const toggleBurger = () => burger = !burger
</script>

<style lang='sass'>
	nav
		padding: 1rem 0rem
	a
		display: inline-flex
		color: rgba(var(--text-base), 0.8) !important
		background: var(--background) !important
		--a: 0.0
		border-radius: 0.5em
		margin: 1rem
		padding: 0.5rem 1rem
		background: rgba(var(--text-base), 0.03) !important
		::after
		&:hover
			--a: 0.3
			color: var(--c) !important

	.selected
		--a: 0.2
		color: var(--c) !important
		position: relative
		background: none
		border: none
	.label
		color: currentColor
	
	@media screen and (max-width: 600px)
		.label
			display: none

</style>

<template lang='pug'>
nav
	.container.has-text-weight-bold.has-text-centered
		a.group.home(class:selected="{segment === undefined}" href=".")
			span.icon: i.fas.fa-home
			span.label Home
		a.group.gallery(class:selected="{segment === 'gallery'}" href="gallery")
			span.icon: i.fas.fa-images
			span.label Gallery
		a.group.blog(class:selected="{segment === 'blog'}" href="blog")
			span.icon: i.fas.fa-pen
			span.label Blog
		a.group.about(class:selected="{segment === 'about'}" href="about")
			span.icon: i.fas.fa-portrait
			span.label About
</template>
				<!-- a.navbar-item(on:click='{toggleBurger}' class:selected="{segment === 'projects'}" href="projects")
					span.icon: i.fas.fa-layer-group
					span Projects -->

