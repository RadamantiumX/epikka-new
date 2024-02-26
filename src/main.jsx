import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css';
import router from './router';
import { ContextProvider } from './context/ContextForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
     <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
