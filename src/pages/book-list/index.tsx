import styled from '@emotion/styled'
import { useIsToken } from '@/hooks'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState, useEffect } from 'react'
import { getBookList, learnBook, deletLearnBook, type BookProp } from '@/api/book'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Book } from '@/store'

function BookList() {
  useIsToken()
  const navigate = useNavigate()
  const [bookList, setBookList] = useState<BookProp[]>([])
  const typeMap = {
    1: '词汇本',
    2: '',
    3: '',
  }
  useEffect(() => {
    getBookList().then((res) => {
      setBookList(res)
    })
  }, [])
  function openMenuPop(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
    setDataId(event.currentTarget?.dataset.id)
  }
  function handleClose() {
    setAnchorEl(null)
    setTimeout(() => setDataId(undefined), 500)
  }
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [dataId, setDataId] = useState<string>()
  const open = Boolean(anchorEl)
  function toWordList() {
    navigate(`/word-list/${anchorEl?.dataset.id}`)
    handleClose()
  }
  function onLearn() {
    // 取消学习
    if (isLearnBook(dataId!)) {
      deletLearnBook(dataId!).then(() => Book.getlearnBook())
    } else {
      learnBook(dataId!).then(() => Book.getlearnBook())
    }
  }
  function isLearnBook(bookId: string, option?: [any, any]) {
    const find = Book.learnBook.find((item) => item.bookId == bookId)
    if (option) {
      return find ? option[0] : option[1]
    }
    return !!find
  }
  return (
    <div>
      <List>
        {bookList
          .sort((book) => isLearnBook(book.id, [-1, 1]))
          .map((book) => (
            <Item key={book.id}>
              <ImgBox>
                <img src={book.coverUrl} alt={book.name} />
                <h5>{book.name}</h5>
              </ImgBox>
              <Info>
                <div className='top'>
                  <span>40人学习中(功能未实现)</span>
                  <IconButton size='small' data-id={book.id} aria-label='delete' onClick={openMenuPop}>
                    <MoreVertIcon color='disabled' />
                  </IconButton>
                </div>
                <div className='middle'>
                  <p>
                    共有 {book.wordCount}个单词 {book.phraseCount}个短句
                  </p>
                </div>
                <div className='bottom'>
                  <p>
                    {typeMap[book.type]}
                    {isLearnBook(book.id, [' / 学习中', ''])}
                  </p>
                </div>
              </Info>
            </Item>
          ))}
      </List>
      <Popover open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuList>
          <li onClick={() => toWordList()}>查看单词例句</li>
          <li onClick={() => onLearn()}> {isLearnBook(dataId!, ['取消', '加入'])}学习</li>
        </MenuList>
      </Popover>
    </div>
  )
}

export default observer(BookList)

const List = styled.ul`
  padding: 25px 10px 10px;
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
    height: 118px;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    object-fit: cover;
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
