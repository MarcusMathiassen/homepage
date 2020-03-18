<script>
    import { stores } from '@sapper/app'
    const { session } = stores()

    let posts = $session.posts

</script>

<style lang='sass'>

.key
    font-weight: 700
    color: rgba(var(--text-base), 0.8)
    background: rgba(var(--text-base), 0.1)

</style>

<template lang="pug">

    h3
        a.is-size-3(href="blog" aria-label="checkout blog")
            span.icon(style='margin-right: 0.8rem'): i.fas.fa-book-open
            span Posts

    ul: +each('posts as post')
        li: a.is-flex.button.is-text(style='justify-content: end;' rel='prefetch' href='blog/{post.slug}')
            span.name {post.title}
            +if('post.keys')
                span.badge
                    +each('post.keys as key')
                        span.tag.key {key}
</template>
