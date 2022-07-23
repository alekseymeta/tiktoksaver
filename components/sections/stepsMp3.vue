<template>
  <section>
    <div class="w-full flex flex-col gap-3">
      <div class="flex flex-col bg-base-300 p-4 rounded-box text-left">
        <div class="flex flex-row items-center mb-4">
          <i class='bx bx-search-alt text-3xl mr-4 text-primary'></i>
          <h3 class="font-bold text-lg">{{ $t('mp3.steps.title.1') }}</h3>
        </div>
        <p>{{  $t('mp3.steps.1') }}</p>
      </div>
      <div class="flex flex-col bg-base-300 p-4 rounded-box text-left">
        <div class="flex flex-row items-center mb-4">
          <i class='bx bx-paste text-3xl mr-4 text-primary'></i>
          <h3 class="font-bold text-lg">{{ $t('mp3.steps.title.2') }}
          </h3>
        </div>
        <p>{{  $t('mp3.steps.2') }}</p>
      </div>
      <div class="flex flex-col bg-base-300 p-4 rounded-box text-left">
        <div class="flex flex-row items-center mb-4">
          <i class='bx bx-cloud-download text-3xl mr-4 text-primary'></i>
          <h3 class="font-bold text-lg">{{ $t('mp3.steps.title.3') }}
          </h3>
        </div>
        <p>{{  $t('mp3.steps.3') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "nStepsMp3"
}
</script>

<style scoped>

</style>
