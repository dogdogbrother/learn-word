import styled from '@emotion/styled'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
export default function Tabbar() {
  return (
    <TabBar>
      <div>
        <AccountCircleOutlinedIcon color='primary' fontSize='small'></AccountCircleOutlinedIcon>
        <span className='active'>词本</span>
      </div>
      <div>
        <BookOutlinedIcon fontSize='small'></BookOutlinedIcon>
        <span>我的</span>
      </div>
    </TabBar>
  )
}

const TabBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  border-top: 1px solid #ddd;
  font-size: 13px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .active {
    color: #1976d2;
  }
`
