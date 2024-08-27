import React, { useState } from "react";
import About from "./About";
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  // <Routes>
  // <Route path='/' element={<About/>} />
  // </Routes>

  return (
    <div className="home_screen">
      <div className="main">
        <div className="home">
          <h1>Let Your Home be unique</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <a href="#">
            <button>
              Get Started <img src="img/arrow.svg" id="arr" />{" "}
            </button>
          </a>
        </div>
      </div>

      <div className="work">
        <div id="proj">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <br />

          <div id="w">
            <a>Read More </a> <img src="img/arrow.svg" id="arr" />
          </div>
        </div>

        <div id="proj">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <br />

          <div id="w">
            <a>Read More </a> <img src="img/arrow.svg" id="arr" />
          </div>
        </div>

        <div id="proj">
          <h1>Project Plan</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <br />

          <div id="w">
            <a>Read More </a> <img src="img/arrow.svg" id="arr" />
          </div>
        </div>
      </div>
      {/*------------------------------------- */}
      <div className="about">
        <div className="abt_content">
          <h1>We Create The Art Of Stylish Living Stylishly</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>

          <div className="call">
            <img src="img/Ellipse.png" id="ell" />
            <img src="img/Call.svg" id="pho" />

            <h4>123456789</h4>
            <h6>Call Us Anytime</h6>
          </div>

          <button>
            Get Free Estimate <img src="img/arrow.svg" id="arr" />{" "}
          </button>
        </div>

        <div>
          <img src="img/abt.jpg" id="img" />
        </div>
      </div>

      <div className="testi">
        <center>
          <h1>What The People Think About Us</h1>
        </center>

        <div className="details">
          <div id="pers1">
            <div id="u1">
              <img src="img/user1.jpg" id="usr" />
              <h5>
                Nattasha Mith
                <br />
                <span>Sydney, USA</span>
              </h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been.
            </p>
          </div>

          <div id="pers1">
            <div id="u1">
              <img src="img/user2.jpg" id="usr" />
              <h5>
                Raymond Galario
                <br />
                <span>Sydney, Australia</span>
              </h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled it to make a type book.
            </p>
          </div>

          <div id="pers1">
            <div id="u1">
              <img src="img/user3.jpg" id="usr" />
              <h5>
                Benny Roll
                <br />
                <span>Sydney, New York</span>
              </h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Ipsum has been scrambled.
            </p>
          </div>
        </div>
      </div>

      {/* -------Client--logo-------------------- */}
      <div className="client">
        <img src="./img/01.svg" />
        <img src="./img/02.svg" />
        <img src="./img/03.svg" />
        <img src="./img/04.svg" />
        <img src="./img/05.svg" />
      </div>

      {/* ---------------------projects------------------------------ */}
      <div className="project">
        <h1>Follow Our Projects</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>

      <div className="second_img">
        <div>
          <img src="./img/prj_1.png" />
          <h1 id="hh1">Modern Kitchen</h1>
          <h5 id="hh5">Decor / Artchitecture</h5>
          <a href="#">
            <img src="./img/vec.png" id="vector" />
          </a>
        </div>

        <div>
          <img src="./img/prj_2.png" />
          <h1 id="hh1">Modern Kitchen</h1>
          <h5 id="hh5">Decor / Artchitecture</h5>
          <a href="#">
            <img src="./img/vec.png" id="vector" />
          </a>
        </div>
      </div>
      <div className="second_img" id="two">
        <div>
          <img src="./img/prj_3.png" />
          <h1 id="hh1">Modern Kitchen</h1>
          <h5 id="hh5">Decor / Artchitecture</h5>
          <a href="#">
            <img src="./img/vec.png" id="vector" />
          </a>
        </div>

        <div>
          <img src="./img/prj_4.png" />
          <h1 id="hh1">Modern Kitchen</h1>
          <h5 id="hh5">Decor / Artchitecture</h5>
          <a href="#">
            <img src="./img/vec.png" id="vector" />
          </a>
        </div>
      </div>

      {/* ---------------counter------------------------------ */}
      <div className="counter">
        <div className="count">
          <div className="one">
            <h1>12</h1>
            <h4>Years Of Experience</h4>
          </div>
          <div id="line"></div>

          <div className="two">
            <h1>12</h1>
            <h4>Success Project</h4>
          </div>
          <div id="line"></div>

          <div className="two">
            <h1>12</h1>
            <h4>Active Project</h4>
          </div>
          <div id="line"></div>

          <div className="two">
            <h1>12</h1>
            <h4>Happy CUstomers</h4>
          </div>
        </div>
      </div>

      {/* -------------ARTICLE----------------------------- */}
      <div className="article">
        <h1>Artlies & News</h1>
        <h6>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </h6>
      </div>
      {/* --------------blog----------------- */}
      <center>
        <div className="blog">
          <div className="blog_1">
            <img src="./img/blog_1.png" />
            <h2>Let’s Get Solution For Building Construction Work</h2>
            <h6>26 December,2022</h6>
            <a href="#">
              <img src="./img/vec.png" id="v" />
            </a>
          </div>

          <div className="blog">
            <div className="blog_1 blg_2">
              <img src="./img/blog_2.png" />
              <h2>
                Low Cost Latest Invented Interior Designing <br />
                Ideas.
              </h2>
              <h6>26 December,2022</h6>
              <a href="#">
                <img src="./img/2_vect.png" id="vect" />
              </a>
            </div>
          </div>
          <div className="blog">
            <div className="blog_1">
              <img src="./img/blog_3.png" />
              <h2>Best For Any Office & Business Interior Solution</h2>
              <h6>26 December,2022</h6>
              <a href="#">
                <img src="./img/vec.png" id="v" />
              </a>
            </div>
          </div>
        </div>
      </center>

      {/* ---------------------contact------------------- */}
      <div className="contact">
        <h1>Wanna join the interno?</h1>
        <h5>It is a long established fact will be distracted.</h5>
        <center>
          <a href="">
            <button>
              Contact With Us <img src="img/arrow.svg" id="arw" />{" "}
            </button>
          </a>
        </center>
      </div>

      {/* ------------------footer----------------------- */}
      <div className="footer">
        <div className="foot">
          <div id="interno">
            <img src="./img/Logo.png" />
            <h5>
              It is a long established fact that a reader will be distracted
              lookings.
            </h5>
            <div id="icon">
              <a href="#">
                <img src="./img/fb.png" id="fb" />
              </a>
              <a href="#">
                <img src="./img/twitter.png" id="twt" />
              </a>
              <a href="#">
                <img src="./img/linked.png" id="ln" />
              </a>
              <a href="#">
                <img src="./img/insta.png" id="ins" />
              </a>
            </div>
          </div>

          <div className="pages">
            <h2>Pages</h2>
            {/* <h5>
      <Link to='/about' id="Link">About Us</Link></h5>   */}

            <h5>
              <a href="/about">About</a>
            </h5>

            <h5>Our Projects</h5>
            <h5>Our Team</h5>
            <h5>Contact US</h5>
            <h5>Services</h5>
          </div>

          <div className="service">
            <h2>Services</h2>
            <h5>Kitchen</h5>
            <h5>Living Area</h5>
            <h5>Bathroom</h5>
            <h5>Dinning Hall</h5>
            <h5>Bedroom</h5>
          </div>

          <div className="foot_cont">
            <h2>Contact</h2>
            <h5>55 East Birchwood Ave. Brooklyn, New York 11201</h5>
            <h5>contact@interno.com</h5>
            <h5>(123) 456 - 7890</h5>
          </div>
        </div>

        <h1 id="copy">
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </h1>
      </div>
    </div>
  );
}
