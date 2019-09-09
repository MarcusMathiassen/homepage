<script>
    import { onMount } from 'svelte'

    let repos = []

    const getApi = async (root, storage = sessionStorage) => {
        const result = storage.getItem(root)
        if (result !== null) {
            console.log("fetching github data... from storage")
            return JSON.parse(result)
        } else {
            console.log("fetching github data... github")
            const res = await fetch(root)
            const json = await res.json()
            storage.setItem(root, JSON.stringify(json))
            return json
        }
    }

    onMount(async () => {
        repos = await getApi('/.netlify/functions/github')
    })
</script>

<style lang="sass">
li, ul
    margin: 5px
    margin-top: 10px
    list-style-type: none

span
    font-family: var(--font)

.container
    display: flex
    flex-flow: row wrap
    justify-content: space-around

.container--repos
    text-align: center

.repos
    margin: 20px
    display: inline-block
    h2
        padding: 5px
        text-align: left
        font-weight: 500
    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0

.repo
    display: flex
    margin: 5px
    padding: 5px
    opacity: 0.0
    &:hover
        opacity: 1.0
    @media only screen and (max-width: 600px)
        font-size: 0.75em
    
    animation: reveal 1s forwards

.repo--name
    font-size: 1em
    padding: 0
    margin: 0
    text-align: left

.repo--badges
    --c: blue
    background: var(--secondary)
    margin: 5px
    padding: 5px
    border-radius: var(--border-radius)
    font-size: 0.75em
    span
        margin: 2px

.repo--langauge
    color: var(--c)
    padding: 5px
    padding-top: 1px
    padding-bottom: 1px
    border-radius: 5px
    font-size: 1em
    font-weight: 700

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 0.8
</style>

<div class="container--repos">
    <ul class="repos">
        <h2>Repositories</h2>
        {#each repos as repo, i}
            <li class="repo" style="animation-delay: {i*10}ms">
                <a href="{repo.url}" target="_blank" rel="noopener">
                <span class="repo--name">{repo.name} </span>
                <span class="repo--badges" style="--c: {repo.primaryLanguage.color}">
                {#if repo.primaryLanguage}
                    <span class="repo--langauge"> {repo.primaryLanguage.name}</span>
                {/if}
                {#if repo.stargazers.totalCount}
                    <span>
                        <i class="fas fa-star" style="color: gold !important"></i>
                        <span>{repo.stargazers.totalCount}</span>
                    </span>
                {/if}
                {#if repo.forkCount}
                    <span>
                        <i class="fas fa-code-branch" style="color: #c94da0 !important"></i>
                        <span>{repo.forkCount}</span>
                    </span>
                {/if}
                </span>
                </a>
            </li>
        {/each}
    </ul>
</div>
