import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { useIsToken } from '@/hooks'
import Tabbar from './tabbar'
export default function Layout() {
  useIsToken()
  return (
    <AppMain>
      <div>
        <Outlet></Outlet>
      </div>
      <Tabbar></Tabbar>
    </AppMain>
  )
}
const AppMain = styled.div`
  padding-bottom: 40px;
  position: relative;
`
