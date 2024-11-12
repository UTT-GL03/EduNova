import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();
  const [videodict, setVideo] = useState(null);
  
  useEffect(() => {
    fetch('/src/assets/sample_data.json')
      .then(x => x.json())
      .then(data => {
        const article = data.videos.find(x => id === x.issued);
        setVideo(article || {});
      })
      .catch(error => {
        console.error("Erreur lors du chargement des données :", error);
      });
  }, [id]);

  if (!videodict) {
    return <div>Chargement...</div>;
  }

  const { videotitle, transcript, video } = videodict;

  return (
    <main className="container">
      <article>
        <header>
          <h2>{videotitle}</h2>
        </header>
        <div className="lect_video">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        {transcript && transcript.split('\n\n').map((x, i) => (
          <p key={i}>{x}</p>
        ))}
      </article>
    </main>
  );
}

export default Video;

