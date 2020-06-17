<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert type="error">
          [{{ error.statusCode }}] {{ error.message }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  setup({ error }) {
    return {
      error
    }
  }
})
</script>
