<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Hello World
          </v-card-title>
          <v-card-text>
            <p>Now Time: {{ now() }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  middleware: 'authenticated',
  setup() {
    const now = () => {
      const date = new Date()
      const y = date.getFullYear()
      const m = ('0' + (date.getMonth() + 1)).slice(-2)
      const d = ('0' + date.getDate()).slice(-2)
      const h = ('0' + date.getHours()).slice(-2)
      const i = ('0' + date.getMinutes()).slice(-2)
      const s = ('0' + date.getSeconds()).slice(-2)
      return `${y}-${m}-${d} ${h}:${i}:${s}`
    }

    return {
      now
    }
  }
})
</script>
