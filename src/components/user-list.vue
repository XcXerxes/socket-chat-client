<template>
  <v-list class="user-list">
    <template v-for="(item, index) in list">
      <v-list-tile avatar ripple @click="itemClick(i)" :key="index" >
        <v-list-tile-avatar :class="item.avatar">
          {{item.username | setName}}
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.username}}</v-list-tile-title>
          <v-list-tile-sub-title></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
import filtersMixins from '@/mixins/filter'
import {randomColor} from '@/utils'
export default {
  mixins: [filtersMixins],
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
  methods: {
    itemClick (index) {
      this.$emit('item-click', '', index)
      console.log('click')
    }
  }
}
</script>

