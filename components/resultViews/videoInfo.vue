<template>
<div>
  <div class="mobile-btn md:hidden visible">
    <a type="button" target="_blank" :href="'https://www.tiktoksaver.online/tik/dl.php?url='+result.video+'&name='+result.unique_id + '.mp4'" class="btn btn-primary mt-5 w-full">{{ $t('home.btn_mobile') }} ↗︎</a>
  </div>

  <div class="md:flex justify-between mt-5 gap-2 ">
    <video class="rounded-box md:w-2/3 w-full border-b-base-100 shadow-md" height="300" controls="controls"
           :poster="result.dynamic_cover">
      <source :src="result.video" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
      Тег video не поддерживается вашим браузером.
      <a :href="'https://www.tiktoksaver.online/tik/dl.php?url='+result.video+'&name='+result.unique_id + '.mp4'">Скачайте видео</a>.
    </video>
    <div class="stats stats-vertical shadow st_vid md:w-1/3 md:inline-grid block md:mt-0 mt-5">

      <div class="stat">
        <div class="stat-title">{{ $t('result.created') }}</div>
        <div class="stat-desc opacity-100 font-bold">{{ result.create_time }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">{{ $t('result.likes') }}</div>
        <div class="stat-value">{{ result.like_count | toFix }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">{{ $t('result.comments') }}</div>
        <div class="stat-value">{{ result.comment_count | toFix }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">{{ $t('result.downloads') }}</div>
        <div class="stat-value">{{ result.downloads_count | toFix }}</div>
        <a type="button" download :href="'https://www.tiktoksaver.online/tik/dl.php?url='+result.video+'&name='+result.unique_id + '.mp4'" class="btn btn-primary btn-sm mt-2">{{ $t('home.btn') }}</a>
      </div>

      <div class="stat">
        <div class="stat-title">{{ $t('result.plays') }}</div>
        <div class="stat-value">{{ result.play_count | toFix }}</div>
      </div>

      <div class="stat">
        <div class="stat-title">{{ $t('result.share') }}</div>
        <div class="stat-value">{{ result.share_count | toFix }}</div>
        <div class="stat-desc">WhatsApp: {{ result.whatsapp_share_count | toFix }}</div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import toFix from "~/filters/toFix";

export default {
  name: "videoInfo",
  props: {
    result: Object
  },
  filters: {
    toFix
  }
}
</script>

<style scoped>

</style>
