<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round :icon="icon.ionMenu" @click="left = !left" />
        <q-toolbar-title>
          ななしBGM
        </q-toolbar-title>
        <q-btn color="secondary" to="/about">
          このサイトについて
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list>
          <div>
            <q-item to="/">
              <q-item-section avatar>
                <q-icon :name="icon.ionPeople" />
              </q-item-section>
              <q-item-section>
                全てのVtuber
              </q-item-section>
            </q-item>
          </div>
          <div v-for="(group, groupIndex) in list" :key="groupIndex">
            <q-separator />
            <q-item-label header>
              {{ group.name }}
            </q-item-label>
            <q-item v-for="member in group.members" :key="member.id" :to="`/v/${member.id}`">
              <q-item-section avatar>
                <q-avatar>
                  <q-icon v-if="member.img === undefined" name="ion-person" />
                  <img v-else :src="`/images/${member.img}`" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                {{ member.name }}
              </q-item-section>
              <q-item-section v-if="member.count > 0" side>
                <q-badge :label="`${member.count}`" />
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { ionMenu, ionPeople, ionPerson } from '@quasar/extras/ionicons-v5'
import { groupData } from 'app/data/groups'
import { memberData } from 'app/data/members'
import { musicData } from 'app/data/musics'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const icon = { ionMenu, ionPeople, ionPerson }

    const left = ref(null)
    const list = groupData.map((group) => {
      return {
        ...group,
        members: memberData
          .filter((member) => member.group === group.key)
          .map((member) => {
            return {
              ...member,
              count: musicData.filter((music) => {
                return music.members.filter((musicMember) => {
                  return musicMember.member === member.key
                }).length > 0
              }).length
            }
          })
      }
    })

    return { icon, left, list }
  }
})
</script>
