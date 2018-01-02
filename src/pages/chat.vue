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
            <user  :activeIndex="userActiveIndex" @item-click="userItemClick" :list="userList"/>
          </v-content>
        </div>
      </v-flex>
      <v-flex lg10>
      </v-flex>
    </v-layout>
</v-flex>
</template>
<script>
import user from '@/components/user-list'
import drawerList from '@/components/drawer-list'
import {mapGetters} from 'vuex'
import io from 'socket.io-client'
export default {
  components: {
    drawerList,
    user
  },
  data: () => ({
    drawerShow: false,
    userActiveIndex: -1,
    userList: []
  }),
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    userItemClick (item, index) {
      this.userActiveIndex = index
    }
  },
  created () {
    this.$store.commit('user_info_receive')
  },
  mounted () {
    this.socket = io('http://localhost:8888')
    this.socket.emit('user-online', this.userInfo)
    this.socket.on('user-online', data => {
      console.log('user=====' + data)
      debugger
      if (data) {
        this.userList = data
      }
    })
  }
}
</script>

