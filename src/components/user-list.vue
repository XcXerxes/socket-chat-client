<template>
  <v-list class="user-list">
    <template v-for="(item, index) in list">
      <v-list-tile avatar ripple @click="itemClick(i)" :key="index" >
        <v-list-tile-avatar :class="setColor">
          {{item.username | setName}}
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.username}}</v-list-tile-title>
          <v-list-tile-sub-title>在干嘛？</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
import {randomColor} from '@/utils'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  computed: {
    setColor () {
      return randomColor()
    }
  },
  filters: {
    setName (val) {
      return val.substr(0, 1).toLocaleUpperCase()
    }
  },
  methods: {
    itemClick (index) {
      this.$emit('item-click', '', index)
      console.log('click')
    }
  }
}
</script>

