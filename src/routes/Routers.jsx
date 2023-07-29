import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import {Route, Routes} from "react-router-dom"
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element></Route>
    </Routes>
  )
}

export default Routers