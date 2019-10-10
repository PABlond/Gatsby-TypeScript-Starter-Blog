import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaList, FaGripVertical } from "react-icons/fa"

export default ({ content }) => {
  const [ui, setUi] = useState<{
    isMobile: Boolean
    column: Boolean
  }>({
    isMobile: true,
    column: true,
  })

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth > 768) setUi({ ...ui, isMobile: false })
    }
  }, [])

  return (
    <>
      {!ui.isMobile && (
        <div id="ui-posts-selector">
          <div>
            <a onClick={() => setUi({ ...ui, column: false })}>
              <FaList />
            </a>
            <a onClick={() => setUi({ ...ui, column: true })}>
              <FaGripVertical />
            </a>
          </div>
        </div>
      )}

      <section id="posts">
        {content.map((post, i: number) => {
          return (
            <div className={ui.column ? "col-md-6" : "post-row"} key={i}>
              <h3>{post.title}</h3>
              <Link to={post.slug}>
                <p>{post.excerpt}</p>
              </Link>

              <p className="post-date">{post.date}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}
