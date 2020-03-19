<script context="module">
	import marked from 'marked'
	export async function preload({ params }) {
		const { slug } = params
		const res = await this.fetch(`blog/${slug}.json`);
		let post = await res.json();
		post.markdown = marked(post.markdown)
		return { post }
	}
</script>

<script>
	export let post
</script>

<style lang='sass'>
</style>

<template lang='pug'>

svelte:head
	title {post.title}

</template>

<div class="content">
	{@html post.markdown}
</div>