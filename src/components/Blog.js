import React from 'react'
import { useNavigate } from 'react-router-dom'

function Blog() {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      };
  return (
    <>
    
    <section class="htc__blog__area bg__white ptb--100">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section__title--2 text-center">
                            <h2 class="title__line">Our Blog</h2>
                            <p>
"Discover style, inspiration, and insights - explore our blog!"</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="ht__blog__wrap clearfix">
                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                            <div class="blog">
                                <div class="blog__thumb">
                                    <a href="##">
                                    <img src="https://wallpapercave.com/dwp2x/wp3537549.jpg" alt="blog images" />
                                    </a>
                                </div>
                                <div class="blog__details">
                                    <div class="bl__date">
                                        <span>March 20, 2023</span>
                                    </div>
                                    <h2><a href="##">The Art of Building a Successful eCommerce Business.</a></h2>
                                    <p>in today's fast-paced digital landscape, eCommerce has emerged as a game-changer, offering entrepreneurs opportunity </p>
                                    <div class="blog__btn">
                                        <a href="https://www.entrepreneur.com/growing-a-business/12-steps-to-building-a-successful-ecommerce-site-in-12/284175">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                            <div class="blog">
                                <div class="blog__thumb">
                                    <a href="##">
                                    <img src="https://www.newclothmarketonline.com/wp-content/uploads/2021/07/fashion-industry-finds-ways-to-bounce-back-400x287.jpg" alt="blog images" />
                                    </a>
                                </div>
                                <div class="blog__details">
                                    <div class="bl__date">
                                        <span>August 09, 2023</span>
                                    </div>
                                    <h2><a href="##">Crafting a Compelling Brand Identity</a></h2>
                                    <p>Your brand is what sets you apart in the online marketplace. Develop a brand identity that resonates with your target audience</p>
                                    <div class="blog__btn">
                                        <a href="https://blog.hubspot.com/agency/develop-brand-identity">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                            <div class="blog">
                                <div class="blog__thumb">
                                    <a href="##">
                                    <img src="https://cdn.dribbble.com/users/3792939/screenshots/10171457/media/f6cc11d57aa6c27db97e30cdb02b3905.png?resize=400x300&vertical=center" alt="blog images" />
                                    </a>
                                </div>
                                <div class="blog__details">
                                    <div class="bl__date">
                                        <span>August 10, 2023</span>
                                    </div>
                                    <h2><a href="##">Providing Outstanding Customer Support</a></h2>
                                    <p>customer service can be a key differentiator. Offer various channels for customer support, such as live chat, email, and phone</p>
                                    <div class="blog__btn">
                                        <a href="https://www.forbes.com/sites/forbesbusinesscouncil/2022/02/02/eight-tips-for-providing-excellent-customer-service/?sh=6d908a65259c">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Blog