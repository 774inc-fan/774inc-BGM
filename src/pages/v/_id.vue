<template>
  <v-container>
    <v-row v-if="member.list.length !== 0">
      <v-col
        v-for="(item, i) in member.list"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="3"
      >
        <v-card>
          <v-card-title>
            <v-chip-group v-if="typeof item.tags !== 'undefined'">
              <v-chip
                v-for="(tag, j) in item.tags"
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
              v-if="typeof item.source !== 'undefined'"
              large
              icon
              :href="item.source"
            >
              <v-icon>
                mdi-web
              </v-icon>
            </v-btn>
            <v-btn
              v-if="typeof item.youtube !== 'undefined'"
              large
              icon
              :href="`https://youtu.be/${item.youtube}`"
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
              :src="`https://www.youtube.com/embed/${item.youtube}`"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-alert type="warning">
          <p>
            すみません、まだ情報がありません…ぜひ教えて下さい！
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
import { songs } from '@@/data/songs'

export default defineComponent({
  setup(_, { root: { $route } }) {
    const member = songs.filter(
      (member) => member.memberId === $route.params.id
    )[0]

    return {
      member
    }
  }
})
</script>
