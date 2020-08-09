<template>
  <v-navigation-drawer v-model="drawer" app clipped :bottom="isScreenXs">
    <v-container class="text-center d-lg-none">ななしBGM</v-container>
    <v-list dense nav>
      <v-list-item-group color="primary">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>ホーム</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div v-for="(group, groupIndex) in list" :key="groupIndex">
      <v-divider />
      <v-list dense nav subheader>
        <v-subheader v-text="group.name" />
        <v-list-item-group color="primary">
          <v-list-item
            v-for="member in group.members"
            :key="member.id"
            :to="`/v/${member.id}`"
          >
            <v-list-item-avatar>
              <v-img :src="`/images/${member.img}`" />
            </v-list-item-avatar>
            <v-list-item-content>
              {{ member.name }}
            </v-list-item-content>
            <v-list-item-action-text>
              {{ member.count }}
            </v-list-item-action-text>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'nuxt-composition-api'
import { groups as groupsData } from '@@/data/groups'
import { members as membersData } from '@@/data/members'
import { musics as musicsData } from '@@/data/musics'

export default defineComponent({
  setup(_, { root: { $vuetify } }) {
    const drawer = ref(null as boolean | null)
    const isScreenXs = computed(() => $vuetify.breakpoint.xs)

    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }

    const list = groupsData.map((group) => {
      return {
        name: group.name,
        members: group.members.map((memberId) => {
          const memberData = membersData.filter(
            (member) => member.id === memberId
          )[0]
          const musicData = musicsData.filter(
            (music) => music.memberId === memberId
          )[0]
          return {
            ...memberData,
            count: musicData.list.length,
          }
        }),
      }
    })

    return {
      drawer,
      isScreenXs,
      toggleDrawer,
      list,
    }
  },
})
</script>
