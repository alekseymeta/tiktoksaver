<template>
  <div class="form-control w-full">
    <div class="input-group w-full flex-col sm:flex-row gap-4 sm:gap-0">
<!--      <span class="label-text bg-primary text-base-100 font-base"><i class='bx bxl-tiktok'></i></span>-->
      <input v-model="val" type="text"
             :class="{'input-error' : $v.val.$dirty && $v.val.$invalid}"
             @keypress.enter="sub"
             :placeholder="$t('home.placeholder')"
             class="input input-bordered w-full"/>
      <button @click="sub"
              class="btn btn-primary">
        {{ $t('home.btn') }}
      </button>
    </div>
    <span class="text-2xs text-error mt-2"
          v-if="$v.val.$dirty && $v.val.$invalid && !$v.val.$model">
                {{ $t('errors.empty') }}</span>
    <span class="text-2xs text-error mt-2"
          v-if="$v.val.$dirty && !$v.val.url">
                {{ $t('errors.bad_link') }}:<br>
                - https://www.tiktok.com/@username/video/70648906646937858 <br>
                - https://vm.tiktok.com/ZSdlChqfkb/
    </span>
    <span class="text-2xs text-error mt-2"
          v-if="$v.val.$dirty && err">
                {{ $t('errors.uncorrect_link') }}
    </span>
  </div>
</template>

<script>
import {required, url} from 'vuelidate/lib/validators'

export default {
  name: "nInput",
  data() {
    return {
      val: '',
      err: false
    }
  },
  methods: {
    sub() {
      this.$v.val.$touch();
      if (this.$v.$error) {
        this.$v.$touch()
        // console.log(this.$v.val)
        return
      }

      // console.log(this.val)

      if (this.val.indexOf('tiktok.com') !== -1) {
        this.err = false
        const q = this.val.split('?')
        const arr = q[0].split('/')
        const v = arr.findIndex(a => a === 'video')
        if (v !== -1) {
          this.$emit('download', arr[v + 1])
        } else {
          this.$emit('download', this.val)
        }
      } else {
        this.err = true
      }


      // this.$emit('download', this.val)
    }
  },
  validations: {
    val: {
      required, url
    }
  }
}
</script>

<style scoped>
@media (max-width: 639px) {
  .input {
    border-radius: .5rem !important;
  }
  .btn-primary {
    border-radius: .5rem !important;
  }
}

.input {
  outline: none;
}


</style>
