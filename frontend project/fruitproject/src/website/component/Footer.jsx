import React from 'react'

function Footer() {
  return (
    <div>
      <style>
        {`
          .fruitique-footer {
              padding-left: 70px;
              padding-right: 70px;
              background: #0f3d2e;
              color: #e5f5ee;
          }

          .footer-logo {
              font-weight: 700;
              color: #7CFC98;
          }

          .footer-tagline {
              color: #b7e4c7;
          }

          .footer-links {
              list-style: none;
              padding: 0;
          }

          .footer-links li {
              margin-bottom: 10px;
              cursor: pointer;
              transition: 0.3s;
          }

          .footer-links li:hover {
              color: #7CFC98;
              padding-left: 6px;
          }

          .social-icons i {
              font-size: 20px;
              margin-right: 15px;
              cursor: pointer;
              transition: 0.3s;
          }

          .social-icons i:hover {
              color: #7CFC98;
              transform: scale(1.2);
          }

          .footer-line {
              border-color: rgba(255, 255, 255, 0.2);
          }

          .footer-brand {
             color: #7CFC98;
             font-weight: 600;
          }

          .fruitique-footer input {
              border-radius: 6px;
          }

          .fruitique-footer button:hover {
              background: #52b788;
          }
                `}
      </style>
      <footer className="fruitique-footer">
        <div className="container-fluid py-5">
          <div className="row">
            {/* Brand */}
            <div className="col-md-4 mb-4">
              <h2 className="footer-logo">Fruitique</h2>
              <p className="footer-tagline">Fresh • Healthy • Organic</p>
              <p className="mt-3">
                A-102, SP Ring Road <br />
                Ahmedabad, Gujarat – 380001
              </p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Email:</strong> support@fruitique.com</p>
              <div className="social-icons mt-3">
                <i className="bi bi-facebook" />
                <i className="bi bi-instagram" />
                <i className="bi bi-twitter-x" />
                <i className="bi bi-linkedin" />
              </div>
            </div>
            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* Account */}
            <div className="col-md-2 mb-4">
              <h5>My Account</h5>
              <ul className="footer-links">
                <li>Login</li>
                <li>Register</li>
                <li>Orders</li>
                <li>Wishlist</li>
              </ul>
            </div>
            {/* Products */}
            <div className="col-md-2 mb-4">
              <h5>Products</h5>
              <ul className="footer-links">
                <li>Fresh Fruits</li>
                <li>Dry Fruits</li>
                <li>Juices</li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="col-md-2 mb-4">
              <h5>Newsletter</h5>
              <p>Get fresh offers</p>
              <input type="email" className="form-control mb-2" placeholder="Your Email" />
              <button className="btn btn-success w-100">Subscribe</button>
            </div>
          </div>
          <hr className="footer-line" />
          <div className="text-center mt-3">
            <p className="mb-1">
              <i className="bi bi-c-circle me-1" />
              2025 Fruitique. All Rights Reserved.
            </p>
            <p>
              Designed with ❤️ by <span className="footer-brand">Fruitique Team</span>
            </p>
          </div>
        </div>
      </footer>



    </div>
  )
}

export default Footer