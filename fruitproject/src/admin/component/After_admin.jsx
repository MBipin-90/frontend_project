import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function After_admin() {
    const said = sessionStorage.getItem('said');
  return (
    <div>
        {
            said ? <Outlet/> : <Navigate to='/admin_login'/>
        }
    </div>
  )
}

export default After_admin