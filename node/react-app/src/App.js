import React from 'react'
import { Route, Routes } from 'react-router'
import RootLa



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='random' element={<Ramdom />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>

      </Route >

    </Routes >
  )
}

export default App
