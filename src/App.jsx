import {RouterProvider} from 'react-router-dom'
import { AppRouter } from './route/AppRoutes'
import { FilmsContextProvider } from './store/FilmsContext'

function App() {
  return (
    <>
      <FilmsContextProvider>
        <RouterProvider router={AppRouter}/>
      </FilmsContextProvider>
    </>
  )
}

export default App
