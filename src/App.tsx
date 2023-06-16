import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Defaulayout'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <DefaultLayout />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
