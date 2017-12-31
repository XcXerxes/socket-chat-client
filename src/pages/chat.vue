<template>
  <v-flex lg8 offset-lg2 xs12 class="room-wrapper">
    <v-navigation-drawer 
    absolute
    temporary
    v-model="drawerShow">
    <drawer-list />
    </v-navigation-drawer>
    <v-layout row wrap style="height: 100%">
      <v-flex lg2 class="user-content">
        <v-toolbar flat color="white">
          <v-toolbar-side-icon @click.native="drawerShow = true"></v-toolbar-side-icon>
         <v-text-field hide-details single-line></v-text-field>       
        </v-toolbar>
        <div class="user-content__list scroll-y">
          <v-content>
            <user-list  :activeIndex="userActiveIndex" @item-click="userItemClick"/>
          </v-content>
        </div>
      </v-flex>
      <v-flex lg10>
      </v-flex>
    </v-layout>
</v-flex>
</template>
<script>
import userList from '@/components/user-list'
import drawerList from '@/components/drawer-list'
export default {
  components: {
    drawerList,
    userList
  },
  data: () => ({
    drawerShow: false,
    userActiveIndex: -1
  }),
  methods: {
    userItemClick (item, index) {
      debugger
      this.userActiveIndex = index
    }
  }
}
</script>

