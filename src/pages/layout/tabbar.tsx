import styled from '@emotion/styled'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import HomeIcon from '@mui/icons-material/Home'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Tabbar() {
  const location = useLocation() // location.pathname = book-list / info
  const navigate = useNavigate()
  function toPage(pathUrl: string) {
    if (pathUrl === location.pathname) return
    navigate(pathUrl, { replace: true })
  }
  const barList = [
    {
      path: '/app/home',
      Icon: (props: any) => <HomeIcon {...props} />,
      name: '学习',
    },
    {
      path: '/app/book-list',
      Icon: (props: any) => <BookOutlinedIcon {...props} />,
      name: '词本',
    },
    {
      path: '/app/info',
      Icon: (props: any) => <AccountCircleOutlinedIcon {...props} />,
      name: '我的',
    },
  ]
  return (
    <TabBar>
      {barList.map((bar, index) => (
        <div key={index} onClick={() => toPage(bar.path)} className={location.pathname == bar.path ? 'active' : undefined}>
          {bar.Icon({
            color: location.pathname == bar.path ? 'primary' : undefined,
            fontSize: 'small',
          })}
          <span>{bar.name}</span>
        </div>
      ))}
    </TabBar>
  )
}

const TabBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: space-around;
  padding: 3px 0;
  border-top: 1px solid #ddd;
  font-size: 12px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 42px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    :not(.active):active {
      background-color: rgba(25, 118, 210, 0.1);
    }
  }
  .active {
    span {
      color: #1976d2;
    }
  }
`
