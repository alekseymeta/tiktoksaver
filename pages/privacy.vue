<template>
  <div class="container h-screen mx-auto max-w-2xl px-4 relative">
    <nav-menu/>
    <h1 class="stat-value uppercase mb-2 whitespace-pre-wrap text-center mt-10 mb-10 text-2xl">{{ $t('privacy.title')}}</h1>
    <div class="mb-5">{{ $t('privacy.1')}}</div>
    <ul>
      <li>{{ $t('privacy.2')}}</li>
      <li>{{ $t('privacy.3')}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "privacy",
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('privacy.title')
    }
  }
}
</script>

<style scoped>
li{
  list-style: inside;
  margin-bottom: 15px;
}
</style>
