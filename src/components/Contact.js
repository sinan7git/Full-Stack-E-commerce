import React from 'react';
import Header from './includes/Header';
import { Link } from 'react-router-dom';
import Footer from './includes/Footer';

function Contact() {
  const breadcrumbStyle = {
    background: 'rgba(0, 0, 0, 0) url("https://wallpapercave.com/dwp2x/wp4863918.jpg")',
  };

  return (
    <>
    <Header/>
    <div className="ht__bradcaump__area" style={breadcrumbStyle}>
      <div className="ht__bradcaump__wrap">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="bradcaump__inner">
                <nav className="bradcaump-inner">
                  <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="htc__contact__area ptb--100 bg__white">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                <div class="map-contacts--2">
                    <div id="googleMap" style={{backgroundImage:'url("https://wallpapercave.com/dwp2x/wp6944127.jpg")'}}>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <h2 class="title__line--6">CONTACT US</h2>
                <div class="address">
                    <div class="address__icon">
                        <i class="fas fa-location icons"></i>
                    </div>
                    <div class="address__details">
                        <h2 class="ct__title">our address</h2>
                        <p>666 5th Ave New York, NY, United </p>
                    </div>
                </div>
                <div class="address">
                    <div class="address__icon">
                        <i class="fas fa-envelope icons"></i>
                    </div>
                    <div class="address__details">
                        <h2 class="ct__title">openning hour</h2>
                        <p>666 5th Ave New York, NY, United </p>
                    </div>
                </div>

                <div class="address">
                    <div class="address__icon">
                        <i class="fas fa-phone icons"></i>
                    </div>
                    <div class="address__details">
                        <h2 class="ct__title">Phone Number</h2>
                        <p>123-6586-587456</p>
                    </div>
                </div>
            </div>      
        </div>
        <div class="row">
            <div class="contact-form-wrap mt--60">
                <div class="col-xs-12">
                    <div class="contact-title">
                        <h2 class="title__line--6">SEND A MAIL</h2>
                    </div>
                </div>
                <div class="col-xs-12">
                    <form id="contact-form" action="#" method="post">
                        <div class="single-contact-form">
                            <div class="contact-box name">
                                <input type="text" name="name" placeholder="Your Name*" />
                                <input type="email" name="email" placeholder="Mail*" />
                            </div>
                        </div>
                        <div class="single-contact-form">
                            <div class="contact-box subject">
                                <input type="text" name="subject" placeholder="Subject*" />
                            </div>
                        </div>
                        <div class="single-contact-form">
                            <div class="contact-box message">
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div class="contact-btn">
                            <button type="submit" class="fv-btn">Send MESSAGE</button>
                        </div>
                    </form>
                    <div class="form-output">
                        <p class="form-messege"></p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</section> 
<Footer/>
 </>
  );
}

export default Contact;
