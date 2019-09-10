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
        margin: 0;
        padding: 0;
    }

    .selected {
        color: var(--text);
    }

    .selected::after {
        position: absolute;
        display: block;
    }

    a {
        color: rgba(var(--text-base), 0.5);
        margin-top: 10px;
        padding: 0em 1em;
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
            <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
        </li>
        <li>
            <a class={segment === 'blog' ? 'selected' : ''} href="blog">blog</a>
        </li>
    </ul>
</nav>
<hr>
