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

    // Test data
    // @Remove when deploying!!!
    // repos = JSON.parse('[{"primaryLanguage":{"name":"JavaScript","color":"#f1e05a"},"stargazers":{"totalCount":1},"forkCount":0,"createdAt":"2019-03-31T13:26:30Z","nameWithOwner":"MarcusMathiassen/homepage","name":"homepage","updatedAt":"2019-09-08T13:26:22Z","pushedAt":"2019-09-08T13:26:20Z","description":"my personal page ","url":"https://github.com/MarcusMathiassen/homepage","licenseInfo":null},{"primaryLanguage":{"name":"C","color":"#555555"},"stargazers":{"totalCount":0},"forkCount":1,"createdAt":"2018-09-13T22:23:16Z","nameWithOwner":"MarcusMathiassen/thi","name":"thi","updatedAt":"2019-08-30T16:57:47Z","pushedAt":"2019-08-30T16:57:45Z","description":"A C like programming language","url":"https://github.com/MarcusMathiassen/thi","licenseInfo":null},{"primaryLanguage":{"name":"C++","color":"#f34b7d"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2017-07-28T01:50:48Z","nameWithOwner":"MarcusMathiassen/Athi","name":"Athi","updatedAt":"2019-08-30T14:42:33Z","pushedAt":"2019-08-30T14:42:26Z","description":"A continuation of my P2D project","url":"https://github.com/MarcusMathiassen/Athi","licenseInfo":null},{"primaryLanguage":{"name":"C++","color":"#f34b7d"},"stargazers":{"totalCount":32},"forkCount":15,"createdAt":"2017-03-18T20:05:04Z","nameWithOwner":"MarcusMathiassen/BasicRaytracer30min","name":"BasicRaytracer30min","updatedAt":"2019-08-27T02:08:34Z","pushedAt":"2017-03-19T01:38:59Z","description":"https://youtu.be/ARn_yhgk7aE","url":"https://github.com/MarcusMathiassen/BasicRaytracer30min","licenseInfo":null},{"primaryLanguage":{"name":"C++","color":"#f34b7d"},"stargazers":{"totalCount":1},"forkCount":0,"createdAt":"2017-09-05T00:54:12Z","nameWithOwner":"MarcusMathiassen/Revork","name":"Revork","updatedAt":"2019-04-02T20:53:27Z","pushedAt":"2017-12-13T07:40:55Z","description":"3D engine","url":"https://github.com/MarcusMathiassen/Revork","licenseInfo":null},{"primaryLanguage":{"name":"C","color":"#555555"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2019-02-03T18:45:26Z","nameWithOwner":"MarcusMathiassen/chip8","name":"chip8","updatedAt":"2019-04-02T12:11:09Z","pushedAt":"2019-02-03T21:43:31Z","description":"CHIP-8 Emulator","url":"https://github.com/MarcusMathiassen/chip8","licenseInfo":null},{"primaryLanguage":{"name":"Swift","color":"#ffac45"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2018-04-05T16:53:00Z","nameWithOwner":"MarcusMathiassen/athiNative","name":"athiNative","updatedAt":"2019-04-02T12:09:46Z","pushedAt":"2019-02-14T02:15:31Z","description":"The same as my Athi project but in Swift and Metal.","url":"https://github.com/MarcusMathiassen/athiNative","licenseInfo":null},{"primaryLanguage":{"name":"C","color":"#555555"},"stargazers":{"totalCount":10},"forkCount":2,"createdAt":"2016-06-05T19:01:31Z","nameWithOwner":"MarcusMathiassen/P2D","name":"P2D","updatedAt":"2019-02-04T17:19:03Z","pushedAt":"2017-03-18T21:52:50Z","description":"Bouncy balls","url":"https://github.com/MarcusMathiassen/P2D","licenseInfo":null},{"primaryLanguage":{"name":"Go","color":"#00ADD8"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2018-11-06T21:05:00Z","nameWithOwner":"kriskog/8ball-backend","name":"8ball-backend","updatedAt":"2018-11-20T09:33:26Z","pushedAt":"2018-11-20T09:33:24Z","description":null,"url":"https://github.com/kriskog/8ball-backend","licenseInfo":null},{"primaryLanguage":{"name":"HTML","color":"#e34c26"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2018-11-06T21:54:21Z","nameWithOwner":"kriskog/8ball-frontend","name":"8ball-frontend","updatedAt":"2018-11-20T06:23:20Z","pushedAt":"2018-11-20T06:23:19Z","description":null,"url":"https://github.com/kriskog/8ball-frontend","licenseInfo":null},{"primaryLanguage":{"name":"Go","color":"#00ADD8"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2018-10-24T23:18:25Z","nameWithOwner":"MarcusMathiassen/IGCInfoViewer2","name":"IGCInfoViewer2","updatedAt":"2018-10-29T22:02:49Z","pushedAt":"2018-10-29T22:02:48Z","description":null,"url":"https://github.com/MarcusMathiassen/IGCInfoViewer2","licenseInfo":null},{"primaryLanguage":{"name":"Go","color":"#00ADD8"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2018-10-10T13:35:31Z","nameWithOwner":"MarcusMathiassen/IGCInfoViewer","name":"IGCInfoViewer","updatedAt":"2018-10-24T22:48:23Z","pushedAt":"2018-10-24T22:48:21Z","description":null,"url":"https://github.com/MarcusMathiassen/IGCInfoViewer","licenseInfo":null},{"primaryLanguage":{"name":"C","color":"#555555"},"stargazers":{"totalCount":0},"forkCount":0,"createdAt":"2017-04-19T21:20:33Z","nameWithOwner":"MarcusMathiassen/Gonzales","name":"Gonzales","updatedAt":"2017-04-26T11:47:10Z","pushedAt":"2017-09-03T11:44:17Z","description":null,"url":"https://github.com/MarcusMathiassen/Gonzales","licenseInfo":null}]')

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

<div class="container">
    <div class="container--hero">
        <div class="landing-page--hero"></div>
        <p class="landing-page--tit">Marcus Mathiassen</p>
        <p class="landing-page--subtitle">I do compilers and languages. <br>Interested in systems design and UX.</p>
    </div>
    <div class="container--repos">
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
