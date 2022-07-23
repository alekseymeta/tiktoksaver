<template>
  <div v-if="result">
    <div class="stats shadow mb-5 w-full">
      <div class="stat">
        <div>
          <div class="flex gap-4">
            <div class="text-primary">
              <i class='bx bx-music text-3xl'></i>
            </div>
            <div>
              <div class="tooltip z-30 tooltip-bottom" :data-tip="result.music_title">
                <div class="stat-value text-sm dot w-72 justify-start flex">{{ result.music_title }}</div>
              </div>
              <div class="stat-title text-sm mb-4">{{ result.music_author }}</div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <audio controls>
              <source :src="result.music_play_url" type="audio/mpeg">
              Тег audio не поддерживается вашим браузером.
              <a :href="'http://dich.tech/tik/dl.php?url='+result.music_play_url+'&name='+result.music_title + '.mp3'">Скачайте музыку</a>.
            </audio>
            <a type="button" class="btn btn-square btn-primary" target="_blank"
               :href="'http://dich.tech/tik/dl.php?url='+result.music_play_url+'&name='+result.music_title + '.mp3'">
              <i class='bx bxs-download'></i>
            </a>
          </div>
        </div>
      </div>
      <div class="stat flex w-1/3">
        <div class="stat-figure text-secondary">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img :src="result.music"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicInfo",
  props: {
    result: Object
  }
}
</script>

<style scoped>
.dot {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
