<template>
  <v-app>
    <LayoutHeader @toggleDrawer="toggleDrawer" />
    <LayoutLeftSide ref="LayoutLeftSide" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const LayoutLeftSide = ref()
    const toggleDrawer = (side: 'left' /* | 'right' */) => {
      if (side === 'left') {
        LayoutLeftSide.value.toggleDrawer()
      }
    }

    return {
      LayoutLeftSide,
      toggleDrawer,
    }
  },
})
</script>
