import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
            <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Default options for all toasts
          duration: 3000,
          style: {
            background: '#1a2332',
            color: '#ffffff',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '0.95rem',
            fontWeight: '500',
          },
          // Success toasts
          success: {
            style: {
              background: '#1a2332',
              border: '1px solid rgba(0, 255, 136, 0.4)',
            },
            iconTheme: {
              primary: '#00ff88',
              secondary: '#1a2332',
            },
          },
          // Error toasts
          error: {
            style: {
              background: '#1a2332',
              border: '1px solid rgba(255, 0, 85, 0.4)',
            },
            iconTheme: {
              primary: '#ff0055',
              secondary: '#1a2332',
            },
          },
        }}
      />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
);