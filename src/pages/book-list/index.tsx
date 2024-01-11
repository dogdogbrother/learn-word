import styled from '@emotion/styled'
import { useIsToken } from '@/hooks'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
export default function BookList() {
  useIsToken()
  const [menuPop, setMenuPop] = useState(false)
  function openMenuPop(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  function hanlde() {
    alert('123')
  }
  return (
    <div>
      <List>
        <Item>
          <ImgBox>
            <img src='http://file.freetoplay.cn/index.png' alt='楚门的世界' />
            <h5>楚门的世界</h5>
          </ImgBox>
          <Info>
            <div className='top'>
              <span>40人学习中</span>
              <IconButton size='small' aria-label='delete' onClick={openMenuPop}>
                <MoreVertIcon color='disabled' />
              </IconButton>
            </div>
            <div className='middle'>
              <p>一些单词本的信息展示</p>
            </div>
            <div className='bottom'>
              <p>影视</p>
            </div>
          </Info>
        </Item>
        <Item>
          <ImgBox>
            <img src='http://file.freetoplay.cn/index.png' alt='楚门的世界' />
            <h5>楚门的世界</h5>
          </ImgBox>
          <Info>
            <div className='top'>
              <span>40人学习中</span>
              <IconButton size='small' aria-label='delete' onClick={openMenuPop}>
                <MoreVertIcon color='disabled' />
              </IconButton>
            </div>
            <div className='middle'>
              <p>一些单词本的信息展示</p>
            </div>
            <div className='bottom'>
              <p>影视</p>
            </div>
          </Info>
        </Item>
        <Item>
          <ImgBox>
            <img src='http://file.freetoplay.cn/index.png' alt='楚门的世界' />
            <h5>楚门的世界</h5>
          </ImgBox>
          <Info>
            <div className='top'>
              <span>40人学习中</span>
              <IconButton size='small' aria-label='delete' onClick={openMenuPop}>
                <MoreVertIcon color='disabled' />
              </IconButton>
            </div>
            <div className='middle'>
              <p>一些单词本的信息展示</p>
            </div>
            <div className='bottom'>
              <p>影视</p>
            </div>
          </Info>
        </Item>
      </List>
      <Popover open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuList>
          <li onClick={hanlde}>查看例句</li>
          <li onClick={hanlde}>取消学习</li>
        </MenuList>
      </Popover>
    </div>
  )
}

const List = styled.ul`
  padding: 30px 10px 10px;
`

const Item = styled.li`
  background-color: #fff;
  border-radius: 12px;
  height: 140px;
  padding: 8px 10px;
  position: relative;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  display: flex;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`
const ImgBox = styled.div`
  position: relative;
  top: -16px;
  margin-right: 10px;
  img {
    width: 80px;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  h5 {
    width: 80px;
    text-align: center;
    font-size: 13px;
    color: #666;
  }
`

const Info = styled.div`
  flex: 1;
  color: #666;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  .middle {
    flex: 1;
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    color: #999;
  }
`

const MenuList = styled.ul`
  padding: 10px 0;
  color: #666;
  li {
    padding: 3px 15px;
    text-align: center;
    font-size: 14px;
    background-color: rgba(220, 220, 220, 0);
    transition: 0.3s;
    cursor: pointer;
    &:active {
      background-color: rgba(220, 220, 220, 0.3);
    }
  }
`
