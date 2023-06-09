import React from "react";

export default function Project(){
    return <div>
        <div className="project_banner">
            <center><img src='img/prj_Intro.png' /></center>
        </div>

        <div className="content">
            <div className="content_2">
            <p>Bathroom</p>
            <p>Bed Room</p>
            <p>Kitchen</p>
            <p>Living Area</p>
            </div>
        </div>
{/*---------------------GALLERY--------------------------------------  */}
<div className="gallery">
    <div className="align">
        <div id='gall_1'>
        <img src='img/gall_1.png' />
       <div id='head'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/* ---------------------2------------------- */}
        <div id='gall_2'>
        <img src='img/gall_2.png' />

        <div id='head_2'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/*---------------------3---------------------------*/}
        <div id='gall_3'>
        <img src='img/gall_2.png' />

        <div id='head_3'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/*---------------------4-------------------------  */}
        <div id='gall_4'>
        <img src='img/gall_1.png' />
       <div id='head_4'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/*---------------------5--------------------------  */}
        <div id='gall_5'>
        <img src='img/gall_1.png' />
       <div id='head_5'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/* ---------------------------6----------------------- */}
        <div id='gall_6'>
        <img src='img/gall_2.png' />

        <div id='head_6'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/*---------------------------7----------------------------  */}
        <div id='gall_7'>
        <img src='img/gall_2.png' />

        <div id='head_7'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
{/*-----------------------------8-----------------------------  */}
        <div id='gall_8'>
        <img src='img/gall_2.png' />

        <div id='head_8'>
       <h1>Minimal Bedroom</h1>
        <h3>Decor / Artchitecture</h3>
        <img src='img/vec.png' />
       </div>
        </div>
    </div>
</div>
{/* -----------------PAGINATION-------------------------------- */}
<div className="pagination">
    <a href=''><img src='img/pagi_1.png' /></a>
    <a href=''><img src='img/pagi_2.png' /></a>
    <a href=''><img src='img/pagi_1.png' /></a>
    
    <img src='img/pagi_Vect.png' id='pagi_vect'/>

</div>
{/* ------------FOOTER------------------------------------------- */}
<div className='footer foo'>
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