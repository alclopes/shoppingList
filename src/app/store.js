import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../features/products/products.slice'

console.log('todo: redux-persist')

export const store = configureStore({
  reducer: { products: productsReducer },
})


// // #########################################################
// // Versão ReduxToolkit

// import { configureStore } from '@reduxjs/toolkit'
// import productsReducer from '../features/products/products.slice'

// console.log('todo: redux-persist')

// export const store = configureStore({
//   reducer: { products: productsReducer },
// })

// // #########################################################
// // Versão Redux + Persist

// import { createStore, combineReducers } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import productsReducer from './Products/Products.reducer'

// const rootReducer = combineReducers({
//   products: productsReducer,
// })

// const persistedReducer = persistReducer(
//   {
//     key: 'root',
//     storage,
//   },
//   rootReducer
// )

// export const store = createStore(persistedReducer)
// export const persistedStore = persistStore(store)
