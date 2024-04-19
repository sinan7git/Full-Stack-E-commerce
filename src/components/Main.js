import React, { useEffect, useState } from "react";
import Header from "./includes/Header";
import Area from "./Area";
import "./includes/Header.css";
import BestSeller from "./BestSeller";
import Testimonial from "./Testimonial";
import TopRated from "./TopRated";
import Brand from "./Brand";
import Blog from "./Blog";
import Footer from "./includes/Footer";
import Banner from "./Banner";
import axios from "axios";

function Main() {
  const [arrival, setArrival] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/products/new_arrival/")
      .then((response) => {
        setArrival(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderProduct = () => {
    if (!Array.isArray(arrival)) {
      return [];
    }
    return arrival.map((arr) => (
      <div key={arr.id} className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
        <div className="category">
          <div className="ht__cat__thumb">
              <img
                src={arr.image}
                alt="slider images"
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
          </div>
          <div className="fr__hover__info">
          </div>
          <div className="fr__product__inner">
            <h4>
              <a href="##">{arr.name}</a>
            </h4>
            <ul className="fr__pro__prize">
              <li
                className="old__prize"
                style={{ textDecoration: "line-through" }}
              >
                ${arr.old_price}
              </li>
              <li>${arr.price}</li>
            </ul>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Header />
      <Banner />
      <section class="htc__category__area ptb--100">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="section__title--2 text-center">
                <h2 class="title__line">New Arrivals</h2>
                <p>"Fresh styles delivered to your door—New Arrivals!"</p>
              </div>
            </div>
          </div>
          <div class="htc__product__container">
            <div class="row">
              <div class="product__list clearfix mt--30">{renderProduct()}</div>
            </div>
          </div>
        </div>
      </section>
      <Area />
      <BestSeller />
      <Testimonial />
      <TopRated />
      <Brand />
      <Blog />
      <Footer />
    </>
  );
}

export default Main;
