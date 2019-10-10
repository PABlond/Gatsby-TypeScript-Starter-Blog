import React, { useState, useEffect } from "react"
import { FaList, FaGripVertical } from "react-icons/fa"
import LastContent from "./LastContent"
import OldContent from './OldContent'

export default ({ content }) => {
  console.log(content)
  const [isUICol, setIsUICol] = useState<boolean>(true)
  return (
    <>
      <div id="ui-posts-selector">
        <div>
          <a onClick={() => setIsUICol(false)}>
            <FaList />
          </a>
          <a onClick={() => setIsUICol(true)}>
            <FaGripVertical />
          </a>
        </div>
      </div>
      <section id="posts">
        <LastContent content={content.slice(0, 4)} isUICol={isUICol} />
        <OldContent content={content.slice(4)} />
      </section>
    </>
  )
}
