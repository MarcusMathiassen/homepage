<script>
    import P2D from '../components/p2d.svelte'
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

//     repos = [
//     {
//         "forkCount": 27,
//         "url": "blue",
//         "name": "Leticia Hansen",
//         "primaryLanguage": {
//             "name": "JavaScript",
//             "color": "#00ff"
//         },
//         "description": "the color blue",
//         "stargazers": {
//             "totalCount": 30
//         }
//     },
//     {
//         "forkCount": 40,
//         "url": "brown",
//         "name": "Candy Vasquez Veronic",
//         "primaryLanguage": {
//             "name": "C++",
//             "color": "#ff0f"
//         },
//         "stargazers": {
//             "totalCount": 26
//         }
//     },
//     {
//         "forkCount": 36,
//         "url": "green",
//         "name": "Lamb Johnson",
//         "primaryLanguage": {
//             "name": "C++",
//             "color": "#f00f"
//         },
//         "stargazers": {
//             "totalCount": 24
//         }
//     },
//     {
//         "forkCount": 23,
//         "url": "blue",
//         "name": "Solomon Medina",
//         "primaryLanguage": {
//             "name": "C++",
//             "color": "#f00f"
//         },
//         "stargazers": {
//             "totalCount": 39
//         }
//     },
//     {
//         "forkCount": 26,
//         "url": "blue",
//         "name": "Richmond Hess",
//         "primaryLanguage": {
//             "name": "C++",
//             "color": "#ff0f"
//         },
//         "stargazers": {
//             "totalCount": 24
//         }
//     },
//     {
//         "forkCount": 38,
//         "url": "green",
//         "name": "Spencer Bush",
//         "primaryLanguage": {
//             "name": "C++",
//             "color": "#ff0f"
//         },
//         "stargazers": {
//             "totalCount": 33
//         }
//     },
//     {
//         "forkCount": 22,
//         "url": "green",
//         "name": "Hammond Mann",
//         "primaryLanguage": {
//             "name": "JavaScript",
//             "color": "#ff0f"
//         },
//         "stargazers": {
//             "totalCount": 22
//         }
//     }
// ]

</script>

<style lang="sass">
.landing-page--hero
    width: 50%
    margin: 20px auto
    display: block
    background-image: var(--avatar)
    background-size: cover
    width: 300px
    height: 300px

li, ul
    margin: 5px
    margin-top: 10px
    list-style-type: none

span
    font-family: var(--font)

.container
    width: 100%
    text-align: center

.repos
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
    opacity: 0.7
    &:hover
        opacity: 1.0
    @media only screen and (max-width: 600px)
        font-size: 0.75em

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

</style>

<svelte:head>
    <title>Home</title>
</svelte:head>
<div>

<div class="landing-page--hero"></div>
<p class="landing-page--tit">Marcus Mathiassen</p>
<p class="landing-page--subtitle">I do compilers and languages.
<br>
        Interested in systems design and UX.</p>
<div class="container">
<ul class="repos">
    <h2>Repositories</h2>
	{#each repos as repo}
        <li class="repo">
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
</div>
