<script>
    export let color

    let css = `
    color: ${color};
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background: rgba(1,1,1,0);
    border: none;
    `
</script>
        <!-- button:hover {
            background: rgba(${color}, 0.06) !important;
        }
            background: rgba(${color}, 0.1) !important;
        } -->

<template lang='pug'>

button(style='{css}')
    slot

</template>
