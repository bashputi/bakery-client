import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './route/AuthProvider'
import myRouter from './route/Router'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
