import React from 'react'
import Footers from '../UI/Footers'
import Headers from '../UI/Headers'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <> 
    <Headers />
    {/* Anything that comes between Header & Footer will be handled by Outlet internally  */}
    <Outlet/>
    <Footers />
    
    </>
  )
}

export default AppLayout
