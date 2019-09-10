<script>
    import { onMount } from 'svelte'
    import { cachedFetch } from './utils/utility'

    let repos = []

    let languageColorChoicesIter = 0
    let languageColors = new Map()
    const languageColorChoices = [
        "var(--apple_blue)",
        "var(--apple_gray)",
        "var(--apple_green)",
        "var(--apple_indigo)",
        "var(--apple_orange)",
        "var(--apple_pink)",
        "var(--apple_purple)",
        "var(--apple_red)",
        "var(--apple_teal)",
        "var(--apple_yellow)",
        "var(--apple_retro_green)",
        "var(--apple_retro_yellow)",
        "var(--apple_retro_orange)",
        "var(--apple_retro_red)",
        "var(--apple_retro_purple)"
    ]

    const starBias = 1.5
    const forkBias = 2.0 // value forks more than stars

    onMount(async () => {
        repos = await cachedFetch('/.netlify/functions/github')
        repos.sort((a, b) => (b.stargazers.totalCount*starBias + b.forkCount*forkBias) -  (a.stargazers.totalCount*starBias + a.forkCount*forkBias))

        repos.forEach(repo => {
            const name = repo.primaryLanguage.name

            let color 
            if (languageColors.has(name)) {
                color = languageColors.get(name)
            } else color = languageColorChoices[languageColorChoicesIter++ % languageColorChoices.length]
            
            console.log(name, color)
            
            languageColors.set(name, color)
        })
    })

</script>

<style lang="sass">

.repos
    text-align: left
    display: inline-block
    h2
        padding: 5px
        text-align: left
        font-weight: 500
    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0

a
    padding: 0
    margin: 0

.repo
    display: flex
    opacity: 0.0
    @media only screen and (max-width: 600px)
        font-size: 0.75em
    
    animation: reveal 1s forwards

.title
    font-size: 1em
    padding: 0
    margin: 0
    text-align: left

.badge
    background: var(--secondary)
    margin: 0
    padding: 5px
    border-radius: var(--border-radius)
    font-size: 0.75em

.badge--item
    margin: 2px

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 0.8

</style>

<ul class="repos">
    <h2>Repositories</h2>
    {#each repos as repo, i}
        <li class="repo" style="animation-delay: {i*10}ms">
            <a href="{repo.url}" target="_blank" rel="noopener">
                <span class="title">{repo.name}
                <div class="badge">
                    {#if repo.primaryLanguage}
                    <span class="badge--item">
                        <span class="langauge" style="color: {languageColors.get(repo.primaryLanguage.name)}">
                            {repo.primaryLanguage.name}
                        </span> 
                    </span> 
                    {/if}
                    {#if repo.stargazers.totalCount} 
                    <span class="badge--item">
                        <i class="fas fa-star" style="color: var(--apple_retro_yellow)"></i>
                        <span style="color: var(--apple_retro_yellow)">{repo.stargazers.totalCount}</span>
                    </span>
                    {/if}
                    {#if repo.forkCount} 
                    <span class="badge--item">
                        <i class="fas fa-code-branch" style="color: #c94da0"></i>
                        <span style="color: #c94da0">{repo.forkCount}</span>
                    </span>
                    {/if}
                </div>
                </span>
            </a>
        </li>
    {/each}
</ul>
