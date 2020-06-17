import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Authenticated from '@/store/authenticated'

/* eslint-disable import/no-mutable-exports */
let authenticatedStore: Authenticated
/* eslint-enable */

function initializeStores(store: Store<any>): void {
  authenticatedStore = getModule(Authenticated, store)
}

export { initializeStores, authenticatedStore }
