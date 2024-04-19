import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./includes/Header";
import useAxios from './useAxios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/products/view/${id}`);
        setDetail(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookDetail();
  }, []);

  
  const handleAddToCart = async (id) => {
    try {
      await axiosInstance.post(`/api/v1/products/add_cart/${id}`);
      toast.success('Item added to cart!', {
        position: 'top-right',
        autoClose: 2000, 
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
    <Header/>
      <section class="htc__product__details bg__white ptb--100" style={{marginTop:'-50px'}}>
        <div class="htc__product__details__top">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                <div class="htc__product__details__tab__content">
                  <div class="product__big__images">
                    <div class="portfolio-full-image tab-content">
                      <div
                        role="tabpanel"
                        class="tab-pane fade in active"
                        id="img-tab-1"
                      >
                        <img src={detail.image} alt="full-image" />
                      </div>
                      <div role="tabpanel" class="tab-pane fade" id="img-tab-2">
                        <img src={detail.image} alt="full-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
                <div class="ht__product__dtl">
                  <h2>{detail.name}</h2>
                  <ul class="rating">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li className="old">
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li className="old">
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <ul class="pro__prize">
                    <li class="old__prize" style={{textDecoration:"line-through"}}>{detail.old_price}</li>
                    <li>${detail.price}</li>
                  </ul>
                  <p class="pro__info">
                    {detail.description}
                  </p>
                  <div class="ht__pro__desc">
                    <div class="sin__desc">
                      <p>
                        <span>Availability:</span> In Stock
                      </p>
                    </div>
                    <div class="sin__desc align--left">
                      <p>
                        <span>color:</span>
                      </p>
                      <ul class="pro__color">
                        <li class="red">
                          <a href="#">red</a>
                        </li>
                        <li class="green">
                          <a href="#">green</a>
                        </li>
                        <li class="balck">
                          <a href="#">balck</a>
                        </li>
                      </ul>
                      <div class="pro__more__btn">
                        <a href="#">more</a>
                      </div>
                    </div>
                    
                    <div class="sin__desc product__share__link">
                      <p>
                        <span>Share this:</span>
                      </p>
                      <ul class="pro__share">
                        <li>
                          <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="fa-brands fa-google"></i>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  <button onClick={() => handleAddToCart(detail.id)} style={{marginTop:"30px"}}  class="main-btn">Order Now <i class='bx bx-right-arrow-alt' ></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="htc__produc__decription bg__white">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <ul class="pro__details__tab" role="tablist">
                <li role="presentation" class="description active">
                  <a href="#description" role="tab" data-toggle="tab">
                    description
                  </a>
                </li>
                <li role="presentation" class="review">
                  <a href="#review" role="tab" data-toggle="tab">
                    review
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="ht__pro__details__content">
                <div
                  role="tabpanel"
                  id="description"
                  class="pro__single__content tab-pane fade in active"
                >
                  <div class="pro__tab__content__inner">
                    <p>
                      {detail.description}
                    </p>
                    <h4 class="ht__pro__title">Description</h4>
                    <p>
                    {detail.description}
                    </p>
                    <p>
                    {detail.description}
                    </p>
                    <h4 class="ht__pro__title">Standard Featured</h4>
                    <p>
                    {detail.description}
                    </p>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="review"
                  class="pro__single__content tab-pane fade"
                >
                  <div class="pro__tab__content__inner">
                    <p>
                      Formfitting clothing is all about a sweet spot. That
                      elusive place where an item is tight but not clingy, sexy
                      but not cloying, cool but not over the top. Alexandra
                      Alvarez’s label, Alix, hits that mark with its range of
                      comfortable, minimal, and neutral-hued bodysuits.
                    </p>
                    <h4 class="ht__pro__title">Description</h4>
                    <p>
                    {detail.review}
                    </p>
                    <p>
                    </p>
                    <h4 class="ht__pro__title">Standard Featured</h4>
                    <p>
                    {detail.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
      position="top-right"
      autoClose={2000} // Adjust the duration the toast is shown (in milliseconds)
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

export default ProductDetail;
