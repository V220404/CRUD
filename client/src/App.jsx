import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import User from './User'
import React from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />}></Route>
      <Route path='/create' element={<CreateUser />}></Route>
      <Route path='/update/:id' element={<UpdateUser />}></Route>
     
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
