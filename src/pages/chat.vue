<template>
  <v-flex lg8 offset-lg2 xs12 class="room-wrapper">
    <v-navigation-drawer 
    absolute
    temporary
    v-model="drawerShow">
    <drawer-list />
    </v-navigation-drawer>
    <v-layout row wrap style="height: 100%">
      <v-flex lg2 xs4 class="user-content">
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
      <v-flex lg10 xs8>
        <toolbar-content  :user-info="userInfo" 
        @search-handle="historySearch" @loadmore-handle="historyLoadmore"/>
        <div class="chat-content__list">
          <v-content class="scroll-y" ref="scrollEle">
            <v-list class="chat-history__content" v-for="(item, index) in messageList" :key="index">
              <v-list-tile avatar ripple>
                <v-list-tile-avatar :class="item.avatar">
                  {{item.username | setName}}
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{item.username}}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{item.message}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-content>
          <v-toolbar  flat color="white">
            <v-btn icon>
              <v-icon>insert_link</v-icon>
            </v-btn>
            <v-form style="width: 100%" @submit.prevent.stop="submitMessage">
              <v-text-field  @keypress.enter="submitMessage" v-model="message"></v-text-field>
            </v-form>
            <v-btn icon>
              <v-icon>mood</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mic</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-flex>
    </v-layout>
</v-flex>
</template>
<script>
import user from '@/components/user-list'
import toolbarContent from '@/components/content-toolbar'
import drawerList from '@/components/drawer-list'
import {mapGetters} from 'vuex'
import io from 'socket.io-client'
import scroll from 'scroll'
import ease from 'ease-component'
import filterMixins from '@/mixins/filter'
export default {
  components: {
    drawerList,
    user,
    toolbarContent
  },
  mixins: [filterMixins],
  data: () => ({
    drawerShow: false,
    userActiveIndex: -1,
    userList: [],
    message: '',
    messageList: []
  }),
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    submitMessage (event) {
      event.preventDefault()
      if (this.message) {
        this.socket.emit('user-message', Object.assign({}, this.userInfo, {
          message: this.message
        }))
        this.message = ''
        const {scrollEle} = this.$refs
        if (scrollEle.$el.offsetHeight < scrollEle.$el.scrollHeight) {
          scroll.top(scrollEle.$el, scrollEle.$el.scrollHeight, { ease: ease.inQuad })
        }
      }
    },
    // 历史记录更多
    historyLoadmore () {
      console.log('loadmore')
    },
    // 历史记录搜索
    historySearch () {
      console.log('search')
    },
    userItemClick (item, index) {
      this.userActiveIndex = index
    }
  },
  created () {
    this.$store.commit('user_info_receive')
  },
  mounted () {
    debugger
    this.socket = io('http://localhost:8888')
    const userInfo = this.$store.getters.userInfo
    this.socket.emit('user-online', userInfo)
    this.socket.on('user-online', data => {
      console.log('user=====' + data)
      if (data) {
        this.userList = data
      }
    })
    this.socket.on('user-message', data => {
      debugger
      this.messageList.push(data)
    })
  }
}
</script>

