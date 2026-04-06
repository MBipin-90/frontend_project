import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Login() {

    const redirect = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (a) => {
        setData({ ...data, [a.target.name]: a.target.value }); //a.target is the HTML element that triggered the event
        console.log(data);
    }

    function validation(){
        var result = true;

        if (data.email == "" || data.email ==null){
            toast.error('pleas enter your email');
            result = false;
            return false;
        }
        if (data.password == "" || data.password ==null){
            toast.error('pleas enter your password');
            result = false;
            return false;
        }
        return result;
    }


    const onsubmitHandel = async (a) => {
        a.preventDefault(); // page not refresh/relode
        if(validation()){
        const res = await axios.get(`http://localhost:3000/customer?email=${data.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == data.password) {
                if (res.data[0].status == "Unblock") {

                    //session create
                    sessionStorage.setItem('sid', res.data[0].id);
                    sessionStorage.setItem('sname', res.data[0].name);

                    swal({
                        title:"Login Success!",
                        text:"Your Account success full login!",
                        icon:"success",
                        buttons:"OK!"
                    })
                    redirect('/');
                    return false;
                }
                else {
                    toast.error('Login Failed Due Blocked Account!');
                    return false;
                }
            }
            else {
                toast.error('Login Failed Due Wrong Password!');
                return false;
            }
        }
        else {
            toast.error('Login Failed Due Email does not exist!');
            return false;
        }
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
            <div className="container pb-5">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                        <div className="text-overlay pt-5">
                            <h1 className="h1 pt-5">Login Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <form className="col-md-9 m-auto" method="post" role="form" onSubmit={onsubmitHandel}>
                        <div className="row">

                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail"><i class="bi bi-envelope"></i>  Email<span className='text-danger'>*</span></label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname"><i class="bi bi-lock"></i>  Password<span className='text-danger'>*</span></label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                        </div>

                            <div className="row py-5">
                                <div className="col text-start mt-2">
                                    <Link to="/signup" className="signup-btn-icon">
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        If You not registered then<b>Signup Here</b>
                                    </Link>
                                </div>
                                <div className="col text-end mt-2">
                                    <button type="submit" className="btn signup-btn-icon">Login</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login