import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Contact from './pages/Contact'
import Register from './components/Register'
import Profile from './components/Profile'
import InternationalEducationalPrograms from './pages/InternationalEducationalPrograms'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/InternationalEducationalPrograms' element={<InternationalEducationalPrograms />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
