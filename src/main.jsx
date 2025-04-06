import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Spinner from './components/spinner/Spinner';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)



{/* <StrictMode>
<App />
</StrictMode>, */}