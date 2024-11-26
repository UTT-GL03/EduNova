import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function ListeVideo() {
  const [videosByRow, setVideosByRow] = useState([])

  useEffect(() => {
    fetch('http://localhost:5984/edunova/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sort: [{ _id: "desc" }],
        fields: [ "_id", "videotitle", "image"],
        limit: 25
      })
    })
      .then(x => x.json())
      .then(data => {
        setVideosByRow(
          Object.values(
            Object.groupBy(data.rows, (x, i) => Math.floor(i/3))
          )
        )
      })
  }, [])
  
  return (
    <main className="container">
      {videosByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <Video {...y.doc} key={j} />
          )}
        </div>
      )}
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
