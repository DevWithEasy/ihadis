import { useRoutes } from "react-router-dom"
import { Book, Bookmark, Books, Chapter, Donate, Home, Layout, Privacy, Projects, Subjects, Tahkik, Writers,Search, GotoHadith, Subject, CategoriesHadith, Writer } from './pages/Index'

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
      path: '/hadith/subject/category',
      element : <Layout>
        <Subjects/>
      </Layout>
    },
    {
      path: '/hadith/subject/category/:id',
      element : <Layout>
        <Subject/>
      </Layout>
    },
    {
      path: '/hadith/subject/category/:catId/:id',
      element : <Layout>
        <CategoriesHadith/>
      </Layout>
    },
    {
      path: '/search',
      element : <Layout>
        <Search/>
      </Layout>
    },
    {
      path: '/:name/hadith/:id',
      element : <Layout>
        <GotoHadith/>
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
      path: '/writer/:id',
      element : <Layout>
        <Writer/>
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
