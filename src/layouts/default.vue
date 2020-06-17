<template>
  <v-app>
    <v-app-bar app clipped-left elevation="1">
      <v-app-bar-nav-icon @click="state.drawer = !state.drawer" />
      <v-toolbar-title>
        NuxtTSVuetifyTemplate
      </v-toolbar-title>
      <v-spacer />
      <v-btn v-if="state.isAuthenticated" icon to="/auth/logout">
        <v-icon>
          mdi-logout-variant
        </v-icon>
      </v-btn>
      <v-btn v-else icon to="/auth/login">
        <v-icon>
          mdi-login-variant
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="state.drawer" app clipped>
      <div v-for="(list, listIndex) in drawerList" :key="`list-${listIndex}`">
        <v-divider v-if="listIndex !== 0" />
        <v-list dense nav :subheader="typeof list.subheader !== 'undefined'">
          <v-subheader v-if="typeof list.subheader !== 'undefined'">
            {{ list.subheader }}
          </v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(item, itemIndex) in list.items"
              :key="`list-${itemIndex}`"
              link
              :to="item.to"
              active-class="primary--text"
            >
              <v-list-item-icon v-if="typeof item.icon !== 'undefined'">
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-avatar v-if="typeof item.img !== 'undefined'">
                <v-img :src="item.img" />
              </v-list-item-avatar>
              <v-list-item-content>
                {{ item.text }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'

interface IDrawerList {
  subheader?: string
  items: {
    text: string
    to: string
    icon?: string
    img?: string
  }[]
}

export default defineComponent({
  setup(_, { root: { $firebase } }) {
    const state = reactive({
      drawer: null,
      isAuthenticated: $firebase.auth().currentUser !== null
    })

    const drawerList = [
      {
        items: [{ text: 'ホーム', to: '/', icon: 'mdi-home' }]
      }
    ] as IDrawerList[]

    return {
      state,
      drawerList
    }
  }
})
</script>
