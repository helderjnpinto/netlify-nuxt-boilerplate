<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <!-- <logo /> -->
    <h1 class="title">Nuxt — Tailwind — Netlify CMS</h1>
    <h2 class="subtitle">Boilerplate - {{ $t('welcome') }}</h2>

    <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  name: 'index',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
