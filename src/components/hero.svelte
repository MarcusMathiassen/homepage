<script>
    import avatar from "../assets/avatar.jpg"
</script>

<style lang="sass">

</style>

<template lang="pug">
.container
    .columns.is-centered.is-vcentered
        .column.is-narrow
            figure.image(style="width: 50%; margin: 0 auto;")
                img(style="border-radius: 30px;" src='{avatar}' alt="picture of me")

            .container(style="text-align: center;")
                h1.title Marcus Mathiassen
                p.subtitle.
                    I do compilers and graphics.#[br]
                    Interested in systems design and UX.

                a.has-addons.button.is-medium.is-rounded.is-bold(href="mailto:mathiassenmarcus@me.com")
                    icon.fontello.icon-mail-alt
                    span Contact Me

</template>
