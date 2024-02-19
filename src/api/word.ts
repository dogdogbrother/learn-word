import { usePostFetch as _, useGetFetch } from './fetch'

export interface WordProp {
  id: string
  phrases: PhrasesProp[]
  word: string
  youdao: YoudaoProp
}
interface PhrasesProp {
  id: string
  phrase: string
  translation: string
}
interface YoudaoProp {
  explains: string[]
  isWord: boolean
  translation: string
  speakUrl: string
}
export function getWordList(query: { bookId: string }) {
  return useGetFetch<WordProp[]>({
    url: '/api/word/list',
    query,
  })
}
