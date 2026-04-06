import React from 'react'

function Blog() {
    return (
        <div>
                {/* shop main */}
                <div className="container">
                    <div className="row aboutmain">
                        <div className="col-lg-12">
                            <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
                            <div className="text-overlay">
                                <h1 className="text-center aboutmain1">Blog</h1>
                                <ol className="breadcrumb justify-content-center d-flex">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="about.html">About</a></li>
                                    <li className="breadcrumb-item"><a href="shop.html">Shop</a></li>
                                    <li className="breadcrumb-item active ">Blog</li>
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
                            <h2>All blog Product</h2>
                            <p>Gallery</p>
                            <div className="line my-4" />
                            <p>This a blog page and daly new blog</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Blog