<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog.json`)
		const posts = await res.json()
		return { posts }
	}
</script>

<script>
	export let posts
</script>

<template lang='pug'>

svelte:head
	title Blog

.content
	h3
		a.is-size-4.has-text-dark(href="blog" aria-label="checkout blog")
			span.icon(style='margin-right: 0.5rem'): i.fas.fa-book-open
			span Posts

	ul: +each('posts as post')
		li: a.button.is-text.is-block.has-text-left(rel='prefetch' href='blog/{post.slug}')
			span.name {post.title}
			+if('post.keys')
				span.badge
					+each('post.keys as key')
						span.tag {key}
</template>
