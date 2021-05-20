import { ItemSlider } from '../components/Slider'
import { ContentCard } from '../components/ContentCard'


export const items: ItemSlider[] = [
  {
    image: 'weather.PNG',
    title: 'Weather Api consummer',
    category: 'React',
    content: (<ContentCard name='weather-api-consumer' labels={['React', 'Material Design', 'Axios', 'Responsive Design']} />)
  }, {
    image: 'movies.PNG',
    title: 'Movies api OMDB',
    category: 'React',
    content: (<ContentCard name='movies-api-omdb' labels={['React', 'Material Design', 'Axios', 'Responsive Design']} />)
  }, {
    image: 'porfolio.PNG',
    title: 'Porfolio',
    category: 'React',
    content: (<ContentCard name='porfolio' labels={['React', 'Nextjs', 'Material Design', 'Responsive Design']} />)
  }
]
