import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Shop() {

    const navigate = useNavigate();

    useEffect(() => {
        fetch_data();
        fetch_data2(null);
    }, []);

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/categoies`);
        setData(obj.data)
    }

    // categories click. 

    const fetch_data2 = async (id) => {
        if (id == null) {
            const obj = await axios.get(`http://localhost:3000/products`);
            setData2(obj.data)
        }
        else {
            const obj = await axios.get(`http://localhost:3000/products?cate_id=${id}`);
            setData2(obj.data)
        }
    }

    //     {/* order page */}

    // const navigate = useNavigate();

    const handleAddToCart = (item) => {
        // Get current cart from localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add new item
        cart.push(item);

        // Save back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Navigate to order page
        navigate("/order");
    };
    return (
        <div>
            {/* shop main */}
            <div className="container-fluid pl-5 pr-5">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                        <div className="text-overlay">
                            <h1 className="text-center aboutmain1">Shop</h1>
                            <ol className="breadcrumb justify-content-center d-flex">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="about.html">About</a></li>
                                <li className="breadcrumb-item active ">Shop</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* shop  */}
            <div className="container-fluid pl-5 pr-5">
                <div className="row mt-5 pl-5 pr-5">
                    <h1>Fresh fruit shop</h1>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                        <span id="search-icon-1" className="input-group-text p-3">
                                            <i className="bi bi-search" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6" />
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Default Sorting:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value>Nothing</option>
                                            <option value="hello">Apple</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4>Categories</h4>
                                            <ul className="list-unstyled shop1">
                                                <li>
                                                    <div className="d-flex justify-content-between ">
                                                        <p onClick={()=> fetch_data2(null)}><i className="bi bi-apple" /><span className="shop2">All Item</span></p>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                {/* <li>
                                                    <div className="d-flex justify-content-between ">
                                                        <a href="#"><i className="bi bi-apple" /><span className="shop2">Seasonal Fruit</span></a>
                                                        <span>(9)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex justify-content-between ">
                                                        <a href="#"><i className="bi bi-apple" /><span className="shop2">Importaint Fruit</span></a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li> */}
                                                {
                                                    data.map((value, index, arr) => {
                                                        return (
                                                            <div className="d-flex justify-content-between ">
                                                                <p onClick={()=>fetch_data2(value.id)}><i className="bi bi-apple" /><span className="shop2"></span>
                                                                {value.name}
                                                                </p>
                                                                <span>(3)</span>
                                                            </div>
                                                        )
                                                    }
                                                    )}
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="mb-3 shop3">
                                            <h4 className="mb-2">Price</h4>
                                            <input type="range" className="form-range " id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
                                            <output id="amount" name="amount" min-value={0} max-value={500} htmlFor="rangeInput">0</output>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4>Additional</h4>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Bestfruit" />
                                                <label htmlFor="Categories-1"> Today Best Product</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-2" name="Categories-1" defaultValue="Bestfruit" />
                                                <label htmlFor="Categories-2"> Fresh</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-3" name="Categories-1" defaultValue="Bestfruit" />
                                                <label htmlFor="Categories-3"> Sales</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-4" name="Categories-1" defaultValue="Bestfruit" />
                                                <label htmlFor="Categories-4"> Discount</label>
                                            </div>
                                            <div className="mb-2">
                                                <input type="radio" className="me-2" id="Categories-5" name="Categories-1" defaultValue="BestfruitS" />
                                                <label htmlFor="Categories-5"> Offer</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 shop5">
                                        <h4 className="mb-3">Featured products</h4>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4 shop7">
                                                <img src="./assest/img/vegetable-item-3.png" className="img-fluid rounded" alt />
                                            </div>
                                            <div>
                                                <div className="d-flex mb-2 star">
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-half" /></span>
                                                </div>
                                                <h6 className="mb-2">Big Banana</h6>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">$ 3.09</h5>
                                                    <h5 className="text-danger text-decoration-line-through">$ 4.13</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4 shop7">
                                                <img src="./assest/img/orange-img.png" className="img-fluid rounded" alt />
                                            </div>
                                            <div>
                                                <div className="d-flex mb-2 star">
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-half" /></span>
                                                </div>
                                                <h6 className="mb-2">orange</h6>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">$ 2.99</h5>
                                                    <h5 className="text-danger text-decoration-line-through">$ 4.99</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4 shop7">
                                                <img src="./assest/img/pineapple-img.png" className="img-fluid rounded" alt />
                                            </div>
                                            <div>
                                                <div className="d-flex mb-2 star">
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-half" /></span>
                                                </div>
                                                <h6 className="mb-2">Pineapple</h6>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">$ 3.39</h5>
                                                    <h5 className="text-danger text-decoration-line-through">$ 4.99</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4 shop7">
                                                <img src="./assest/img/apple-img.png" className="img-fluid rounded" alt />
                                            </div>
                                            <div>
                                                <div className="d-flex mb-2 star">
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-half" /></span>
                                                </div>
                                                <h6 className="mb-2">Apple</h6>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">$ 2.09</h5>
                                                    <h5 className="text-danger text-decoration-line-through">$ 3.99</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="rounded me-4 shop7">
                                                <img src="./assest/img/mango-img1.png" className="img-fluid rounded" alt />
                                            </div>
                                            <div>
                                                <div className="d-flex mb-2 star">
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                    <span><i className="bi bi-star-fill" /></span>
                                                </div>
                                                <h6 className="mb-2">Mango</h6>
                                                <div className="d-flex mb-2">
                                                    <h5 className="fw-bold me-2">$ 3.99</h5>
                                                    <h5 className="text-danger text-decoration-line-through">$ 5.99</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center my-4">
                                            <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill w-100 card1 shop6">Vew
                                                More</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-2">
                                            <img src="./assest/img/fruite-juice.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Start Map funtion */}

                            <div className="col-lg-9 shop8">
                                <div className="row g-4 ">
                                    {
                                        data2.map((value, index, arr) => {
                                            return (
                                                <div className="col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body shop9">
                                                            <div className="star">
                                                                <span><i className="bi bi-star-fill" /></span>
                                                                <span><i className="bi bi-star-fill" /></span>
                                                                <span><i className="bi bi-star-fill" /></span>
                                                                <span><i className="bi bi-star-fill" /></span>
                                                            </div>
                                                            <img src={value.image} onClick={() => navigate('/shop_singel/' + value.id)} className=" " alt />
                                                            <h4 className="head1">{value.name}</h4>
                                                            <p className="per1">2 x 459 / 190z</p>
                                                            <p className="per1">{value.sdesc}</p>
                                                            <p className="per1">{value.ldesc}</p>
                                                            <h4 className="head1"><span className="text-danger"><del>₹{value.price}</del></span> ₹{value.disc_price}</h4>
                                                            {/* <button className="btna my-4">ADD TO CART</button> */}
                                                            <button className="btna my-4" onClick={() => handleAddToCart(value)}>ADD TO CART</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                    <div className="col-lg-12">
                                        <ul className="pagination pagination-lg justify-content-center mt-5 shoppagination">
                                            <li className="page-item shoppagination1">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* End Map function*/}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Shop