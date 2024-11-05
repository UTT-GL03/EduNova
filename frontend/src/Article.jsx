import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const {id} = useParams()
  const {heading, creator, issued, content, videotitle, transcript, image} = data.articles.find(x => id === x.issued)
  return (
    <main className="container">
      <article>
        <header>
          <h2>{videotitle}</h2>
          <address> {creator} </address>
          <time> {dayjs(issued).format('LLLL')} </time>
        </header>
        <img src={image} alt={heading} class="coursVideo"/>

        {transcript.split('\n\n').map((x, i) =>
          <p key={i}>
            {x}
          </p>
        )}
      </article>
    </main>
  )
}

export default Article
