import Styled from '@emotion/styled'
import LoginBg from '@/assets/img/login-bg.jpg'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { User, Book } from '@/store'
import { LoadingButton } from '@mui/lab'

export default observer(function Login() {
  const navigate = useNavigate()
  function onLogin() {
    setLoading(true)
    User.login({ username, password })
      .then((res) => {
        const { token } = res
        localStorage.setItem('token', token)
        navigate('/')
        Book.getlearnBook()
      })
      .finally(() => setLoading(false))
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
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
          type='password'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value)
          }}
        />
        <p className='explain'>首次登录就是注册</p>
        <LoadingButton loading={loading} style={{ width: '100%' }} variant='contained' onClick={onLogin}>
          登录
        </LoadingButton>
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
