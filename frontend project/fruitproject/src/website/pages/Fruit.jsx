import React from 'react'

function Fruit() {
    return (
        <div>
            {/* shop main */}
            <div className="container">
                <div className="row aboutmain">
                    <div className="col-lg-12">
                        <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                        <div className="text-overlay">
                            <h1 className="text-center aboutmain1">Comimg Soon</h1>
                            <ol className="breadcrumb justify-content-center d-flex">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="about.html">About</a></li>
                                <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
                                <li className="breadcrumb-item active ">Fruit</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row py-5 text-center">
                        <div className="col-lg-6 m-auto">
                            <p>Green Agriculture</p>
                            <h1>Our Best Product</h1>
                            <h2>All Product</h2>
                            <p>Gallery</p>
                            <div className="line my-4" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-danger pb-5'>Coming Soon</h1>
            </div>


        </div>
    )
}

export default Fruit