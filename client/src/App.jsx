import { useRoutes } from "react-router-dom"
import { Book, Bookmark, Books, Chapter, Donate, Home, Layout, Privacy, Projects, Subjects, Tahkik, Writers } from './pages/Index'

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
      path: '/:name',
      element : <Layout>
        <Book/>
      </Layout>
    },
    {
      path: '/:name/:chapterId',
      element : <Layout>
        <Chapter/>
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
