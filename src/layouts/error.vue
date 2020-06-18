<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert type="error"> [{{ statusCode }}] {{ message }} </v-alert>
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
    const statusCode = error.statusCode
    const message = (() => {
      if (typeof error.message !== 'undefined') {
        return error.message
      }
      switch (statusCode) {
        case 404:
          return 'ページが見つかりませんでした'
        default:
          return '何らかのエラーが発生しました'
      }
    })()

    return {
      statusCode,
      message
    }
  }
})
</script>
