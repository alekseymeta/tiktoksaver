<template>
  <section>
    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5">
      <input type="checkbox" class="peer" />
      <h4 class="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
        {{ $t('content.faq.how_download_audio.ask') }}
      </h4>
      <div v-html="$t('content.faq.how_download_audio.answer')" class="collapse-content peer-checked:bg-secondary peer-checked:text-secondary-content">

      </div>
    </div>
    <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2">
      <input type="checkbox" class="peer" />
      <h4 class="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
        {{ $t('content.faq.how_find_link.ask') }}
      </h4>
      <div v-html="$t('content.faq.how_find_link.answer')" class="collapse-content peer-checked:bg-secondary peer-checked:text-secondary-content"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "faq"
}
</script>

<style scoped>

</style>
