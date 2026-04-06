import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Signup() {

    const [data, setdata] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    })
    const changeHandel = (a) => {
        setdata({ ...data, id: new Date().getTime().toString(), status: "Unblock", [a.target.name]: a.target.value }); //a.target is the HTML element that triggered the event
        console.log(data);
    }

    function validation() {
        var result = true;

        if (data.name == "" || data.name == null) {
            toast.error('Pleas enter your name');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('Pleas enter your email');
            result = false;
            return false;
        }
        if (data.password == "" || data.password == null) {
            toast.error('Pleas enter your password');
            result = false;
            return false;
        }
        if (data.mobile == "" || data.mobile == null) {
            toast.error('Pleas enter your mobile');
            result = false;
            return false;
        }
        return result;
    }

    const onsubmitHandel = async (a) => {
        a.preventDefault(); // page not refresh/relode
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/customer`, data);
            setdata({ ...data, name: "", email: "", password: "", mobile: "" });
            swal({
                title: "Sing up Success!",
                text: "Your Account success full Sing up!",
                icon: "success",
                buttons: "OK!"
            })
            return false;
        }
    }

    return (
        <div>
            <style>
                {`
                .signup-btn-icon {
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    padding: 10px 20px;
                    background: #198754;
                    color: #fff;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 500;
                    transition: 0.3s ease;
                }
                .Link {
                    text-decoration: none;
                }
                .signup-btn-icon:hover {
                    text-decoration: none;
                    background: #198754;
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                `}
            </style>
            {/* about main */}
            <div className="container">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                        <div className="text-overlay pt-5">
                            <h1 className="h1 pt-5">Signup Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid bg-light pt-5">
                <div className="col-md-6 m-auto text-center pt-5">
                    <h1 className="h1 pt-5">Signup Us</h1>
                </div>
            </div> */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={onsubmitHandel} role="form">
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">

                                <label class="form-label">
                                    <i class="bi bi-person"></i>  Full Name<span className='text-danger'>*</span>
                                </label>
                                <input type="text" value={data.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                                <small class="text-danger" id="nameError"></small>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Enter Image URL<span className='text-danger'>*</span></label>
                                <input type="url" value={data.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail"><i class="bi bi-envelope"></i>  Email<span className='text-danger'>*</span></label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname"><i class="bi bi-lock"></i>  Password<span className='text-danger'>*</span></label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname"><i class="bi bi-telephone"></i>  Mobile<span className='text-danger'>*</span></label>
                                <input type="number" value={data.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-start mt-2">
                                <Link to="/login" className="signup-btn-icon">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Already have an account?<b>Login Here</b>
                                </Link>
                            </div>
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn signup-btn-icon">Create Account</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup