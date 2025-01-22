import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {ErrorBoundary} from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback/ErrorFallback.jsx'
import { PageLoader } from './components/Loaders/PageLoader.jsx'
import './index.css'
const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoader/>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
