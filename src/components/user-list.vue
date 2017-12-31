<template>
  <v-list class="user-list">
    <template v-for="i in 20">
      <v-list-tile avatar ripple @click="itemClick(i)" >
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>leo</v-list-tile-title>
          <v-list-tile-sub-title>在干嘛？</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
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
  methods: {
    itemClick (index) {
      this.$emit('item-click', '', index)
      console.log('click')
    }
  }
}
</script>

