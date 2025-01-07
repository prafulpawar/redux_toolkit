import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
function App() {
  return (
     <Provider store={store}>
        <App/>
     </Provider>
  )
}

export default App