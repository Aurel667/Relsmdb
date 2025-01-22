import {createBrowserRouter} from 'react-router-dom'
import { Layout } from '../views/Layout'
import { Home } from '../views/Home'
import { ErrorFallback } from '../components/ErrorFallback/ErrorFallback'
import { Single } from '../views/Film/Single'

export const AppRouter = createBrowserRouter([
    {
        element : <Layout/>,
        errorElement : <ErrorFallback/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/film/:filmid",
                element : <Single/>
            }
        ]
    }
])