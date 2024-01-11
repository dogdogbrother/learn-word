import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Home from '@/pages/home'
import BookList from '@/pages/book-list'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/book-list',
        element: <BookList />,
      },
      {
        path: '',
        element: <Navigate to='/book-list' />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default () => {
  // function blockerFunction() {

  // } as BlockerFunction
  return <RouterProvider router={router}></RouterProvider>
}
