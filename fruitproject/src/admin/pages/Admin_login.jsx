import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Admin_login() {

    const redirect = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (a) => {
        setData({ ...data, [a.target.name]: a.target.value }); //a.target is the HTML element that triggered the event
        console.log(data);
    }


    const onsubmitHandel = async (a) => {
        a.preventDefault(); // page not refresh/relode
        const res = await axios.get(`http://localhost:3000/admin?email=${data.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == data.password) {
                
                    //session create
                    sessionStorage.setItem('said', res.data[0].id);
                    sessionStorage.setItem('saname', res.data[0].name);

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
                alert('Login Failed Due Wrong Password!');
                return false;
            }
        }
        else {
            alert('Login Failed Due Email does not exist!');
            return false;
        }

    }

    return (
        <div class="wrapper">

            <div class="main-panel">
                <div class="content">
                    <div class="container-fluid">
                        <h4 class="page-title">Admin Login</h4>
                        <div class="row">
                            <div class="col-md-12">
                                <div className="container py-5">
                                    <div className="row py-5">
                                        <form className="col-md-9 m-auto" method="post" role="form" onSubmit={onsubmitHandel}>
                                            <div className="row">

                                                <div className="form-group col-md-12 mb-3">
                                                    <label htmlFor="inputemail">Email</label>
                                                    <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                                                </div>
                                                <div className="form-group col-md-12 mb-3">
                                                    <label htmlFor="inputname">Password</label>
                                                    <input type="password" value={data.password} onChange={changeHandel} className="form-control mt-1" id="password" name="password" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col text-end mt-2">
                                                    <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admin_login