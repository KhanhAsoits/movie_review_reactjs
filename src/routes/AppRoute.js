import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/trang-chu'

export const AppRoute = (props) => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ])
  return <RouterProvider router={route} />
}
