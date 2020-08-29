<script>
	import FancyText from './FancyText.svelte'
</script>

<style lang="sass">
a
	border-radius: 0.3em
	padding: 0.3em 0.5em
	background: rgba(var(--text-base), 0.03) !important
	&:hover
		background: rgba(var(--text-base), 0.04) !important
</style>

<template lang="pug">
.avatar.sitting
.has-text-centered
	a.is-size-2.has-text-weight-bold(href="mailto:hello@mathiassen.dev" aria-label="Contact me")
		FancyText(text='say hello')
</template>

