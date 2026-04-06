import React, { useEffect, useState } from "react";

function Order_page() {
  // ================= Cart State =================
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return (
      savedCart?.map(item => ({
        ...item,
        quantity: Number(item.quantity) || 1, // Ensure number
        price: Number(item.price) || 0,
        disc_price: Number(item.disc_price) || 0,
      })) || [
        {
          id: 1,
          name: "Product 1",
          image: "/images/product1.jpg",
          sdesc: "Short description of product 1",
          price: 500,
          disc_price: 450,
          quantity: 1,
        },
      ]
    );
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ================= Coupon State =================
  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    FLAT100: 100,
  };

  // ================= Order State =================
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [totalPaid, setTotalPaid] = useState(0);

  // ================= Cart Functions =================
  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const changeQuantity = (id, delta) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, Number(item.quantity) + delta); // min 1
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // ================= Calculations =================
  const totalItems = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );

  const totalDiscountPrice = cart.reduce(
    (total, item) => total + Number(item.disc_price) * Number(item.quantity),
    0
  );

  const savings = totalPrice - totalDiscountPrice;
  const shippingCharges = totalDiscountPrice > 1000 ? 0 : 50;
  const finalTotal = totalDiscountPrice + shippingCharges - couponDiscount;

  // ================= Apply Coupon =================
  const applyCoupon = () => {
    setCouponError("");
    setCouponDiscount(0);

    if (!coupon) {
      setCouponError("Please enter coupon code");
      return;
    }

    if (!coupons[coupon]) {
      setCouponError("Invalid coupon code");
      return;
    }

    if (coupon === "SAVE10" || coupon === "SAVE20") {
      setCouponDiscount((totalDiscountPrice * coupons[coupon]) / 100);
    }

    if (coupon === "FLAT100") {
      setCouponDiscount(coupons[coupon]);
    }
  };

  // ================= Place Order =================
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const id = "ORD" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setTotalPaid(finalTotal);
    setOrderSuccess(true);

    setCart([]);
    setCoupon("");
    setCouponDiscount(0);
    localStorage.removeItem("cart");
  };

  // ================= UI =================
  return (
    <div className="container-fluid mt-3">
      <div className="container pb-5">
        <div className="row aboutmain">
          <div className="col-lg-12">
            <img src="./assest/img/cart-page-header-img.jpg" className="img-fluid" alt />
            <div className="text-overlay pt-5 mt-4">
              <h1 className="h1 pt-5">Your Order</h1>
            </div>
          </div>
        </div>
      </div>


      {/* ================= Order Success Page ================= */}
      {orderSuccess ? (
        <div className="container text-center mt-5">
          <h2 className="text-success">🎉 Order Successful!</h2>
          <p>Thank you for your order. Your items will be delivered soon.</p>
          <h4>Order ID: <strong>{orderId}</strong></h4>
          <h4>Total Paid: ₹{totalPaid}</h4>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setOrderSuccess(false)}
          >
            Continue Shopping
          </button>
        </div>
      ) : cart.length === 0 ? (
        // ================= Cart Empty =================
        <p className="text-center mt-5">Your cart is empty.</p>
      ) : (
        // ================= Cart + Summary =================
        <div className="container mt-4">
          <div className="row">
            {/* Left: Cart Items + Coupon */}
            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center border p-2 mb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 80, height: 80, objectFit: "cover" }}
                  />
                  <div className="flex-grow-1 ms-3">
                    <h5>{item.name}</h5>
                    <p>{item.sdesc}</p>
                  </div>
                  <div className="me-3">
                    <del className="text-danger">₹{item.price}</del>
                    <strong className="ms-2">₹{item.disc_price}</strong>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Coupon Section */}
              <div className="card p-3 mt-3">
                <h5>Apply Coupon</h5>
                <div className="d-flex">
                  <input
                    className="form-control me-2"
                    placeholder="Enter coupon"
                    value={coupon}
                    onChange={(e) =>
                      setCoupon(e.target.value.toUpperCase())
                    }
                  />
                  <button className="btn btn-success" onClick={applyCoupon}>
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-danger mt-2">{couponError}</p>
                )}
              </div>
            </div>

            {/* Right: Order Summary + Order Button */}
            <div className="col-lg-4 pb-5">
              <div className="border p-3">
                <h4>Order Summary</h4>
                <p>Total Items: {totalItems}</p>
                <p>MRP: ₹{totalPrice}</p>
                <p>Discounted Price: ₹{totalDiscountPrice}</p>
                <p>Shipping: ₹{shippingCharges}</p>
                <p>Coupon Discount: ₹ -{couponDiscount}</p>
                <p className="text-success">
                  Your Savings: ₹{savings + couponDiscount}
                </p>
                <hr />
                <h4>Total Payable: ₹{finalTotal}</h4>
                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={placeOrder}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order_page;