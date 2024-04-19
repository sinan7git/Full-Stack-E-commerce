import React, { useEffect, useState } from "react";
import "./includes/Header.css";
import useAxios from "./useAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./includes/Header";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const axiosInstance = useAxios();
  const [cartTotal, setCartTotal] = useState(0);
  const [tax, setTax] = useState(9);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/products/cart/");
        setCart(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, []);

  const handleDeleteCartItem = (itemId) => {
    axiosInstance
      .post(`http://127.0.0.1:8000/api/v1/products/dele_cart/${itemId}`, {})
      .then((response) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        toast.success("Item removed from cart successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const calculateCartTotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      setCartTotal(total);
    };
    calculateCartTotal();
  }, [cart]);

  const totalOrder = cart.reduce((acc, item) => acc + item.price, 0) + tax;

  return (
    <>
      <Header />
      <div
        class="cart-main-area ptb--100 bg__white"
        style={{ marginBottom: "40px", marginTop: "-40px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <form action="#">
                <div class="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th class="product-thumbnail">products</th>
                        <th class="product-name">name of products</th>
                        <th class="product-price">Price</th>
                        <th class="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td class="product-thumbnail">
                            <a href="#">
                              <img src={item.image} style={{width:"50px"}} alt="product img" />
                            </a>
                          </td>
                          <td class="product-name">
                            <a href="#">{item.name}y</a>
                            <ul class="pro__prize">
                              <li class="old__prize"></li>
                              <li></li>
                            </ul>
                          </td>
                          <td class="product-price">
                            <span class="amount">{item.price}</span>
                          </td>
                          <td class="product-remove">
                            <Link onClick={() => handleDeleteCartItem(item.id)}>
                              <i class="fas fa-trash icons"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="buttons-cart--inner">
                      <div class="buttons-cart">
                        <a href="#">Continue Shopping</a>
                      </div>
                      <div class="buttons-cart checkout--btn">
                        <a href="#">update</a>
                        <a href="#">checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="ht__coupon__code">
                      <span>enter your discount code</span>
                      <div class="coupon__box">
                        <input type="text" placeholder="" />
                        <div class="ht__cp__btn">
                          <a href="#">enter</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                    <div class="htc__cart__total">
                      <h6>cart total</h6>
                      <div class="cart__desk__list">
                        <ul class="cart__desc">
                          <li>cart total</li>
                          <li>tax</li>
                          <li>shipping</li>
                        </ul>
                        <ul class="cart__price">
                          <li>${cartTotal.toFixed(2)}</li>
                          <li>${tax.toFixed(2)}</li>
                          <li>0</li>
                        </ul>
                      </div>
                      <div class="cart__total">
                        <span>order total</span>
                        <span>${totalOrder.toFixed(2)}</span>{" "}
                      </div>
                      <ul class="payment__btn">
                        <li class="active">
                          <a href="#">payment</a>
                        </li>
                        <li>
                          <a href="#">continue shopping</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Cart;
