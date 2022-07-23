<template>
  <div>
    <div class="stats shadow mb-5 w-full md:inline-grid block acc-info">
      <div class="stat">
        <a :href="result.avatar_larger" target="_blank" class="stat-figure text-secondary relative flex flex-col items-center">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img :src="result.author_avatar" alt=""/>
            </div>
          </div>
          <div class="text-2xs text-center opacity-50 w-min">{{ $t('result.save_photo') }}</div>
        </a>
        <div class="stat-desc opacity-30">{{ $t('result.acc_created') }} : {{ result.author_createTime }}</div>
        <div class="tooltip z-30 tooltip-bottom" :data-tip="result.unique_id">
          <div class="stat-title stat-value text-primary dot w-56 text-left opacity-100">{{ result.unique_id }}</div>
        </div>
        <div class="stat-desc mt-2">{{ result.nickname }}</div>
        <div class="stat-desc mt-2 whitespace-pre-wrap">{{ result.signature }}</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-primary">
          <i class='bx bx-heart text-3xl'></i>
        </div>
        <div class="stat-title text-sm">{{ $t('result.total_likes') }}</div>
        <div class="stat-value text-primary">{{ result.heartCount | toFix }}</div>
        <div class="stat-desc">
          <a :href="result.link" target="_blank" class="link link-secondary link-hover">{{ $t('result.original_profile') }} ↗</a>
        </div>
      </div>
    </div>

    <div class="stats shadow w-full folw">
      <div class="stat gap-x-2 sm:gap-x-4	 px-4 sm:px-5">
        <div class="stat-figure text-secondary">
          <i class='bx bx-face sm:text-3xl text-xl'></i>
        </div>
        <div class="stat-title sm:text-sm text-xs">{{ $t('result.followers') }}</div>
        <div class="stat-value text-secondary sm:text-4xl text-lg">{{ result.followerCount | toFix }}</div>
        <div class="stat-desc opacity-20">↗</div>
      </div>

      <div class="stat gap-x-2 sm:gap-x-4	 px-4 sm:px-5">
        <div class="stat-figure text-secondary">
          <i class='bx bxs-face sm:text-3xl text-xl'></i>
        </div>
        <div class="stat-title sm:text-sm text-xs">{{ $t('result.following') }}</div>
        <div class="stat-value text-secondary sm:text-4xl text-lg">{{ result.followingCount | toFix }}</div>
        <div class="stat-desc opacity-20">↗</div>

      </div>

      <div class="stat gap-x-2 sm:gap-x-4	 px-4 sm:px-5">
        <div class="stat-figure text-secondary">
          <i class='bx bx-camera-movie sm:text-3xl text-xl'></i>
        </div>
        <div class="stat-title sm:text-sm text-xs">{{ $t('result.videos') }}</div>
        <div class="stat-value text-secondary sm:text-4xl text-lg">{{ result.videoCount | toFix }}</div>
        <div class="stat-desc opacity-20">↗</div>

      </div>

    </div>
  </div>
</template>

<script>
import toFix from "~/filters/toFix";

export default {
  name: "accountInfo",
  props: {
    result: Object
  },
  filters: {
    toFix
  }
}
</script>

<style scoped>
@media (max-width: 767px) {
.acc-info  .stat {
    border: none;
    border-top-width: calc(1px*calc(1 - var(--tw-divide-x-reverse)));
  }
  .acc-info .dot {
    max-width: 400px;
    justify-content: flex-start;
    display: flex;
  }

}

.dot {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}


</style>
