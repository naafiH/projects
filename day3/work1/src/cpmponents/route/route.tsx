import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from "../Nav"
import Header from "../Header"
import Choose from "../choose"
import Job from "../jobguarent"
import Whatsnext from "../whatsnext"
import Questions from "../Questions"
import Terms from "../Terms"

export default function route() {
  return (
    <div>

        <div>
          <Nav/>
          
        </div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='choose' element={<Choose />} />
        <Route path='job' element={<Job />} />
        <Route path='whatsnext' element={<Whatsnext />} />
        <Route path='questiond' element={<Questions />} />
        <Route path='terms' element={<Terms />} />
      </Routes>
    </div>
  )
}
