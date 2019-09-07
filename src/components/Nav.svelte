<script>
    export let segment
</script>

<style>
    nav {
        font-weight: 600;
        padding: 0 1em;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    .selected {
        color: var(--text);
        position: relative;
        display: inline-block;
    }

    .selected::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        display: block;
    }

    a {
        text-decoration: none;
        margin-top: 20px;
        padding: 0em 2em;
        display: block;
    }

    ul {
        display: flex;
        justify-content: center;
    }
</style>

<nav>
    <ul>
        <li>
            <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
        </li>
        <li>
            <a class={segment === 'about' ? 'selected' : ''} href="about">
                about
            </a>
        </li>
        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
        <li>
            <a
                rel="prefetch"
                class={segment === 'blog' ? 'selected' : ''}
                href="blog">
                blog
            </a>
        </li>
    </ul>
</nav>
<hr>
