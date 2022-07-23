<template>
  <main class="content">

    <section class="mt-10 mb-10 text-center">
      <h1 class="stat-value text-primary uppercase mb-2 whitespace-pre-wrap text-center">{{ $t('home.title')}}</h1>
      <h2>{{ $t('home.h2')}}</h2>
    </section>

    <section class="flex justify-center">
      <n-input @download="submitHandler($event)"/>
    </section>

    <div v-if="resultData == null && !showLoader">
      <sections-main-header/>
      <sections-advan/>
      <sections-faq/>
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
import { mapGetters } from 'vuex'

export default {
  name: "download-tiktok-video",
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
  }
}
</script>

<style scoped>

</style>
