import React from "react";

export default function About(){
    return <div>
        <div className="about_ban">
        </div>

        <div className="quote">
            <img src='img/left_pat.png' />
           <div id='q'>
          <center> <img src='img/q.png' /></center>
            <h1>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h1>
            <h3>-BUNNY WILLIAMS</h3>
           </div>
            <img src='img/rht_pat.png' />

        </div>
        {/* ----------------- */}
        <div className="we_do">
            <div>
            <h1>What We Do</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.</p>
            <button >Our Concept</button>
            </div>
        
        <img src='img/do.png' />
        </div>

        <div className="we_do we_do_2">
            <img src='img/do_2.png' />
            <div>
            <h1>The End Result</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
                when lookings at its layouts the points of using 
                that it has a more-or-less normal.</p>
            <button >Our Portfolio</button>
            </div>
        </div>
{/* --------------------------Employee---------- */}
<div className='employee'>
    <h1>What the People Thinks About Us</h1>

    <div className="emp">
        <img src='img/emp1.png' />
        <img src='img/emp2.png' />
        <img src='img/emp3.png' />

    </div>

</div>
{/* ------------------Form------------------------ */}
<div className="forms">
    <div className="form_head">
        <h1>Creative project? Let's have a productive talk.</h1>
    </div>
    <div className="form">
        <div className="input">
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
{/* ------------------footer----------------------- */}
<div className='footer'>
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