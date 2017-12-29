<template>
  <v-form v-model="valid" ref="form" style="width: 100%">
    <v-text-field label="用户名" v-model="username"
      :counter="15"
      prepend-icon="account_circle"
      :rules="usernameRules"
      ref="username"
      @keyup.native="checkUser"
      :error-messages="errorMessage"
      required
      :loading="userLoading"
     />
     <v-text-field label="密码" v-model="password" 
     :counter="16"
     prepend-icon="lock_outline"
     :rules="passwordRules"
     required
     :append-icon="ispwdShow ? 'visibility' : 'visibility_off'"
     :append-icon-cb="() => (ispwdShow = !ispwdShow)"
     :type="ispwdShow ? 'text' : 'password'"
     />
     <v-text-field label="确认密码" v-model="confirm_password"
      :counter="16"
      prepend-icon="lock_open"
      required
      :rules="passwdConfirmRules"
      ref="confrimPwd"
      :append-icon="isconfirmPwdShow ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (isconfirmPwdShow = !isconfirmPwdShow)"
      :type="isconfirmPwdShow ? 'text' : 'password'"
      />
      <v-text-field label="邮箱" v-model="email"
        :counter="16"
        prepend-icon="email"
        required
        ref="email"
        :rules="emailRules"
        :loading="emailLoading"
        @keyup.native="checkEmail"
        :error-messages="emailErrorMessage"
      />
      <v-layout row wrap>
        <v-flex xs5 offset-xs1 lg3 offset-lg1>
          <v-btn color="error" @click="reset">重置</v-btn>
        </v-flex>
        <v-flex xs6 lg3>
          <v-btn color="primary" :disabled="!valid && errorMessage.length === 0 && emailErrorMessage.length === 0" :loading="loading" @click="submit">确定</v-btn>
        </v-flex>
      </v-layout>
  </v-form>
</template>
<script>
import validMixins from '@/mixins/validate'
import api from '@/api'
export default {
  mixins: [validMixins],
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const self = this
    console.log(self.$refs.form)
    return {
      valid: true,
      usernameRules: [
        val => !!val || '用户名不能为空',
        val => (val && val.length < 15 && val.length > 2) || '长度在3～15位之间'
      ],
      passwordRules: [
        val => !!val || '密码不能为空',
        val => (val && val.length < 15 && val.length >= 6) || '长度在6～15位之间'
      ],
      passwdConfirmRules: [
        val => !!val || '密码不能为空',
        val => (val && val.length >= 6 && val.length <= 15) || '密码在6～15位之间',
        val => (val === self.password) || '密码输入不一致'
      ],
      emailRules: [
        val => !!val || '邮箱不能为空',
        val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || '邮箱格式不正确'
      ],
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      userLoading: false,
      emailLoading: false,
      errorMessage: [],
      emailErrorMessage: [],
      ispwdShow: false,
      isconfirmPwdShow: false
    }
  },
  computed: {
    registForm () {
      /* eslint-disable */
      const {username, password, confirm_password, email} = this
      return {
        username,
        password,
        confirm_password,
        email
      }
    }
  },
  watch: {
    username: function (val, old) {
      this.errorMessage = []
    },
    email: function (val, old) {
      this.emailErrorMessage = []
    }
  },
  methods: {
    checkEmail (event) {
      if (this.$refs.email.valid) {
        this.emailLoading = true
        this.check({email: event.target.value}).then(() => {
          this.emailLoading = false
        }).catch(err => {
          console.log(err)
          this.emailLoading = false
        })
      }
    },
    checkUser (event) {
      if (this.$refs.username.valid) {
        this.userLoading = true
        this.check({username: event.target.value}).then(() => {
          this.userLoading = false
        }).catch(err => {
          console.log(err)
          this.userLoading = false
        })
      }
    },
    async check (params) {
      try {
        const data = await api.checkUserNameOrEmail(params)
        if (data.code === 200) {
          console.table('code ====' + data)
          if (params.username) {
            this.errorMessage = [data.message]
          } else {
            this.emailErrorMessage = [data.message]
          }
        }
        return true
      } catch (error) {
        Promise.reject(error)
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    submit () {
      if (this.$refs.form.validate() && this.errorMessage.length === 0 && this.emailErrorMessage.length === 0 ) {
        this.$emit('submit-handle', this.registForm)
      }
      console.log(this.$refs.form)
    },
    debounces () {
      // _.debounce((this.checkUser, 1300))
    }
  }
}
</script>

