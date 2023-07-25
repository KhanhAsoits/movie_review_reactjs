import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ShowTimes from '../pages/showtimes'
import DetailFilm from '../pages/detailFilm'
import TicketMV from '../pages/ticket'
import Home from '../pages/trang-chu/home'
import {ListMovie} from "../pages/listMovie";
import ChooseLocation from '../pages/chooseLocation'

export const AppRoute = (props) => {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/showtimes',
            element: <ShowTimes/>,
        },
        {
            path: '/detail-film/:movieId',
            element: <DetailFilm/>,
        },
        {
            path: '/list-movie',
            element: <ListMovie/>
        },
        {
            path: '/ticket-film',
            element: <TicketMV/>,
        },
        {
            path: '/choose-location',
            element: <ChooseLocation />,
        },
    ])
    return <RouterProvider router={route}/>
}
