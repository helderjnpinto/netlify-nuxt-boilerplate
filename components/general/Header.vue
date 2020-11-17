<template>
  <Nav />
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav,
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-primary-200 bg-primary;
  &:hover {
    @apply text-white bg-primary-600;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-primary-600;
    &:hover {
      @apply text-white;
    }
  }
}
</style>
