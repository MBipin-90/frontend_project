import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Shop_singel() {

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        fetch_data();
    }, []);

    const [data, setData] = useState({});

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/products/${id}`);
        setData(obj.data)
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
            {/* Open Content */}
            <section className="bg-light pt-5">
                <div className="container pb-5 pt-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={data.image} alt="Card image cap" id="product-detail" />
                            </div>

                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{data.name}</h1>
                                    <p className="h3 py-2">₹{data.price}.00</p>
                                    <p className="py-2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span className="list-inline-item text-dark">  Rating 4.8 | 36 Comments</span>
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>
                                                {data.ldesc}
                                            </strong></p>
                                        </li>
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>{data.sdesc}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Avaliable Fresh Fruits:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong className='fs-5'>👍</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Specification:</h6>
                                    <ul className="list-unstyled pb-3">
                                        <li>Lorem ipsum dolor sit</li>
                                    </ul>
                                    <form action method="GET">
                                        <input type="hidden" name="product-title" defaultValue="Activewear" />
                                        <div className="row">
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item">Size :
                                                        <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Big Size</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">Small Size</span></li>
                                                </ul>
                                            </div>
                                            {/* <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                    <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <button type="submit" onClick={() => handleAddToCart(data)} className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="submit" onClick={() => handleAddToCart(data)} className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Close Content */}
            {/* Start Article */}

        </div>
    )
}

export default Shop_singel