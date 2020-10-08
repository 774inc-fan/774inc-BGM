<template>
  <v-app-bar app clipped-left elevation="1">
    <v-app-bar-nav-icon @click="toggleLeftDrawer" />
    <v-toolbar-title class="d-none d-sm-block">ななしBGM</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const toggleLeftDrawer = () => {
      emit('toggleDrawer', 'left')
    }

    return {
      toggleLeftDrawer,
    }
  },
})
</script>
