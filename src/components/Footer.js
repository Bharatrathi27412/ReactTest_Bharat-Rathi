import React from 'react';
import logo from '../logo.png'

function Footer ()  {
  return (
    <div>
        <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2><img src={logo} /></h2>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
        <ul class="m-0 p-0">
          <li style={{color:'white',paddingBottom:"8px"}}>Support</li>
          <li style={{color:'white',paddingBottom:"8px"}}>About Us</li>
          <li style={{color:'white',paddingBottom:"8px"}}>Privacy Policy</li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 links">
        <ul class="m-0 p-0">
          <li style={{color:'white',paddingBottom:"8px"}}>Terms & Conditions</li>
          <li style={{color:'white',paddingBottom:"8px"}}>Return & Refund Policy</li>
          <li style={{color:'white',paddingBottom:"8px"}}>Shipping & Delivery Policy</li>
        </ul>
    </div>

  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-100" style={{fontSize: "18px"}}>Sea Basket | All Rights Reserved | 2021 Copyright</small></p>
    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default Footer