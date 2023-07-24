import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/trang-chu'
import ShowTimes from '../pages/showtimes'
import Login from '../container/layout/auth/login'
import Register from '../container/layout/auth/register'

export const AppRoute = (props) => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/showtimes',
      element: <ShowTimes />,
    },
  ])
  return <RouterProvider router={route} />
}
