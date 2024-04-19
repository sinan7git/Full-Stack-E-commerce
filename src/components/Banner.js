import React from 'react'
import './Slider.css'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div>
      <section class="main-home">
        <div class="main-text" style={{marginLeft:'70px'}}>
            <h5>Winter Collection</h5>
            <h1>New Winter <br/> Collection 2023</h1>
            <p>There's Nothing like Trend</p>

            <Link to="/products/" class="main-btn">Shop Now <i class='bx bx-right-arrow-alt' ></i></Link>
        </div>
    </section>
    </div>
  )
}

export default Banner