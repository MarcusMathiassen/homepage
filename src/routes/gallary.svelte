<script context='module'>
	export async function preload({ params, query }) {
		const res = await this.fetch(`gallary.json`)
        const assets = await res.json()
		return { assets }
	}
</script>
<script>
    export let assets
</script>

<style>

img, video {
   width: 100%;
   height: auto;
}

.assets {
    line-height: 0;
    -webkit-column-count: 5;
    -webkit-column-gap:   0px;
    -moz-column-count:    5;
    -moz-column-gap:      0px;
    column-count:         5;
    column-gap:           0px;
}
@media (max-width: 1200px) {
  .assets {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  .assets {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  .assets {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  .assets {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}
</style>


<template lang='pug'>

svelte:head
    title Gallery

.content
    h1.title Snippets of my work in (mostly) chronological order

.container
    .assets
        +each('assets as asset')
            +if ("asset.contentType.startsWith('image')")
                img.item(src='{asset.url}')
                +else()
                    video.item(src='{asset.url}' autoplay loop muted playsinline)
</template>
