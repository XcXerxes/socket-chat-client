<template>
<transition name="slide-x-reverse-transition">
  <v-layout row class="chat-wrapper">
    <v-flex lg4 xs12 offset-lg4>
      <v-card transition="slide-x-reverse-transition">
        <v-toolbar color="primary" dark dense>
          <v-btn icon class="hidden-xs-only" @click.native="$router.back()">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>用户注册</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn flat @click.native="$router.push('/login')">
            用户登录
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title primary-title>
          <register-form @submit-handle="submit" :loading="btnLoading" />
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-snackbar
        :timeout="3000"
        top
        :color="messageColor"
        v-model="snackbar"
      >
      {{message}}
      <v-btn flat @click.native="snackbar = false">关闭</v-btn>
    </v-snackbar>
  </v-layout>
  </transition>
</template>
<script>
import registerForm from '@/components/register-form'
import api from '@/api'
export default {
  components: {
    registerForm
  },
  data () {
    return {
      snackbar: false,
      messageColor: 'success',
      message: '',
      btnLoading: false
    }
  },
  methods: {
    submit (form) {
      const {username, password} = form
      this.btnLoading = true
      api.register(form).then(data => {
        this.btnLoading = false
        this.snackbar = true
        if (data.code === 200) {
          this.message = '注册成功!'
          this.messageColor = 'success'
          setTimeout(() => {
            this.$router.replace({name: 'login', params: {username, password}})
          }, 1500)
        } else {
          this.messageColor = 'error'
        }
      }).catch(err => {
        this.btnLoading = false
        this.snackbar = true
        this.message = err.toString()
        this.messageColor = 'error'
      })
    }
  }
}
</script>

