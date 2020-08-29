
<script>
	export let text

	const colors = [
		'hsl(14,  100%, 53%)',
		'hsl(48,  100%, 47%)',
		'hsl(141, 53%,  53%)',
		'hsl(171, 100%, 41%)',
		'hsl(204, 71%,  53%)',
		'hsl(217, 71%,  53%)',
		'hsl(271, 100%, 71%)',
		'hsl(348, 86%, 61%)',
	]

</script>

<style lang="sass">

@keyframes fadeIn
	0%
		opacity: 0.3
	50%
		opacity: 1.0
	100%
		opacity: 0.3

span
	font-weight: 700
	animation: 1s fadeIn infinite
	--a: 0.3
	&::before
		content: ""
		width: 100%
		height: 3px
		background: currentColor !important
		opacity: var(--a) !important
		position: absolute
		left: 0
		bottom: 0
	color: currentColor
	position: relative
	background: none
	border: none
</style>


<template lang="pug">
+each("text as c, i")
	span(style=`animation-delay: {100*i}ms; color: {colors[i % colors.length]}`) {c}
</template>
