import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App