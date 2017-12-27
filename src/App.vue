<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer id="inspire"></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import './assets/sass/reset.scss';
  @import './assets/sass/public.scss';
</style>
