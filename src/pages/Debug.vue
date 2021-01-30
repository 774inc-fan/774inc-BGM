<template>
  <q-page padding>

    <h1 class="app-h1">
      Debug
    </h1>

    <h2 class="app-h2">
      Check for duplicate musics
    </h2>
    <div v-if="conflictYoutube.length === 0" class="app-alert app-alert--tip">
      <p>No issue detected🎉</p>
    </div>
    <div v-else class="app-alert app-alert--danger">
      <ul>
        <li v-for="(music, _) in conflictYoutube" :key="_">
          {{ music.youtube }}
        </li>
      </ul>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { musicData } from 'app/data/musics'

export default defineComponent({
  setup () {
    const conflictYoutube = musicData
      .filter((music) => {
        return musicData.filter((x) => x.youtube === music.youtube).length > 1
      })

    return { conflictYoutube }
  }
})
</script>
