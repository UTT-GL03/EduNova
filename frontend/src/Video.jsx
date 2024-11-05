import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Video() {
  const {id} = useParams()
  const {videotitle, transcript, video} = data.videos.find(x => id === x.issued)
  return (
    <main className="container">
      <article>
        <header>
          <h2>{videotitle}</h2>
        </header>
        <div className="lect_video">
        <video controls>
          <source src={video} type={"video/mp4"} />
        </video>
        </div>

        {transcript.split('\n\n').map((x, i) =>
          <p key={i}>
            {x}
          </p>
        )}
      </article>
    </main>
  )
}

export default Video
