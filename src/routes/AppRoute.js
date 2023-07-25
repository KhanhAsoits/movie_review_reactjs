import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShowTimes from '../pages/showtimes'
import DetailFilm from '../pages/detailFilm'
import TicketMV from '../pages/ticket'
import Home from '../pages/trang-chu/home'
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
    {
      path: '/detail-film',
      element: <DetailFilm />,
    },
    {
      path: '/ticket-film',
      element: <TicketMV />,
    },
  ])
  return <RouterProvider router={route} />
}
