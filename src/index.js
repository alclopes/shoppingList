import { createRoot } from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import './index.css'
import HomeView from './views/Home.view'

const container = document.getElementById('root')
const root = createRoot(container)
let persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HomeView />
    </PersistGate>
  </Provider>
)
