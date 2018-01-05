<template>
  <v-toolbar flat dense color="white">
    <v-list dense>
      <v-list-tile>
        <v-list-tile-avatar :class="userInfo.avatar">
          L
        </v-list-tile-avatar>
        <v-list-tile-content>
        <v-list-tile-title>{{userInfo.username}}</v-list-tile-title>
          <v-list-tile-sub-title></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-spacer></v-spacer>
    <v-btn icon @click.native="search">
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon @click.native="loadMore">
      <v-icon>more_horiz</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    search () {
      this.$emit('search-handle')
    },
    loadMore () {
      this.$emit('loadmore-handle')
    }
  }
}
</script>

