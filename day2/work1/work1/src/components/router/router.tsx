import React from 'react'
import Header from "../abot.header/header"
import Contributers from '../about.contributer/contributers'
import Developers from "../about.developers/developers"
import Blogers from "../about.blogers/blogers"
import Designs from "../about.design/design"
import Terms from "../about.terms/terms"

import { Route, Routes } from 'react-router-dom'

export default function router() {
  return (
    <div>

           <h1></h1> 

        <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='contributers' element={<Contributers />} />
            <Route path='blogers' element={<Blogers/>} />
            <Route path='developers' element={<Developers/>} />
            <Route path='design' element={<Designs/>} />
            <Route path='terms' element={<Terms/>} />

        </Routes>
    
    </div>
  )
}
