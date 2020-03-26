<script context="module">
	export async function preload({ params }, session) {
		const posts = session.posts
		return { posts }
	}
</script>

<script>
	export let posts
</script>

<style lang='sass'>
.key
	font-weight: 700
	color: rgba(var(--text-base), 0.8)
	background: rgba(var(--text-base), 0.1)

.name
	color: var(--text) !important
</style>

<template lang="pug">

svelte:head
	title Blog

section.section
	.container
		.content
			.blog
				h3.has-text-weight-bold
					a.is-size-3.blog(href="blog" aria-label="checkout blog")
						span Blog
				ul: +each('posts as post')
					li: a.is-flex.button(style='justify-content: end;' rel='prefetch' href='blog/{post.slug}')
						span.name {post.title}
						+if('post.keys')
							span.badge
								+each('post.keys as key')
									span.tag.key {key}
</template>
