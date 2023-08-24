import { useRoutes } from "react-router-dom"
import {Books,Layout, Home, Projects, Subjects} from './pages/Index'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element : <Home/>
    },
    {
      path: '/allhadiths',
      element : <Layout>
        <Books/>
      </Layout>
    },
    {
      path: '/',
      element : <Layout>
        <Subjects/>
      </Layout>
    },
    {
      path: '/',
      element : <Projects/>
    },
  ])
  return routes
}

export default App
