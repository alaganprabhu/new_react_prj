import React from "react";

export default function Contact(){
    return <div>
        <div className="contact_bann"></div>

        <div className="contact_banner">
            <h1>We love meeting new people and helping them.</h1>
        </div>
        <div className="contact_form">
            <div className="mail">
                <img src="img/mail.png" id='mail'/> <h3>info@yourdomain.com</h3>
                <img src="img/phone.png" id='mail'/><h3>+1 (378) 400-1234</h3>
                <img src="img/web.png" id='mail'/><h3>www.yourdomain.com</h3>
        <div id='icon'>
        <a href='#'><img src='./img/fb.png' id='fb' /></a>
        <a href='#'><img src='./img/twitter.png' id='twt' /></a>
        <a href='#'><img src='./img/linked.png' id='ln' /></a>
        <a href='#'><img src='./img/insta.png' id='ins' /></a>
      </div>
            
     </div>
    
{/* ------------------Form------------------------ */}
<div className="forms ct_frm">

    <div className="form">
        <div className="input">
            <input type='text' placeholder="Name"/>
            <input type='text' placeholder="Email"/>
        </div>
        <div className="input inp_2">
            <input type='text' placeholder="Name"/>
            <input type='text' placeholder="Email"/>
        </div>

        <div className="subject">
        <input type='text' placeholder="Hello Iam intrested in.."/>
        </div>
        <div id='f_b'>
        <button>Send Now</button>
        </div>
        
    </div>
</div>
</div>
{/* ----------------------MAp--------------------- */}

<div className="map">
    <img src='img/Map.png' />
</div>

{/* ------------FOOTER------------------------------------------- */}
<div className='footer foo foot_foo'>
  <div className='foot'>

    <div id='interno'>
      <img src='./img/Logo.png'/>
      <h5>It is a long established fact that a reader will be distracted lookings.</h5>
      <div id='icon'>
        <a href='#'><img src='./img/fb.png' id='fb' /></a>
        <a href='#'><img src='./img/twitter.png' id='twt' /></a>
        <a href='#'><img src='./img/linked.png' id='ln' /></a>
        <a href='#'><img src='./img/insta.png' id='ins' /></a>
      </div>
    </div>

    <div className='pages'>
      <h2>Pages</h2>
      <h5>About Us</h5>
      <h5>Our Projects</h5>
      <h5>Our Team</h5>
      <h5>Contact US</h5>
      <h5>Services</h5>
    </div>

    <div className='service'>
      <h2>Services</h2>
      <h5>Kitchen</h5>
      <h5>Living Area</h5>
      <h5>Bathroom</h5>
      <h5>Dinning Hall</h5>
      <h5>Bedroom</h5>
    </div>

    <div className='foot_cont'>
      <h2>Contact</h2>
      <h5>55 East Birchwood Ave. Brooklyn, New York 11201</h5>
      <h5>contact@interno.com</h5>
      <h5>(123) 456 - 7890</h5>
    </div>
    
  </div>

  <h1 id='copy'>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h1>


 </div>
 </div>
}