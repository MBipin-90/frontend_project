import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <div id="template-fruit-template-carousel" className="carousel slide template4 pb-5" data-bs-ride="carousel">
                <ol className="carousel-indicators ">
                    <li data-bs-target="#template-fruit-template-carousel" data-bs-slide-to={0} className="active " />
                    <li data-bs-target="#template-fruit-template-carousel" data-bs-slide-to={1} className />
                    <li data-bs-target="#template-fruit-template-carousel" data-bs-slide-to={2} className />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5 main1">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last template1">
                                    <img className="img-fluid" src="./assest/img/fruit-market.png" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <p className="main2">Best Furit</p>
                                        <h1>Fresh Product</h1>
                                        <div className="line my-4" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat inventore,
                                            sint<br />
                                            voluptatem
                                            vero repellendus necessitatibus aut id.</p>
                                        <button className="mbtn1 mt-4 card1">Read More</button>
                                        <span className="main3"> <button className="mbtn2 card1">Shop now</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5 main1">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last template2">
                                    <img className="img-fluid" src="./assest/img/fruite-juice1.png" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <p className="main2">Best Furit</p>
                                        <h1>Fresh Product</h1>
                                        <div className="line my-4" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat inventore,
                                            sint<br />
                                            voluptatem
                                            vero repellendus necessitatibus aut id.</p>
                                        <button className="mbtn1 mt-4 card1">Read More</button>
                                        <span className="main3"> <button className="mbtn2 card1">Shop now</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5 main1">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last template3">
                                    <img className="img-fluid" src="./assest/img/fruite-juice1.png" alt />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <p className="main2">Best Furit</p>
                                        <h1>Fresh Product</h1>
                                        <div className="line my-4" />
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat inventore,
                                            sint<br />
                                            voluptatem
                                            vero repellendus necessitatibus aut id.</p>
                                        <button className="mbtn1 mt-4 card1">Read More</button>
                                        <span className="main3"> <button className="mbtn2 card1">Shop now</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-4" href="#template-fruit-template-carousel" role="button" data-bs-slide="prev">
                   
                    <i className="bi bi-chevron-double-left" />
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-fruit-template-carousel" role="button" data-bs-slide="next">
                    <i className="bi bi-chevron-double-right" />
                </a>
            </div>


            {/* About */}
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-1 col-lg-12 pb-5">
                        <div className="row about1">
                            <div className="col-lg-6">
                                <img src="./assest/img/fruite-about.png" className alt />
                            </div>
                            <div className="col-lg-6 p-5">
                                <p>Good Product</p>
                                <h1>About product</h1>
                                <div className="line my-4" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nihil blanditiis, iusto ad in
                                    rem
                                    eligendi.</p>
                                <button className="mbtn1 mt-4 card1">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* welcome */}
            <section className="welcome text-center pb-5 mt-4">
                <div className="container py-5">
                    <div className="row py-5 text-white">
                        <div className="col-lg-6 m-auto">
                            <p>Green Agriculture</p>
                            <h1>welcome To BE Fruit Shop</h1>
                            <div className="line2 my-4" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, consectetur asperiores tempore
                                praesentium nobis deleniti debitis doloribus, molestiae, aperiam recusandae minima enim.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card py-3">
                                <span><i className="bi bi-shop-window" /></span>
                                <h2>Always Fresh</h2>
                                <p>Good and Fresh product</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card py-3">
                                <span><i className="bi bi-flower2" /></span>
                                <h2>Always Fresh</h2>
                                <p>Good and Fresh product</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card py-3">
                                <span><i className="bi bi-gift" /></span>
                                <h2>Always Fresh</h2>
                                <p>Good and Fresh product</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* product */}
            <section className="product bg-light">
                <div className="container-fluid pl-5 pr-5">
                    <div className="row py-5 text-center">
                        <div className="col-lg-6 m-auto">
                            <p>Green Agriculture</p>
                            <h1>Our Best Product</h1>
                            <div className="line my-4" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, consectetur asperiores tempore
                                praesentium nobis deleniti debitis doloribus, molestiae, aperiam recusandae minima enim.</p>
                        </div>
                    </div>
                    <div className="row g-5 pb-5 shop8 seller1">
                        <div className="col-lg-3">
                            <div className="card p-2">
                                <div className="card-body product1">
                                    <div className="star">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                    </div>
                                    <img src="./assest/img/vegetable-item-3.png" className="img-fluid pb-3" alt />
                                    <h4 className="head1">Banana</h4>
                                    <p className="per1">2 x 459 / 190z</p>
                                    <h4 className="head1"><span className="text-danger"><del>₹99</del></span>  ₹49</h4>
                                    {/* <button className="btna my-4">ADD TO CART</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-2">
                                <div className="card-body product1">
                                    <div className="star">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                    </div>
                                    <img src="./assest/img/fresh-green-coconut-img.png" className="img-fluid pb-3" alt />
                                    <h4 className="head1">Coconut</h4>
                                    <p className="per1">2 x 459 / 190z</p>
                                    <h4 className="head1"><span className="text-danger"><del>₹199</del></span>  ₹99</h4>
                                    {/* <button className="btna my-4">ADD TO CART</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-2">
                                <div className="card-body">
                                    <div className="star">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                    </div>
                                    <img src="./assest/img/apple-img.png" className="img-fluid pb-3" alt />
                                    <h4 className="head1">Appple</h4>
                                    <p className="per1">2 x 459 / 190z</p>
                                    <h4 className="head1"><span className="text-danger"><del>₹299</del></span>  ₹199</h4>
                                    {/* <button className="btna my-4">ADD TO CART</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-2">
                                <div className="card-body">
                                    <div className="star">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                    </div>
                                    <img src="./assest/img/mango-img1.png" className="img-fluid pb-3" alt />
                                    <h4 className="head1">Mango</h4>
                                    <p className="per1">2 x 459 / 190z</p>
                                    <h4 className="head1"><span className="text-danger"><del>₹199</del></span>  ₹79</h4>
                                    {/* <button className="btna my-4">ADD TO CART</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center pb-5 pt-5">
                        <div className="col-lg-6 m-auto">
                            <button className="mbtn1 card1" onClick={() => navigate('/shop')}>Read More</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* discount */}
            <section className="discount py-5">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <h1><span className="head1"><i className="bi bi-cash-coin" /> Discount Coupon For -10% : </span>
                                SAVE10</h1>
                        </div>
                        <div className="col-lg-2 m-auto">
                            <button className="dbtn">Enjoy Offer</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* store */}
            <section className="store py-5 bg-light text-center">
                <div className="container-fluid pl-5 pr-5 py-5">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <p>Green Agriculture</p>
                            <h1>Our Best Product</h1>
                            <div className="line my-4" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, consectetur asperiores tempore
                                praesentium nobis deleniti debitis doloribus, molestiae, aperiam recusandae minima enim.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3">
                                <div className="card-body">
                                    <span><i className="bi bi-truck" /></span>
                                    <h5 className="head1 py-3">Free Shipping</h5>
                                    <p className="per1">Free on order over $399</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3">
                                <div className="card-body">
                                    <span><i className="bi bi-patch-check" /></span>
                                    <h5 className="head1 py-3">Fruit Certified</h5>
                                    <p className="per1">Fruit Certified Product</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3">
                                <div className="card-body">
                                    <span><i className="bi bi-wallet2" /></span>
                                    <h5 className="head1 py-3">Secure Payment</h5>
                                    <p className="per1">100% Security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3">
                                <div className="card-body">
                                    <span><i className="bi bi-telephone" /></span>
                                    <h5 className="head1 py-3">24/7 Support</h5>
                                    <p className="per1">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* seller */}
            <section className="seller bg-light ">
                <div className="container-fluid pl-5 pr-5 py-5">
                    <div className="row pb-4">
                        <div className="col-lg-6">
                            <h1 className="py-5">Fresh &amp; Daily Routien Fruit</h1>
                        </div>
                    </div>
                    <div className="row g-5 py-3 seller1">
                        <div className="col-lg-5 offset-1">
                            <div className="card seller3 seller4">
                                <div className="row ">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/apple-img.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card seller4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/mango-img1.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 py-3 seller1">
                        <div className="col-lg-5 offset-1">
                            <div className="card seller4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/orange-img.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card seller4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/watermelon-img.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 py-3 seller1 pb-5">
                        <div className="col-lg-5 offset-1">
                            <div className="card seller4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/fresh-green-coconut-img.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card seller4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="./assest/img/pineapple-img.png" className="img-fluid" alt />
                                    </div>
                                    <div className="col-lg-6 seller2">
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-fill" /></span>
                                        <span><i className="bi bi-star-half" /></span>
                                        <span><i className="bi bi-star" /></span>
                                        <h5 className="head1">Fresh Lemon</h5>
                                        <p className="per1">2 x 459g / 169z</p>
                                        <h5 className="head1">$12.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* store 2 */}
            <section className="store2 py-5 bg-light text-center mb-5">
                <div className="container-fluid pl-5 pr-5 py-5">
                    <div className="row store3 ">
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3 store4">
                                <div className="card-body">
                                    <span><i className="bi bi-people" /></span>
                                    <h5 className="head1 py-3">SATISFID <br /> CUSTOMER</h5>
                                    <p className="bold">399</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3 store4">
                                <div className="card-body">
                                    <span><i className="bi bi-people" /></span>
                                    <h5 className="head1 py-3">QUALITY <br /> CERTIFICATIAN</h5>
                                    <p className="bold">99%</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3 store4">
                                <div className="card-body">
                                    <span><i className="bi bi-people" /></span>
                                    <h5 className="head1 py-3">QUALITY <br /> SERVICE</h5>
                                    <p className="bold">99</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-2">
                            <div className="card py-3 store4">
                                <div className="card-body">
                                    <span><i className="bi bi-people" /></span>
                                    <h5 className="head1 py-3">AVAILABLE <br /> PRODUCTS</h5>
                                    <p className="bold">799</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home