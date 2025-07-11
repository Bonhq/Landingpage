// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx';
// import store from './store/index.js';
import store from './BlogContainer/store/index.js';
import './index.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
