import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import { storesContext } from '../../contexts/storesContext'

export const SideBar = observer(({ active }) => {
  const { boardStore } = useContext(storesContext)

  useEffect(() => {
    console.log('mounted')
    boardStore.fetchBoardList()
  }, [])

  if (!boardStore.boardList.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {active && boardStore.boardList.map(board => (
        <div key={board.id}>
          <Link href="/[board]" as={`/${board.slug}`}>
            <a>
              {board.title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
})

export default SideBar
