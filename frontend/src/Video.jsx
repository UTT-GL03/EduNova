import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Video() {
  const {id} = useParams()
  const {videotitle, transcript, image} = data.videos.find(x => id === x.issued)
  return (
    <main className="container">
      <article>
        <header>
          <h2>{videotitle}</h2>
        </header>
        <img src={image} alt={videotitle} class="coursVideo"/>

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
