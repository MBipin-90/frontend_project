import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function After_user() {
   const sid = sessionStorage.getItem('sid');
  return (
    <div>
        {
            sid ? <Outlet/> : <Navigate to='/'/>
        }
    </div>
  )
}

export default After_user