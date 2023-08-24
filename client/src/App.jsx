import { useRoutes } from "react-router-dom"
import {Books,Layout, Home, Projects, Subjects,Bookmark,Tahkik,Donate ,Writers,Privacy} from './pages/Index'

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
      path: '/allsubjects',
      element : <Layout>
        <Subjects/>
      </Layout>
    },
    {
      path: '/bookmark',
      element : <Layout>
        <Bookmark/>
      </Layout>
    },
    {
      path: '/donate',
      element : <Layout>
        <Donate/>
      </Layout>
    },
    {
      path: '/projects',
      element : <Layout>
        <Projects/>
      </Layout>
    },
    {
      path: '/privacy',
      element : <Layout>
        <Privacy/>
      </Layout>
    },
    {
      path: '/writers',
      element : <Layout>
        <Writers/>
      </Layout>
    },
    {
      path: '/tahkik',
      element : <Layout>
        <Tahkik/>
      </Layout>
    },
  ])
  return routes
}

export default App
