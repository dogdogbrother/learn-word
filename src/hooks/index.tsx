import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * @description 没有token就去登录页面
 */
export function useIsToken() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [])
}
