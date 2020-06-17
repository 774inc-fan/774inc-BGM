import { Middleware } from '@nuxt/types'
import { authenticatedStore } from '@/store'

const myMiddleware: Middleware = async ({
  redirect,
  app: { $firebase },
  route
}) => {
  await new Promise<firebase.User>((resolve, reject) => {
    $firebase
      .auth()
      .onAuthStateChanged((user) =>
        user === null ? reject(new Error()) : resolve(user)
      )
  })
    .then((user) => {
      console.log(`Authenticated as ${user.uid}`)
    })
    .catch(() => {
      authenticatedStore.setNextUrl(route.path)
      redirect('/auth/login')
    })
}

export default myMiddleware
