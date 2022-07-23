<template>
  <header>
    <div class="navbar bg-base-100 px-0">
      <div class="navbar-start">
        <nav class="dropdown dropdown-hover">
          <label tabindex="0" class="btn btn-ghost opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-72">
            <li>
              <nuxt-link :to="localePath('download-tiktok-video')">
                <i class='bx bx-movie-play' ></i>
                {{ $t('menu.how') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('download-tiktok-mp3')">
                <i class='bx bx-music' ></i>
                {{ $t('menu.mp3') }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="navbar-center">
        <nuxt-link :to="localePath('/')"
                   class="btn btn-ghost normal-case text-xl">
          <i class='bx bxl-tiktok' ></i>
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-hover dropdown-end text-sm">
          <div class="btn btn-ghost uppercase opacity-50 hover:opacity-100">{{ $i18n.locale}} <i class='bx bx-chevron-down' ></i></div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale">
              <nuxt-link
                :key="locale.code"
                :to="switchLocalePath(locale.code)">{{ locale.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav"
}
</script>

<style scoped>
html[data-theme="dracula"] .dropdown-content {
  background-color: hsl(var(--b3));
  /*@apply bg-base-300*/
}
</style>
