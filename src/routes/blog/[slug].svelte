<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const post = await res.json();
		return { post }
	}
</script>

<script>
	import marked from 'marked'
	export let post
</script>

<template lang='pug'>

svelte:head
	title {post.title}

.content
	.title {post.title}
	p {@html marked(post.markdown)}

</template>
