import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Edit_profile() {

    const redirect = useNavigate();

    useEffect(() => {
        fetch_data();
    }, []);
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: ""
    });

    const { id } = useParams();
    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/customer/${id}`);
        setData(obj.data)
    }

    const changeHandel = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    function validation() {
        var result = true;
        if (data.name == "" || data.name == null) {
            toast.error('Name field is required');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('email field is required');
            result = false;
            return false;
        }
        if (data.password == "" || data.password == null) {
            toast.error('password field is required');
            result = false;
            return false;
        }
        if (data.mobile == "" || data.mobile == null) {
            toast.error('mobile field is required');
            result = false;
            return false;
        }
        return result;
    }
    const onsubmitHandel = async (e) => {
        e.preventDefault(); // page not refresh/relode
        if (validation()) {
            const res = await axios.put(`http://localhost:3000/customer/${data.id}`, data);
            setData({ ...data, name: "", email: "", password: "", mobile: "" });
            swal({
                title: "Your Profile Update Success!",
                text: "Thank you!",
                icon: "success",
                button: "ok!",
            });
            redirect('/userprofile/:id');
        }
    }

    return (
        <div>
            <style>
                {`
                .aboutmain h2 {
                   color: rgb(239, 223, 223);
                   padding-top: 130px;
                }
                `}
            </style>
            {/* about main */}
            <div className="container pb-5">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="../assest/img/cart-page-header-img.jpg" className="img-fluid" alt="Profile Header" />
                        <div className="text-overlay pt-5">
                            <h2>Welcome To Fruitique APP</h2>
                            <h1 className="h1 pt-3">Edit Profile</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={onsubmitHandel} role="form">
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={data.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Mobile</label>
                                <input type="number" value={data.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Save</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Edit_profile