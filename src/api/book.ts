import { usePostFetch, useGetFetch } from './fetch'

export interface BookProp {
  id: string
  coverUrl: string
  name: string
  wordCount: number
  phraseCount: number
  type: '1' | '2' | '3'
}
export interface UserBookRelation {
  book: BookProp
  bookId: string
}
export function getBookList() {
  return useGetFetch<BookProp[]>({
    url: '/api/book/list',
  })
}

export function learnBook(bookId: string) {
  return usePostFetch({
    url: `/api/book/learn/${bookId}`,
  })
}

export function getlearnBook() {
  return useGetFetch<UserBookRelation[]>({
    url: '/api/book/user-learn',
  })
}

export function deletLearnBook(bookId: string) {
  return usePostFetch({
    url: `/api/book/learn/${bookId}`,
    method: 'DELETE',
  })
}
