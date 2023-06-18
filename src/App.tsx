import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Defaulayout'
import Results from './pages/Results'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: '/:year',
                    element: <Results />,
                    children: [
                        {
                            path: ':race',
                            element: <Results />,
                            children: [
                                {
                                    path: ':country',
                                    element: <Results />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
