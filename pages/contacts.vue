<template>
  <div class="container h-screen mx-auto max-w-2xl px-4 relative">
    <nav-menu/>
    <div class="mt-5">
      <h1 class="stat-value uppercase mb-2 whitespace-pre-wrap text-center">{{  $t('contacts.title') }}</h1>
      <div v-if="!success">
        <div class="form-control mt-5">
          <label class="label">
            <span class="label-text">{{  $t('contacts.email') }}</span>
          </label>
          <input type="text"
                 v-model="email"
                 :class="{'input-error' : $v.email.$dirty && $v.email.$invalid}"
                 placeholder="info@site.com"
                 class="input input-bordered" />
          <span class="text-2xs text-error mt-2"
                v-if="$v.email.$dirty && $v.email.$invalid && !$v.email.$model">
          Value required</span>
          <span class="text-2xs text-error mt-2"
                v-if="$v.email.$dirty && !$v.email.email">
                Invalid email</span>
        </div>
        <div class="form-control mt-5">
          <label class="label">
            <span class="label-text">{{  $t('contacts.textarea') }}</span>
          </label>
          <textarea type="text"
                    v-model="text"
                    :class="{'input-error' : $v.text.$dirty && $v.text.$invalid}"
                    placeholder="Your message"
                    class="input input-bordered h-36" />
          <span class="text-2xs text-error mt-2"
                v-if="$v.text.$dirty && $v.text.$invalid && !$v.text.$model">
          Value required</span>
        </div>
        <div class="mt-10 w-full">
          <button class="btn btn-primary w-full"
                  :class="btn === 'Sending...' ? 'btn-disabled' : ''"
                  @click="sub">{{  btn }}</button>
        </div>
      </div>
      <div v-else class="mt-20">
        <div v-if="success === '1'" class="text-success flex flex-col text-center">
          <i class='bx bx-check-circle text-4xl'></i>
          <span>Thank you!</span>
        </div>
        <div v-if="success === '2'" class="text-error flex flex-col text-center">
          <i class='bx bx-error-circle text-4xl'></i>
          <span>Error</span>
        </div>
        <div v-if="success === '3'" class="text-error flex flex-col text-center">
          <i class='bx bx-error-circle text-4xl'></i>
          <span>Error</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {required, email} from "vuelidate/lib/validators";

export default {
  name: "contacts",
  data() {
    return {
      email: '',
      text: '',
      success: '',
      btn: this.$t('contacts.btn')
    }
  },
  methods: {
    async sub() {
      this.$v.email.$touch();
      this.$v.text.$touch();
      if (this.$v.$error) {
        this.$v.$touch()
        return
      }
      this.btn = 'Sending...'
      try {
        const response = await fetch('https://www.tiktoksaver.online/send-message-to-telegram.php', {
          method: "POST",
          headers:
            {
              "Content-Type": "application/x-www-form-urlencoded"
            },
          body: `email=${this.email}&msg=${this.text}`
        })
        const data = await response.json();
        this.success = data.status
        this.email = ''
        this.text = ''
      } catch (e) {
        this.success = '2'
      }
    }
  },
  validations: {
    email: {
      required, email
    },
    text: { required }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('contacts.title')
    }
  }
}
</script>

<style scoped>

</style>
