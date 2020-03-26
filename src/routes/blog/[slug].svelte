<script context="module">
	export async function preload({ params }) {
		const { slug } = params
		const res = await this.fetch(`blog/${slug}.json`);
		let post = await res.json();
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

<div class="content wysiwyg">
	{@html post.html}
</div>