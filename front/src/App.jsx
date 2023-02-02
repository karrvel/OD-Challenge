import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
// import Header from './components/Header/Header'
import Result from "./Page/Result/Result"
import {Routes,Route} from "react-router-dom";
import Home from './Page/Home/Home'

function App  ()  {
  return (
    <div className='App'>
       <Navbar/>
      {/* <Header/>  */}
      <Routes>
        <Route path='/reports/:vin' element={ <Result/>}/>
        <Route exact path='/' element={ <Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App