import { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { storesContext } from '../../../contexts/storesContext'
import { Layout } from '../../../components/Layout'
import { BoardPage } from '../../../components/BoardPage'
import { getApi } from '../../../libs/fetchApi';

export default observer(({ topics, all }) => {
  const { topicStore } = useContext(storesContext)

  useEffect(() => {
    topicStore.setTopics(topics)
  }, [JSON.stringify(topics)])

  return (
    <Layout>
      <BoardPage topics={topics} isAll={all} />
    </Layout>
  )
})

const fetchTopics = async (board) => {
  const data = await getApi(
    `boards/${board}`, 
    { topics: 1 }
  )

  return data.topics
}

const fetchAllTopics = async (board) => {
  const data = await getApi(`boards/${board}/topics`)

  return data
}

export const getServerSideProps = async ({ query }) => {
  const { board, all = false } = query
  const topics = all 
    ? await fetchAllTopics(board) 
    : await fetchTopics(board)

  return {
    props: { topics, all }
  }
}