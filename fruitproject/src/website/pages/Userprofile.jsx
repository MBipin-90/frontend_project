import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Userprofile() {

    const redirect = useNavigate();

    const id = sessionStorage.getItem('sid');

    useEffect(() => {
        fetch_data();
    }, []);

    const [data, setdata] = useState({});


    const logout = () => {
        sessionStorage.removeItem('sid');
        sessionStorage.removeItem('sname');
        alert('Logout Success!');
        redirect('/');
        return false;
    };

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/customer/${id}`);
        setdata(obj.data);
    };
    // onst fetch_data = async () => {
    //     try {
    //         const obj = await axios.get(`http://localhost:3000/customer/${id}`);
    //         setdata(obj.data || {});
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const [edit_cate, setEdit_cate] = useState({
        id: "",
        name: "",
        image: ""
    });

    const editHandel = async (id) => {
        const obj = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(obj.data);
        setEdit_cate(obj.data);
        return false;
    }

    const changeHandel = (e) => {
        setEdit_cate({ ...edit_cate, [e.target.name]: e.target.value });
        console.log(edit_cate);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.put(`http://localhost:3000/categories/${edit_cate.id}`, edit_cate);
        setEdit_cate({ ...edit_cate, name: "", image: "" });
        toast.success('Categories Updated success');
        fetch_data();
        return false;
    }

    return (
        <div>
            <style>
                {`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #eff2f1;
        }

        .hero-section {
            background-color: #3b5d50;
            padding: 60px 0;
            min-height: 300px;
        }

        .hero-content h1 {
            color: white;
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .hero-content p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
            margin-bottom: 30px;
            max-width: 500px;
        }

        .btn-custom {
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .btn-shop {
            background-color: #f9bf29;
            color: #2f2f2f;
            margin-right: 15px;
        }

        .btn-shop:hover {
            background-color: #e0ab1f;
        }

        .btn-explore {
            border: 1px solid white;
            color: white;
        }

        .btn-explore:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .profile-section {
            padding: 80px 0;
        }

        .profile-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 900px;
            margin: 0 auto;
        }

        .profile-header {
            background: linear-gradient(135deg, #3b5d50 0%, #2d4a3f 100%);
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .profile-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background-color: #f9bf29;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            border: 5px solid white;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .profile-avatar i {
            font-size: 50px;
            color: #2f2f2f;
        }

        .profile-header h2 {
            color: white;
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .profile-header p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
        }

        .profile-body {
            padding: 40px;
        }

        .profile-info-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #2f2f2f;
            margin-bottom: 25px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eff2f1;
        }

        .info-row {
            display: flex;
            padding: 15px 0;
            border-bottom: 1px solid #eff2f1;
        }

        .info-row:last-child {
            border-bottom: none;
        }

        .info-label {
            font-weight: 600;
            color: #3b5d50;
            width: 150px;
            flex-shrink: 0;
        }

        .info-value {
            color: #6c757d;
            flex-grow: 1;
        }

        .btn-edit {
            background-color: #3b5d50;
            color: white;
            padding: 12px 40px;
            border: none;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 20px;
        }

        .btn-edit:hover {
            background-color: #2d4a3f;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(59, 93, 80, 0.3);
        }

        .btn-logout {
            background-color: #dc3545;
            color: white;
            padding: 12px 40px;
            border: none;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 20px;
            margin-left: 10px;
        }

        .btn-logout:hover {
            background-color: #c82333;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
        }

        .stats-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid #eff2f1;
        }

        .stat-box {
            text-align: center;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
        }

        .stat-box i {
            font-size: 2rem;
            color: #3b5d50;
            margin-bottom: 10px;
        }

        .stat-number {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2f2f2f;
        }

        .stat-label {
            color: #6c757d;
            font-size: 0.9rem;
            margin-top: 5px;
        }

        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }

            .profile-body {
                padding: 30px 20px;
            }

            .info-row {
                flex-direction: column;
            }

            .info-label {
                width: 100%;
                margin-bottom: 5px;
            }
        }
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
                            <h1 className="h1 pt-3">Your Profile</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Section */}
            <div className="profile-section pt-3">
                <div className="container pt-2">
                    <div className="profile-card">
                        {/* Profile Header */}
                        <div className="profile-header">
                            {/* Profile Image */}
                            <div className="profile-avatar mb-2">
                                {data.image ? (
                                    <img
                                        src={data.image}
                                        alt="Profile"
                                        className="rounded-circle"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                ) : (
                                    <i className="bi bi-person-circle fs-1"></i>
                                )}
                            </div>

                            <h2 id="userName">{data.name}</h2>
                            <p id="userEmail">{data.email}</p>
                        </div>
                        {/* Profile Body */}
                        <div className="profile-body">
                            <h3 className="profile-info-title">Personal Information</h3>
                            <div className="info-row">
                                <div className="info-label">Full Name:</div>
                                <div className="info-value" id="displayName">{data.name}</div>
                            </div>
                            <div className="info-row">
                                <div className="info-label">Email</div>
                                <div className="info-value" id="displayEmail">{data.email}</div>
                            </div>
                            <div className="info-row">
                                <div className="info-label">Phone:</div>
                                <div className="info-value" id="displayPhone">{data.mobile}</div>
                            </div>
                            <div className="info-row">
                                <div className="info-label">Status:</div>
                                <div className="info-value" id="displayMemberSince">{data.status}</div>
                            </div>
                            {/* Stats Section */}
                            <div className="stats-section">
                                <div className="stat-box">
                                    <i className="bi bi-bag-check-fill" style={{ color: "rgb(243, 119, 168)" }}></i>
                                    <div className="stat-number">12</div>
                                    <div className="stat-label">Total Orders</div>
                                </div>
                                <div className="stat-box">
                                    <i className="bi bi-heart-fill" style={{ color: "rgb(255, 10, 10)" }}></i>
                                    <div className="stat-number">5</div>
                                    <div className="stat-label">Wishlist Items</div>
                                </div>
                                <div className="stat-box">
                                    <i className="bi bi-star-fill" style={{ color: "rgb(247, 185, 70)" }}></i>
                                    <div className="stat-number">8</div>
                                    <div className="stat-label">Reviews Written</div>
                                </div>
                            </div>
                            {/* Action Buttons */}
                            <div className="text-center">
                                <button className="btn-edit" onClick={() => redirect('/edit_profile/' + data.id)}>
                                    <i className="bi bi-pencil-square"></i> Edit Profile
                                </button>
                                <button className="btn-logout" onClick={logout}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Userprofile