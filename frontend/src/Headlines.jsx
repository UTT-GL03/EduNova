import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Headlines() {
  const articlesByRow = Object.values(
    Object.groupBy(data.articles, (x, i) => Math.floor(i/3))
  )
  return (
    <main className="container">
      {articlesByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <Headline {...y} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function Headline({videotitle, issued, section, image, id}) {
  return (
    <article>
      <header>
        <p>Cours {id}</p>
      </header>
      <Link to={issued} className="miniature">
          <h2>{videotitle}</h2>
          <img src={image} alt={videotitle} className="bottom-image"/>
      </Link>
    </article>
  )
}

export default Headlines
