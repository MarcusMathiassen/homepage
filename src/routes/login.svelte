<script>
	let email
	let password

	let isLoggingIn = false
	let login = e => {
		isLoggingIn = true
		console.log('login in.', e)
	}

	import ButtonColored from '../components/ButtonColored.svelte'

	import randomColor from 'randomcolor'
</script>

<style lang='sass'>

</style>

<template lang='pug'>

svelte:head
	title Login


section.section
	.content
		.container

			- var n = 0;
			while n++ < 99
				button.button(style="--c: {randomColor()}") @

			.columns.is-vcentered.is-centered
				.column.is-narrow
					.field
						p.control.has-icons-left.has-icons-right
							input.input(bind:value='{email}' placeholder='Email' type="email")
							span.icon.is-small.is-left: i.fas.fa-envelope
							span.icon.is-small.is-right: i.fas.fa-check
					.field
						p.control.has-icons-left.has-icons-right
							input.input(bind:value='{password}' placeholder='Password' type="password")
							span.icon.is-small.is-left: i.fas.fa-lock
				.column.is-narrow
					button.button.is-success.is-size-3(on:click='{login}' class:is-loading="{isLoggingIn}" class:is-static="{isLoggingIn}" style='color: var(--systemGreen) !important') Login
</template>
