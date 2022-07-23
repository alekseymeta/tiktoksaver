<template>
  <section class="mt-10">
    <div class="w-full flex flex-col gap-3">
      <div class="flex bg-base-300 p-4 rounded-box items-center">
        <i class='bx bx-stats text-2xl mr-4 text-primary'></i>
        <h3>{{ $t('home.advan.stat') }}</h3>
      </div>
      <div class="flex bg-base-300 p-4 rounded-box items-center">
        <i class='bx bx-movie-play text-2xl mr-4 text-primary'></i>
        <h3>{{ $t('home.advan.video') }}</h3>
      </div>
      <div class="flex bg-base-300 p-4 rounded-box items-center">
        <i class='bx bx-music text-2xl mr-4 text-primary'></i>
        <h3>{{ $t('home.advan.audio') }}</h3>
      </div>
      <div class="flex bg-base-300 p-4 rounded-box items-center">
        <i class='bx bx-user-pin text-2xl mr-4 text-primary'></i>
        <h3>{{ $t('home.advan.avatar') }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "nSectionAdvan"
}
</script>

<style scoped>

</style>
