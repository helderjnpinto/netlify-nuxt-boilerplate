<template>
  <div class="main text-center flex flex-col items-center justify-center">
    <h1 class="title">Nuxt — Tailwind — Netlify CMS</h1>
    <h2 class="subtitle">Boilerplate - {{ $t('welcome') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'index',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  computed: {},
}
</script>
