
<script>
    export let texts

	let cIndex = 0
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

    let text = texts[(cIndex) % texts.length]
    let color = colors[(cIndex) % colors.length]
    cIndex++
    setInterval(() => {
        text = texts[(cIndex) % texts.length]
        color = colors[(cIndex) % colors.length]
        cIndex++
    }, 2000)

</script>

<style lang="sass">

@keyframes fadeOut
    0%
        opacity: 0.0
    50%
        opacity: 1.0
    100%
        opacity: 0.0

span
	font-weight: 700
    animation: 1s fadeOut infinite
	--a: 0.3
	color: currentColor
	position: relative
	background: none
	border: none
</style>


<template lang="pug">
	span(style='color: {color}') {text}
</template>
