import './App.css'
import { Route, Routes } from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path= "/" element={<PostListPage></PostListPage>}></Route>
        <Route path= "/post/:postId" element={<PostDetailPage></PostDetailPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
