<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert
          type="error"
          v-text="`[${error.statusCode}] ${error.message}`"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
})
</script>
