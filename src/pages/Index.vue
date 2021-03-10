<template>
  <q-page padding>

    <div class="row q-col-gutter-sm">
      <div class="col-12">
        <q-banner v-if="typeof id === 'string'" inline-actions class="bg-info">
          現在「{{ name }}」が使用したBGMのみを表示しています。
          <template v-slot:action>
            <q-btn color="primary" label="フィルターを解除" to="/" />
          </template>
        </q-banner>
      </div>
      <div v-if="musics.length === 0" class="col-12">
        <q-banner inline-actions class="bg-warning">
          BGMが一曲もないようです・・・。よろしければ情報提供をお願いします！
          <template v-slot:action>
            <q-btn color="primary" label="情報を提供する" to="/about" />
          </template>
        </q-banner>
      </div>

      <div v-for="music in musics" :key="music.youtube" class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <q-card @click="modalOpen(music.youtube)" flat class="cursor-pointer">
          <q-img :src="`https://img.youtube.com/vi/${music.youtube}/mqdefault.jpg`">
            <div class="absolute-top">
              <div class="text-subtitle1">
                {{ music.name }}
              </div>
            </div>
            <div class="absolute-bottom">
              <template v-if="typeof id === 'undefined'">
                <q-avatar v-for="(member, _) in music.members" :key="_" size="md" class="q-mr-xs">
                  <img :src="`/images/${member.member}.jpg`">
                </q-avatar>
              </template>
              <template v-else>
                <template v-for="(member, _) in music.members.filter((member) => member.member === id)">
                  <q-avatar v-if="member.tags.length === 0" :key="_" size="md" class="q-mr-xs">
                    <img :src="`/images/${member.member}.jpg`">
                  </q-avatar>
                  <q-chip v-else v-for="(tag, _) in member.tags" :key="_" size="16px" class="q-ma-none q-mr-xs">
                    <q-avatar>
                      <img :src="`/images/${member.member}.jpg`">
                    </q-avatar>
                    {{ tag }}
                  </q-chip>
                </template>
              </template>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>

    <!-- component課 -->
    <q-dialog v-model="modalShow">
      <q-card style="width: 1000px; max-width: 100vw">
        <q-card-section>
          <q-card-section class="row bg-primary text-white">
            <div class="col">
              <div class="text-h6">{{ modalState.name }}</div>
              <div class="text-subtitle2">by {{ modalState.author }}</div>
              <template v-for="(member, _) in modalState.members">
                <q-avatar v-if="member.tags.length === 0" :key="_" size="md" class="q-mr-xs">
                  <img :src="`/images/${member.member}.jpg`">
                </q-avatar>
                <q-chip v-else v-for="(tag, _) in member.tags" :key="_" size="16px" class="q-ma-none q-mr-xs">
                  <q-avatar>
                    <img :src="`/images/${member.member}.jpg`">
                  </q-avatar>
                  {{ tag }}
                </q-chip>
              </template>
            </div>
            <div class="col-auto">
              <q-btn :to="modalState.youtube" round flat :icon="icon.ionLogoYoutube" />
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section>
          <q-video :src="`https://www.youtube.com/embed/${modalState.youtube}?autoplay=1&loop=1&playlist=${modalState.youtube}`" :ratio="16/9" />
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import { ionFilter, ionLogoYoutube } from '@quasar/extras/ionicons-v5'
import { MusicDaum, musicData } from 'app/data/musics'
import { memberData } from 'app/data/members'

export default defineComponent({
  setup (_, { root }) {
    const icon = { ionFilter, ionLogoYoutube }

    const id = computed(() => root.$route.params.id)
    const name = computed(() => {
      return typeof root.$route.params.id === 'undefined'
        ? ''
        : memberData.filter((member) => member.key === root.$route.params.id)[0].name
    })

    const musics = computed(() => {
      const id = root.$route.params.id
      return typeof id === 'undefined'
        ? musicData
        : musicData.filter((music) => {
          return music.members.filter((musicMember) => {
            return musicMember.member === id
          }).length
        })
    })

    const modalShow = ref(false)
    const modalState = ref({} as MusicDaum)
    const modalOpen = (youtube: string) => {
      modalState.value = musicData.filter((music) => music.youtube === youtube)[0]
      modalShow.value = true
    }

    return { icon, id, name, musics, modalShow, modalState, modalOpen }
  }
})
</script>
