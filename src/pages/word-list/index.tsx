import { getWordList, type WordProp } from '@/api/word'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import WordItem from './WordItem'

export default function WordList() {
  const { bookId } = useParams()
  const [wordList, setWordList] = useState<WordProp[]>([])
  useEffect(() => {
    getWordList({ bookId: bookId! }).then((res) => {
      console.log(res)
      setWordList(res)
    })
  }, [])
  return (
    <WordListWrap>
      {wordList.map((word) => (
        <WordItem word={word} key={word.id}></WordItem>
      ))}
    </WordListWrap>
  )
}

const WordListWrap = styled.ul`
  padding: 15px;
`
