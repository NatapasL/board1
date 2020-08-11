import { createContext } from 'react'

import BoardStore from '../stores/BoardStore'
import TopicStore from '../stores/TopicStore'
import PostStore from '../stores/PostStore'

export const storesContext = createContext({
  boardStore: new BoardStore(),
  topicStore: new TopicStore(),
  postStore: new PostStore()
})