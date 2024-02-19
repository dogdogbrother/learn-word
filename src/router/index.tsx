import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from '@/pages/login'
import Layout from '@/pages/layout'
import BookList from '@/pages/book-list'
import Info from '@/pages/info'
import WordList from '@/pages/word-list'
import Home from '@/pages/home'
import Learn from '@/pages/learn'
import App from '@/App'
const Router = [
  {
    path: '/app',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'book-list',
        element: <BookList />,
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: '',
        element: <Navigate to='/app/home' />,
      },
    ],
  },
  {
    path: '/word-list/:bookId',
    element: <WordList />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/learn',
    element: <Learn />,
  },
  {
    path: '',
    element: <Navigate to='/app' />,
  },
]
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: Router,
  },
])

export default () => {
  // function blockerFunction() {

  // } as BlockerFunction
  return <RouterProvider router={router}></RouterProvider>
}
