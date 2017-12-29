<template>
  <v-from v-model="valid" ref="form" style="width: 100%">
    <v-text-field label="用户名" v-model="registForm.username"
      :counter="15"
      prepend-icon="account_circle"
      required
     />
     <v-text-field label="密码" v-model="registForm.password" 
     :counter="16"
     prepend-icon="lock_outline"
     required
     />
     <v-text-field label="确认密码" v-model="registForm.confirm_password"
      :counter="16"
      prepend-icon="lock_open"
      required
      />
      <v-text-field label="邮箱" v-model="registForm.email"
        :counter="16"
        prepend-icon="email"
        required
      />
      <v-layout row wrap>
        <v-flex xs3 offset-xs1>
          <v-btn color="error">重置</v-btn>
        </v-flex>
        <v-flex xs3>
          <v-btn color="primary">确定</v-btn>
        </v-flex>
      </v-layout>
  </v-from>
</template>
<script>

export default {
  data: () => ({
    registForm: {
      username: '',
      password: '',
      confirm_password: '',
      email: ''
    }
  })
}
</script>

