<template>
  <div class="container h-screen mx-auto max-w-2xl px-4 relative">
    <nav-menu/>
    <div v-if="showLoader" class="absolute flex left-0 right-0 justify-center top-80 loader">
      <spinner/>
    </div>
    <Nuxt/>
    <n-footer/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "default",
  computed: {
    ...mapState(['showLoader'])
  }
}
</script>

