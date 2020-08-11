import { observable, action, computed } from 'mobx'

import boards from '../json/boards.json'

class BoardStore {
  @observable boardList = []
  @observable currentBoardSlug

  @action
  fetchBoardList() {
    if (this.boardList.length) return

    this.boardList = boards
  }

  @action
  setCurrentBoard(slug) {
    this.currentBoardSlug = slug
  }

  @computed
  get currentBoard() {
    return this.boardList.find(board => board.slug === this.currentBoardSlug)
  }
}

export default BoardStore