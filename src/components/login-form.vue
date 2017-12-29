<template>
  <v-form v-model="valid" style="width: 100%" ref="form">
    <v-text-field 
      label="用户名/邮箱"
      v-model="loginForm.username"
      :rules="usernameRules"
      :counter="15"
      required
      prepend-icon="account_circle"
      
    />
    <v-text-field 
      label="密码"
      v-model="loginForm.password"
      :rules="passwordRules"
      :counter="15"
      required
      prepend-icon="lock_outline"
      :append-icon="isEyeShow ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (isEyeShow = !isEyeShow)"
      :type="isEyeShow ? 'text' : 'password'"
    />
    <v-layout row warp>
      <v-flex xs5 offset-xs1 lg3 offset-lg1>
        <v-btn @click="clear" color="error">重置</v-btn>
      </v-flex>
      <v-flex xs6 lg3>
        <v-btn color="primary" @click="submit" :disabled="!valid" :loading="loading" >提交</v-btn>
      </v-flex>
    </v-layout> 
  </v-form>
</template>
<script>
import validMixins from '@/mixins/validate'
export default {
  mixins: [validMixins],
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    valid: true,
    loginForm: {
      username: '',
      password: ''
    },
    isEyeShow: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log('submit')
        this.$emit('submit-handle', this.loginForm)
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  created () {
    if (this.$route.params.username) {
      /* eslint-disable */
      const {username, password} = this.$route.params
      this.loginForm.username = username
      this.loginForm.password = password
    }
  }
}
</script>

