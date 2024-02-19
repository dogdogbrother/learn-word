import styled from '@emotion/styled'
import type { WordProp } from '@/api/word'

export default function WordItem(prop: { word: WordProp }) {
  const { word } = prop
  return (
    <Item>
      <p className='word-name'>{word.word}</p>
      <ExplainList>
        {word.youdao.explains.map((explain, index) => (
          <li key={index}>{explain}</li>
        ))}
      </ExplainList>
      <PhraseList>
        {word.phrases.map((phrase, index) => (
          <li key={phrase.id}>
            <IndexNum>{index + 1}.</IndexNum>
            <span>{phrase.phrase}</span>
          </li>
        ))}
      </PhraseList>
    </Item>
  )
}

const Item = styled.li`
  margin-bottom: 10px;
  .word-name {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`

const ExplainList = styled.ul`
  padding: 3px 3px 3px 10px;
  li {
    font-size: 12px;
    color: #666;
  }
`
const PhraseList = styled.ul`
  padding: 3px 3px 3px 10px;
  li {
    font-size: 14px;
  }
`
const IndexNum = styled.span`
  font-size: 12px;
  margin-right: 10px;
`
