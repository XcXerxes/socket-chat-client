<template>
  <div class="chat-wrapper">
    <v-card>
      <v-card-title primary-title>
        <register-form />
      </v-card-title>
      <v-card-actions>
      </v-card-actions>    
    </v-card>
  </div>
</template>
<script>
import registerForm from '@/components/register-form'
export default {
  components: {
    registerForm
  }
}
</script>

