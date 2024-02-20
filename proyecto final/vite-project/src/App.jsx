import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './modules/layout'
import Home from './modules/home'
import Login from './modules/login'
import Subjects from './modules/subjects'
import Register from './modules/register'
import NotFound from './modules/notfound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App