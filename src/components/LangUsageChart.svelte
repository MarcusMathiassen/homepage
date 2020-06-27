<script>

    import { onMount } from 'svelte'
    import Chart from 'chart.js'

    import { stores } from '@sapper/app'
    const { session } = stores()

    let repos = $session.repos

    let el
    let occu = {}

    // Figure out language usage of all projects...
    repos.forEach(repo => {
        if (!repo.primaryLanguage) return
        const o = repo.primaryLanguage.name
        if (occu[o]) {
            occu[o].count += 1
        } else {
            occu[o] = {
                count: 1,
                color: repo.primaryLanguage.color
            }
        }
    })

    // ...make it a bit more usable...
    occu = Object.keys(occu).map(x => {
        return {
            name: x,
            count: occu[x].count,
            color: occu[x].color
        }
    })

    // ... sort by most used 
    occu = occu.sort((a,b) => b.count - a.count)

    onMount(() => {
        new Chart(el.getContext('2d'), {
                type: 'pie',
                data: {
                    labels: occu.map(x => x.name),
                    datasets: [{
                        data: occu.map(x => x.count),
                        backgroundColor: occu.map(x => x.color)
                    }]
                }
            })
    })
</script>


<style lang='sass'>

    canvas
        max-width: 50%

</style>

<template lang='pug'>
    
    .container
        .title.is-6 Language usage - based on both public and private
        canvas(bind:this='{el}')

</template>