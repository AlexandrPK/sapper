import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App'
import './css/minesweeper.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="Screen">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
)
