<template>
  <v-container>
    <v-row>
      <v-col>
        <v-banner>
          <v-avatar>
            <v-img :src="`/images/${member.img}`" />
          </v-avatar>
          {{ member.name }}
        </v-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(music, i) in musics"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="3"
      >
        <v-card>
          <v-card-title>
            <v-chip-group v-if="typeof music.tags !== 'undefined'">
              <v-chip
                v-for="(tag, j) in music.tags"
                :key="j"
                label
                color="secondary"
              >
                #{{ tag }}
              </v-chip>
            </v-chip-group>
            <v-chip-group v-else>
              <v-chip label>
                （タグなし）
              </v-chip>
            </v-chip-group>
            <v-spacer />
            <v-btn
              v-if="typeof music.source !== 'undefined'"
              large
              icon
              :href="music.source"
            >
              <v-icon>
                mdi-web
              </v-icon>
            </v-btn>
            <v-btn
              v-if="typeof music.youtube !== 'undefined'"
              large
              icon
              :href="`https://youtu.be/${music.youtube}`"
            >
              <v-icon>
                mdi-youtube
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <iframe
              type="text/html"
              width="100%"
              height="200"
              :src="`https://www.youtube.com/embed/${music.youtube}`"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="musics.length === 0">
      <v-col>
        <v-alert type="warning">
          <p>
            すみません、まだ情報がありません…よかったら教えて下さい！
          </p>
          <v-btn href="https://twitter.com/ozelotjp_v">
            <v-icon left>
              mdi-twitter
            </v-icon>
            ozelotjp_v
          </v-btn>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { members as membersData } from '@@/data/members'
import { musics as musicsData } from '@@/data/musics'

export default defineComponent({
  setup(_, { root: { $nuxt, $route } }) {
    const member = membersData.filter(
      (member) => member.id === $route.params.member
    )[0]
    if (typeof member === 'undefined') {
      $nuxt.error({ statusCode: 404 })
      return
    }
    const musics = musicsData.filter((music) => music.memberId === member.id)[0]
      .list

    return {
      member,
      musics,
    }
  },
})
</script>
