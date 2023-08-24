import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/book/Books"
import Subjects from "./pages/subjects/Subjects"
import Projects from "./pages/Projects"

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element : <Home/>
    },
    {
      path: '/',
      element : <Books/>
    },
    {
      path: '/',
      element : <Subjects/>
    },
    {
      path: '/',
      element : <Projects/>
    },
  ])
  return routes
}

export default App
