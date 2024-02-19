import { makeObservable, observable, action } from 'mobx'
import { getlearnBook, type UserBookRelation } from '@/api/book'
class BookStore {
  learnBook: UserBookRelation[] = []
  constructor() {
    makeObservable(this, {
      learnBook: observable,
      getlearnBook: action,
    })
  }
  getlearnBook = () => {
    getlearnBook().then((res) => {
      this.learnBook = res
    })
  }
}

export default new BookStore()
