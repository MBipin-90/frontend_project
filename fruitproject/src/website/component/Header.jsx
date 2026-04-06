import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function Header() {

    const user_id = sessionStorage.getItem('sid');

    const redirect = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('sid');
        sessionStorage.removeItem('sname');
        swal({
            title: "Logout Success !",
            text: "Your Account success full Logout!",
            icon: "success",
            buttons: "OK!"
        })
        redirect('/');
        return false;
    }
    return (
        <div>
            <style>
                {`
                .fruitique-nav{
                   background: #0f3d2e;
                   color: #e5f5ee;
                }
                .fruitique-search{
                   background: #e5f5ee;
                }
                `}
            </style>
            <nav className="navbar fixed-top navbar-expand-lg pb-4 pt-3 navbar1 fruitique-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>🍓 Fruitique</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="bi bi-list" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">
                                    Pages
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/fruit">Fruit</NavLink></li>
                                    {/* <li><NavLink className="dropdown-item" to="/juice">Juice</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/gallery">Gallery</NavLink></li> */}
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/blog">
                                    Blog
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                            </li>

                            {(() => {
                                if (sessionStorage.getItem('sid')) {
                                    return (
                                        <li className="nav-item">
                                            <a className="nav-link text-light" href='#' onClick={logout}  >LogOut</a>
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/login">Login</Link>
                                        </li>
                                    )
                                }
                            })()}

                        </ul>
                        <form className="d-flex">
                            <input className="px-2 search fruitique-search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn1 me-2 px-3 " type="submit">Search</button>
                            <span><i className="bi bi-bag-check" /></span>
                            {(() => {
                                if (sessionStorage.getItem('sid')) {
                                    return (
                                        <NavLink className="nav-icon position-relative text-decoration-none" to={`/userprofile/${user_id}`}>
                                            <i className="bi bi-person-circle"></i>
                                        </NavLink>
                                    )
                                }
                            })()}
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header