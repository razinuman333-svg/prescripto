import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Doctors' element={<Doctors/>}/>
           <Route path='/Doctors/:speciality' element={<Doctors/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/MyProfile' element={<Myprofile/>}/>
            <Route path='/My-Appointments' element={<MyAppointments/>}/>
            <Route path='/Appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
