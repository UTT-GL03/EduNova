import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function ListeVideo() {
  const [videosByRow, setVideosByRow] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        setVideosByRow(
          Object.values(
            Object.groupBy(data.videos, (x, i) => Math.floor(i/3))
          )
        )
      })
  }, [])

  return (
    <main className="container">
      {videosByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <Video {...y} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function Video({videotitle, issued, image, id}) {
  return (
    <article>
      <header>
        <p>Video {id}</p>
      </header>
      <Link to={issued} className="miniature">
          <h2>{videotitle}</h2>
          <img src={image} alt={videotitle} className="bottom-image"/>
      </Link>
    </article>
  )
}

export default ListeVideo
