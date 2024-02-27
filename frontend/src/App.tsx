import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App