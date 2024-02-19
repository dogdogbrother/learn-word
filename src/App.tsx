import { Book, User } from '@/store'
import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    User.getInfo().catch((err) => {
      if (err === 'Authentication Error') {
        navigate('/login')
      }
    })
    Book.getlearnBook()
  }, [])
  return <Outlet></Outlet>
}

export default App
