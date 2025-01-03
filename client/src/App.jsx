import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import "./App.css"
import UserDashboard from './pages/UserDashboard'
import UserProtectedRoute from './common/UserProtectedRoute'
import CaptainProtectedRoute from './common/CaptainProtectedRoute'
import CaptainDashboard from './pages/CaptainDashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/dashboard' 
          element={
            <UserProtectedRoute>
              <UserDashboard/>
            </UserProtectedRoute>
          }
        />
        <Route path='/captain-dashboard'
          element={
            <CaptainProtectedRoute>
              <CaptainDashboard/>
            </CaptainProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App