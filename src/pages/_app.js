import Head from 'next/head'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'
import { Global } from '@emotion/core'

import { globalStyle } from '../styles/global'
import { storesContext } from '../contexts/storesContext'

const App =  ({ Component, pageProps }) => {
  const router = useRouter()
  const { boardStore, topicStore } = useContext(storesContext)
  const { board, topic } = router.query

  useEffect(() => {
    if (!board) return

    boardStore.setCurrentBoard(board)
  }, [board])

  useEffect(() => {
    if (!topic) return

    topicStore.setCurrentTopic(topic)
  }, [topic])

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;600&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default App