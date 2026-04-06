import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Before_user() {
    const sid = sessionStorage.getItem('sid');
  return (
    <div>
        {
            sid ? <Navigate to='/'/> : <Outlet/>
        }
    </div>
  )
}

export default Before_user