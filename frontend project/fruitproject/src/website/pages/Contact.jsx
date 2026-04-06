import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Contact() {

    const [data, setdata] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        Message: ""
    });

    const changeHandel = (e) => {
        setdata({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(data);
    }

    function validation() {
        var result = true;

        if (data.name == "" || data.name == null) {
            toast.error('Please enter your name');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('Please enter your email');
            result = false;
            return false;
        }
        if (data.phone == "" || data.phone == null) {
            toast.error('Please enter your phone');
            result = false;
            return false;
        }
        if (data.Message == "" || data.Message == null) {
            toast.error('Please enter your message');
            result = false;
            return false;
        }
        return result;
    }

    const onsubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contact`, data);
            setdata({ ...data, name: "", email: "", phone: "", Message: "" });
            swal({
                title: "Inquiry Submitted Success!",
                text: "Your Inquiry is a Submitted Success!",
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
                .signup-btn-icon:hover {
                    text-decoration: none;
                    background: #198754;
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                `}
            </style>
            {/* shop main */}
            <div className="container">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                        <div className="text-overlay">
                            <h1 className="text-center aboutmain1">Contact</h1>
                            <ol className="breadcrumb justify-content-center d-flex">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="about.html">About</a></li>
                                <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
                                <li className="breadcrumb-item"><a href="blog.html">Blog</a></li>
                                <li className="breadcrumb-item active ">Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row py-5 text-center">
                    <div className="col-lg-6 m-auto">
                        <p>Green Agriculture</p>
                        <h1>Our Best Product</h1>
                        <h2>I can help you.</h2>
                        <div className="line my-4" />
                        <p>Any query and any product to contact form.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 pb-5 pt-5">
                                <form className="row g-3" onSubmit={onsubmitHandel}>
                                    <div className="col-lg-12">
                                        <label htmlFor="inputname4" className="form-label"><i class="bi bi-person"></i>  Name<span className='text-danger'>*</span></label>
                                        <input type="text" value={data.name} onChange={changeHandel} className="form-control" id="name" name="name" />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="inputEmail4" className="form-label"><i class="bi bi-envelope"></i>  Email<span className='text-danger'>*</span></label>
                                        <input type="email" value={data.email} onChange={changeHandel} className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="inputnumber4" className="form-label"><i class="bi bi-telephone"></i>  Phone no :<span className='text-danger'>*</span></label>
                                        <input type="number" value={data.phone} onChange={changeHandel} className="form-control" id="phone" name="phone" />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="inputMessage" className="form-label"><i class="bi bi-chat-left-dots"></i>  Message<span className='text-danger'>*</span></label>
                                        <textarea className="form-control" value={data.Message} onChange={changeHandel} rows={3} id="Message" name="Message" />
                                    </div>
                                    <div className="col text-end mt-2">
                                        <button type="submit" className="btn signup-btn-icon">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-2" />
                            <div className="col-lg-4 pb-5 pt-5">
                                <img src="./assest/img/phone.png" className="img-fluid" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact