<template>
  <transition name="slide-x-transition">
    <v-layout row class="chat-wrapper">
      <v-flex lg4 xs12 offset-lg4>
      <v-card>
         <v-toolbar color="primary" dark dense>
          <v-toolbar-title>用户登录</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn flat @click.native="$router.push('/register')">
            用户注册
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title primary-title>
          <login-form @submit-handle="submit" :loading="btnLoading" />
        </v-card-title>
        <v-card-actions>
        </v-card-actions>    
      </v-card>
      </v-flex>
    </v-layout>
  </transition>
</template>
<script>
import LoginForm from '@/components/login-form'
import api from '@/api'
export default {
  components: {
    LoginForm
  },
  data () {
    return {
      btnLoading: false
    }
  },
  methods: {
    submit (form) {
      this.btnLoading = true
      api.login(form).then(data => {
        this.btnLoading = false
        if (data.code === 200) {
          console.log('success')
        }
      }).catch(err => {
        this.btnLoading = false
        console.log(err)
      })
    }
  }
}
</script>

