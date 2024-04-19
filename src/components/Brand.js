import React from 'react'
import img1 from './images/brand/1.png';import img2 from './images/brand/2.png';import img3 from './images/brand/3.png';import img4 from './images/brand/4.png';import img5 from './images/brand/5.png'
function Brand() {
  return (
    <div class="htc__brand__area bg__cat--4">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ht__brand__inner">
                            <ul class="brand__list owl-carousel clearfix">
                                <li><a href="#"><img src={img1} alt="brand images" /></a></li >
                                <li><a href="#"><img src={img2} alt="brand images" /></a></li >
                                <li><a href="#"><img src={img3} alt="brand images" /></a></li >
                                <li><a href="#"><img src={img4} alt="brand images" /></a></li >
                                <li><a href="#"><img src={img5} alt="brand images" /></a></li >
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Brand