<template>
  <v-content>
    <v-toolbar flat>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Leo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="(item, index) in menus" :key="index" @click="">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="item.action">
          <v-switch v-model="light" color="info"></v-switch>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-content>
</template>
<script>
import {menus} from '@/config/menu.config'
export default {
  data () {
    return {
      menus,
      light: false
    }
  }
}
</script>

