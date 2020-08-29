<script context='module'>
	export async function preload({params, query}) {
		const res = await this.fetch(`gallery.json`)
		const assets = await res.json()
		return { assets }
	}
</script>
<script>
	export let assets
</script>

<style lang='sass'>

img, video
	 width: 100%
	 height: auto
</style>

<template lang='pug'>

svelte:head
	title Gallery

.content
	h1.title Snippets of my work in (mostly) chronological order

.section
	.container
		.columns.is-multiline.is-gapless
			+each('assets as asset')
				+if ("asset.contentType.startsWith('image')")
					.column.is-one-third: img(src='{asset.url}' alt='{asset.name}')
					+else()
						.column.is-one-third: video(src='{asset.url}' autoplay loop muted playsinline)
</template>