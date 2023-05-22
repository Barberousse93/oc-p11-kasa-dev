import React from 'react'
import '../styles/components/Tags.css'

// composant tags
// props : tableau de tags
function Tags(datas) {
  const tags = datas.tags
  return (
    <div className="tagsContainer">
      {tags.map((tag, index) => {
        return (
          <div className="tag" key={index}>
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
