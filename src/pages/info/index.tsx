import { useNavigate } from 'react-router-dom'

export default function Info() {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/login')
  }
  return <div onClick={logout}>退出登录</div>
}
