<template>
  <div class="chat-wrapper">
    <v-card>
      <v-card-title primary-title>
        <login-form />
      </v-card-title>
      <v-card-actions>
      </v-card-actions>    
    </v-card>
  </div>
</template>
<script>
import LoginForm from '@/components/login-form'
export default {
  components: {
    LoginForm
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

