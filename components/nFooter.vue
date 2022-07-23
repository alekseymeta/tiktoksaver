<template>
  <footer class="footer footer-center p-4 text-base-content mt-10">
    <div class="flex flex-col">
      <div class="text-xs flex opacity-50">
        <nuxt-link :to="localePath('contacts')">{{ $t('footer_menu.contacts') }}</nuxt-link>
        <div class="ml-3 mr-3">|</div>
        <nuxt-link :to="localePath('privacy')">{{ $t('footer_menu.privacy') }}</nuxt-link>
      </div>
      <div class="text-xs opacity-25">{{ $t('home.title') }} © 2022</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "nFooter",
  data() {
    return {
      themes: ['dark', 'cupcake', 'emerald', 'halloween', 'pastel', 'dracula']
    }
  },
  methods: {
    changeTheme(item) {
      document.getElementsByTagName('html')[0].attributes['data-theme'].value = item
      localStorage.setItem('theme', item)
    }
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      document.getElementsByTagName('html')[0].attributes['data-theme'].value = localStorage.getItem('theme')
    }
  }
}
</script>

<style scoped>

</style>
