import { createContext } from 'react'
import { ItemSlider } from '../components/Slider'
import { ContentCard } from '../components/ContentCard'

export const items: ItemSlider[] = [
  {
    image: 'weather.PNG',
    title: 'Weather Api consummer',
    category: 'React',
    content: (<ContentCard name='weather-api-consumer' labels={['React', 'Material Design', 'Axios', 'Responsive Design', 'Typescript']} />)
  }, {
    image: 'movies.PNG',
    title: 'Movies api OMDB',
    category: 'React',
    content: (<ContentCard name='movies-api-omdb' labels={['React', 'Material Design', 'Axios', 'Responsive Design', 'Typescript']} />)
  }, {
    image: 'porfolio.PNG',
    title: 'Porfolio',
    category: 'React',
    content: (<ContentCard name='porfolio' labels={['React', 'Nextjs', 'Material Design', 'Responsive Design', 'Typescript']} />)
  }, {
    image: 'menu.PNG',
    title: 'Menu Management',
    category: 'Vue',
    content: (<ContentCard name='menu-vue' labels={['Vue', 'Quasarjs', 'Material Design', 'Responsive Design', 'Typescript', 'Internationalization']} />)
  }, {
    image: 'api-menu.PNG',
    title: 'Api Menu',
    category: 'Nodejs',
    content: (<ContentCard name='api-menu' urlView='https://api-menu-nestjs.herokuapp.com/api' labels={['Nodejs', 'Typescript', 'Swagger', 'PostgreSQL', 'Sequelize', 'JWT']} />)
  }, {
    image: 'management-restaurants.PNG',
    title: 'Management restaurants',
    category: 'Vue',
    content: (<ContentCard name='restaurantix' urlView='https://api-menu-nestjs.herokuapp.com/api' labels={['Vue', 'Vuetify', 'Socket.io', 'Javascript', 'Material Design', 'Responsive Design']} />)
  }, {
    image: 'api-menu.PNG',
    title: 'Api Restaurants',
    category: 'Nodejs',
    content: (<ContentCard name='api-restaurantes' urlView='N/A' labels={['Socket.io', 'Swagger', 'Mongodb', 'Mongoose', 'JWT']} />)
  }, {
    image: 'faker-generator.png',
    title: 'Faker Generator',
    category: 'Vue',
    content: (<ContentCard name='fakerGenerator' urlView='N/A' labels={['Vue', 'Electron', 'Bootstrap']} />)
  }, {
    image: 'e-commers-api.png',
    title: 'E commers API',
    category: 'Nodejs',
    content: (<ContentCard name='e-commerse-api' urlView='https://e-commerse-api.herokuapp.com/api/' labels={['Nodejs', 'Typescript', 'Swagger', 'PostgreSQL', 'Sequelize', 'JWT']} />)
  }, {
    image: 'e-commers-admin.png',
    title: 'E commers Management',
    category: 'React',
    content: (<ContentCard name='e-commers-admin' labels={['Nodejs', 'Typescript', 'Swagger', 'PostgreSQL', 'Sequelize', 'JWT']} />)
  }
]
const ProjectsContext = createContext({
  items,
  filter: (search?: string) => {
    if (!search) return items
    if (search == 'All') return items
    return items.filter(item => item.category == search)
  }
})
export default ProjectsContext
