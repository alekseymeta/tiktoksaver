<template>
  <main class="content">

    <section class="mt-10 mb-10 text-center">
      <h1 class="stat-value text-primary mb-10 mt-10 uppercase whitespace-pre-wrap text-center">{{ $t('mp3.home.title') }}</h1>
    </section>

    <section class="flex justify-center">
      <n-input @download="submitHandler($event)"/>
    </section>

    <div v-if="resultData == null && !showLoader">
      <sections-main-header-mp3/>
      <sections-steps-mp3/>
      <sections-faq-mp3/>
    </div>

    <div v-if="resultData !== null">
      <section v-if="resultData.success"
               class="mt-5">
        <result-views-account-info :result="resultData"/>
        <result-views-video-info :result="resultData"/>
        <result-views-music-info class="mt-5" :result="resultData"/>
      </section>

      <div v-else>
        <alert/>
      </div>

    </div>
  </main>
</template>

<script>
import ogImage from 'static/img/ico.png'
import { mapGetters } from 'vuex'

export default {
  name: "download-tiktok-mp3",
  methods: {
    submitHandler(val) {
      this.$store.dispatch('GETDATA', val)
    }
  },
  computed: {
    ...mapGetters({
      resultData: 'resultData',
      showLoader: 'showLoader'
    })
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('seo.mp3.title'),
      meta: [
        { hid: 'og:locale', property: 'og:locale', content: this.$i18n.locale},
        { itemprop: 'image', content: 'https://www.tiktoksaver.online'+ogImage },
        { itemprop: 'name', content: 'Download MP3 TikTok, Tiktok download audio in the best quality' },
        { hid: 'description', name: 'description', content: this.$t('seo.mp3.description')},
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.mp3.keywords')},
        { hid: 'og:title', property: 'og:title', content: this.$t('seo.mp3.title') },
        { hid: 'og:url', property: 'og:url', content: this.$t('seo.url')+'download-tiktok-mp3' },
        { hid: 'twitter:title', property: 'twitter:title', content: this.$t('seo.mp3.title') },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://www.tiktoksaver.online'+ogImage },
        { hid: 'og:description', property: 'og:description', content: this.$t('seo.mp3.description') },
        { hid: 'twitter:description', property: 'twitter:description', content: this.$t('seo.mp3.description') },
      ]
    }
  }
}
</script>

<style scoped>

</style>
