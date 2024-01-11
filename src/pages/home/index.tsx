// import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { useIsToken } from '@/hooks'
export default function Home() {
  useIsToken()
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
