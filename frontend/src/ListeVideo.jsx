import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function ListeVideo() {
  const [videosByRow, setVideosByRow] = useState([])
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()

  const fetchArticles = (previousVideos) => {
    const resetBookmark = previousVideos.length === 0
    fetch('http://localhost:5984/edunova/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { image: { $gt: null } },
          fields: [ "_id", "videotitle", "image"],
          limit: 24,
          bookmark: resetBookmark ? null : requestedBookmark
        })
    })
      .then(x => x.json())
      .then(data => {
        setVideosByRow([
          ...previousVideos,
          ...Object.values(
            Object.groupBy(data.docs, (x, i) => Math.floor(i/3))
          )
        ])
        setNextBookmark(data.bookmark)
      })
  }

  useEffect(() => {
    fetchArticles(videosByRow)
  }, [requestedBookmark])
  
  return (
    <main className="container">
      {videosByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <Video {...y} key={j} />
          )}
        </div>
      )}
      <button type="submit" onClick={ () => setRequestedBookmark(nextBookmark) }>
        Suivant
      </button>
    </main>
  )
}

function Video({_id, videotitle, image}) {
  return (
    <article>
      <header>
        <p>{_id}</p>
      </header>
      <Link to={_id} className="miniature">
          <h2>{videotitle}</h2>
          <img src={image} alt={videotitle} className="bottom-image"/>
      </Link>
    </article>
  )
}

export default ListeVideo
