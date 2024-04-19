import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./includes/Header";
import  { BASE_URL } from './includes/Api'
import { Link } from "react-router-dom";
function Products() {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderProduct = () => {
    if (!Array.isArray(product)) {
      return [];
    }
    return product.map((pro) => (
      <div key={pro.id} className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
        <div className="category">
          <div className="ht__cat__thumb">
            <a href="product-details.html">
           <Link to={`/product/${pro.id}`}><img
                src={pro.image}
                alt="slider images"
                style={{ width: "100%", height: "200px",  objectFit:'contain'}}
              /></Link>
            </a>
          </div>
          <div className="fr__hover__info">
            <ul className="product__action">
              <li>
                <a href="wishlist.html">
                  <i className="fas fa-heart icons"></i>
                </a>
              </li>
              <li>
                <a href="cart.html">
                  <i className="fas fa-shopping-cart icons"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-shuffle icons"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="fr__product__inner">
            <h4>
              <a href="product-details.html">{pro.name}</a>
            </h4>
            <ul className="fr__pro__prize">
              <li className="old__prize" style={{textDecoration:"line-through"}}>${pro.old_price}</li>
              <li>${pro.price}</li>
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <Header/>
    <section className="htc__category__area ptb--100">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section__title--2 text-center">
              <h2 className="title__line">All Products</h2>
              <p>"Fresh styles delivered to your door—All Products!"</p>
            </div>
          </div>
        </div>
        <div className="htc__product__container" >
          <div className="row" >
            <div className="product__list clearfix mt--30" style={{ display: "flex", flexWrap: "wrap" }}>
              {renderProduct()}
              </div>
          </div>
        </div>
      </div>
      
    </section>
    </>
  );
}

export default Products;
