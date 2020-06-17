<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>ログイン</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col>
                <h2>メールアドレス・パスワード</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="signInWithEmailAndPasswordField.email"
                  label="メールアドレス"
                  type="email"
                  outlined
                />
                <v-text-field
                  v-model="signInWithEmailAndPasswordField.password"
                  label="パスワード"
                  type="password"
                  outlined
                />
                <v-btn
                  block
                  color="primary"
                  @click="signInWithEmailAndPassword"
                >
                  ログイン
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row>
              <v-col>
                <h2>SNSアカウントでログイン</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-btn block color="primary" @click="signInWithGoogle">
                  Googleでログイン
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn block color="primary" @click="signInWithFacebook">
                  Facebookでログイン
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn block color="primary" @click="signInWithTwitter">
                  Twitterでログイン
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn block color="primary" @click="signInWithGitHub">
                  GitHubでログイン
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-overlay v-model="state.loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
    <v-snackbar
      v-model="state.errorNotify.flag"
      left
      bottom
      :timeout="6000"
      color="error"
      multi-line
    >
      {{ state.errorNotify.text }}
      <v-btn icon @click="state.errorNotify.flag = false">
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { authenticatedStore } from '@/store'

export default defineComponent({
  setup(_, { root: { $firebase, $router } }) {
    const state = reactive({
      loading: true,
      errorNotify: {
        show: false,
        text: ''
      }
    })

    $firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        $router.push(authenticatedStore.nextUrl)
        return
      }
      state.loading = false
    })

    const signInWithEmailAndPassword = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithEmailAndPassword(
          signInWithEmailAndPasswordField.email,
          signInWithEmailAndPasswordField.password
        )
        .then(() => {
          // onAuthStateChangedで処理を行う
        })
        .catch((error) => {
          state.errorNotify = {
            show: true,
            text: (() => {
              switch (error.code) {
                case 'auth/wrong-password':
                  return 'パスワードが違います'
                case 'auth/too-many-requests':
                  return 'ログイン試行回数が多すぎます（少し経ってたからまたお試しください）'
                default:
                  console.warn(`未定義のエラーです： \`${error.code}\``)
                  return error.message
              }
            })()
          }
        })
        .finally(() => {
          state.loading = false
        })
    }
    const signInWithEmailAndPasswordField = reactive({
      email: '',
      password: ''
    })

    const signInWithPhone = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithRedirect(new $firebase.auth.PhoneAuthProvider())
    }

    const signInWithGoogle = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithRedirect(new $firebase.auth.GoogleAuthProvider())
    }

    const signInWithFacebook = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithRedirect(new $firebase.auth.FacebookAuthProvider())
    }

    const signInWithTwitter = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithRedirect(new $firebase.auth.TwitterAuthProvider())
    }

    const signInWithGitHub = () => {
      state.loading = true
      $firebase
        .auth()
        .signInWithRedirect(new $firebase.auth.GithubAuthProvider())
    }

    return {
      state,
      signInWithEmailAndPassword,
      signInWithEmailAndPasswordField,
      signInWithPhone,
      signInWithGoogle,
      signInWithFacebook,
      signInWithTwitter,
      signInWithGitHub
    }
  }
})
</script>
