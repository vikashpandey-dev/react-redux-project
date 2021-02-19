import React from 'react'
import User from './component/User'


import {Provider} from 'react-redux'
import store from './redux/store'
const App = () => {
    return (
        <div>
           <Provider store={store}>
           <User />
          

           </Provider>
            
        </div>
    )
}
export default App
