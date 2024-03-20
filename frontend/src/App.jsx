import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/verify' element={<Register />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
