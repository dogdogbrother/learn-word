import Styled from '@emotion/styled'
import LoginBg from '@/assets/img/login-bg.jpg'
// import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import UserStore from '@/store/user'

export default observer(function Login() {
  const { login } = UserStore
  // const navigate = useNavigate()
  function onLogin() {
    // navigate('/')
    login({ username, password })
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Wrap>
      <Card>
        <TextField
          fullWidth
          label='用户名'
          id='login-username'
          variant='standard'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value)
          }}
        />
        <TextField
          fullWidth
          label='密码'
          id='login-password'
          variant='standard'
          margin='normal'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value)
          }}
        />
        <p className='explain'>首次登录就是注册</p>
        <Button style={{ width: '100%' }} variant='contained' onClick={onLogin}>
          登录
        </Button>
      </Card>
    </Wrap>
  )
})

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
  border-radius: 2vw;
  background-color: rgb(255,255,255, 0.8);
  padding: 20px 20px 20px;
  transform: translateY(-40px);
  .explain {
    padding-top: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #888;
  }
`
