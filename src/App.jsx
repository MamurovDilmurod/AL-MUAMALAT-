import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import RootLayout from './layout/RootLayout'
import NotFound from './components/NotFound'
import Login from './components/Login'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Route>
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
