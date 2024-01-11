import Styled from '@emotion/styled'
import LoginBg from '@/assets/img/login-bg.jpg'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  function onLogin() {
    localStorage.setItem('token', '123')
    navigate('/')
  }
  return (
    <Wrap>
      <Card>
        <button onClick={onLogin}>点击我登录</button>
      </Card>
    </Wrap>
  )
}

const Wrap = Styled.div`
  background-image: url(${LoginBg});
  height: 100vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Card = Styled.div`
  width: 80%;
  aspect-ratio: 1/1.15;
  border-radius: 2vw;
  background-color: rgb(255,255,255, 0.8);
`
