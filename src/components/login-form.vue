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
      <v-flex xs3 offset-xs1>
        <v-btn @click="clear" color="error">重置</v-btn>
      </v-flex>
      <v-flex xs3>
        <v-btn color="primary" @click="submit" :disabled="!valid">提交</v-btn>
      </v-flex>
    </v-layout> 
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    usernameRules: [
      value => !!value || '用户名或者邮箱不能为空',
      value => (value && value.length) <= 15 || '长度不能超过15'
    ],
    passwordRules: [
      val => !!val || '密码不能为空'
    ],
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
  }
}
</script>

