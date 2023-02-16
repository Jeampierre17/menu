
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
//import { render } from "react-dom";
import React from 'react';
import useInitialState from "../hooks/useInitialState";
import { useContext, useState } from 'react';
import '../assets/vendor/animate.css/animate.css';
import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.css';
import '../assets/vendor/glightbox/css/glightbox.css';
//import '../assets/vendor/swiper/swiper-bundle.css';
import '../assets/css//style.css';
import AppContext from "../context/AppContext";
import Home from "../page/home";
import Menu from "../page/menu";
import Especial from "../page/especial";
import Contact from "../page/contact";
import Evento from "../page/evento";
// import '../assets/vendor/aos/aos.css';



function App() {

  const initialState = useInitialState();
  const { cart } = useContext(AppContext);
  const [active, setActive] = useState('inicio');

  const handleClick = (item) => {
    setActive(item);
  };

  return (

    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <div >

          <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex justify-content-center justify-content-md-between">

              <div class="contact-info d-flex align-items-center">
                <i class="bi bi-phone d-flex align-items-center"><span>MESA N° 8</span></i>
                <i class="bi bi-clock d-flex align-items-center ms-4"><span>SERVICIO MOZO </span></i>
              </div>

              <div class="languages d-none d-md-flex align-items-center">
                <ul>
                  <li>En</li>
                  <li><a href="">De</a></li>
                </ul>
              </div>
            </div>
          </div>


          <header id="header" class="fixed-top d-flex align-items-cente">
            <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

              <h1 class="logoo me-auto me-lg-0"><Link class="nav-link scrollto active" to='/'>Budaty</Link></h1>

              <a href="index.html" class="logoo me-auto me-lg-0"><img  src="assets/img/logo.png" alt="" class="img-fluid" /></a>

              <nav class="navbar order-last order-lg-0">
                <ul  id="navbar" className={active === 'active' ? 'active' : ''}  >
                  <li><Link className={active === 'inicio' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    onClick={() => handleClick('inicio')} to='/'>Inicio</Link></li>

                  <li><Link className={active === 'menu' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    to="/menu"
                    onClick={() => handleClick('menu')}>Menu</Link></li>
                  <li><Link className={active === 'especial' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    to="/especial"
                    onClick={() => handleClick('especial')}>Especial</Link></li>
                  <li><Link className={active === 'evento' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    to="/evento"
                    onClick={() => handleClick('evento')}>Evento</Link></li>



                  {/* <Route exact path='/product' element={<Product />} />
                        <Route exact path='/detail/:id' element={<DetailPage />} /> */}


                  {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
                  <li><Link className={active === 'contacto' ? 'nav-link scrollto active' : 'nav-link scrollto'}
                    to="/contacto"
                    onClick={() => handleClick('contacto')}>Contacto</Link></li>
                   <a id="close" onClick={() => handleClick('')}><span class="material-icons-outlined">
                    close
                    </span></a>
                </ul>
                <i onClick={() => handleClick('active')} class="bi bi-list mobile-nav-toggle" ></i>
              </nav>
              <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

            </div>


            {/* <ul id="navbar" className={active === 'active' ? 'active' : ''}  onClick={() => handleClick('active')} >
                <li><a class="active" href="index.html">Inicio</a></li>
                <li><a href="shop.html">Productos</a></li>
                <li><a href="about.html">Nosotros</a></li>
                <li><a href="contact.html">Contacto</a></li>
                <li id="lg-bag"><a href="" id="shop"><span class="material-icons-outlined">shopping_bag</span></a></li>
                <a href="#" id="close"><span class="material-icons-outlined">
                    close
                    </span></a>

            </ul> */}
          </header>




          {/* <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="../assets/img/about.jpg" alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section> */}




          {/*     <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" data-aos="zoom-in" data-aos-delay="100">
              <span>01</span>
              <h4>Lorem Ipsum</h4>
              <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
              <h4>Repellat Nihil</h4>
              <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="300">
              <span>03</span>
              <h4> Ad ad velit qui</h4>
              <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            </div>
          </div>

        </div>

      </div>
    </section> */}


          {/* <section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" class="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Book a Table</button></div>
        </form>

      </div>
    </section> */}

          {/* <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Testimonials</h2>
          <p>What they're saying about us</p>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section> */}
          {/* <section id="gallery" class="gallery">

      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-7.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href="assets/img/gallery/gallery-8.jpg" class="gallery-lightbox" data-gall="gallery-item">
                <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section> */}
          {/* <section id="chefs" class="chefs">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Chefs</h2>
          <p>Our Proffesional Chefs</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/chefs/chefs-2.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/chefs/chefs-3.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
          <Routes>

            <Route index path="/" element={<Home class="active" />} />
            <Route exact path='/menu' element={<Menu class="active" />} />
            <Route exact path='/especial' element={<Especial />} />
            <Route exact path='/contacto' element={<Contact />} />
            <Route exact path='/evento' element={<Evento />} />

          </Routes>

          <footer id="footer">
            <div class="footer-top">
              <div class="container">
                <div class="row">

                  <div class="col-lg-3 col-md-6">
                    <div class="footer-info">
                      <h3>Budaty</h3>
                      <p>
                        A108 Adam Street <br />
                        NY 535022, USA<br /><br />
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com<br />
                      </p>
                      <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                      <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                  </div>

                  <div class="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="" method="post">
                      <input type="email" name="email" /><input type="submit" value="Subscribe" />
                    </form>

                  </div>

                </div>
              </div>
            </div>

            <div class="container">
              <div class="copyright">
                &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>

          {/* <div id="preloader"></div> */}
          <a class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


          {/* <script async  src="assets/vendor/aos/aos.js"></script> 
  <script async  src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script async  src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script async  src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script async  src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script async  src="assets/vendor/php-email-form/validate.js"></script>


  <script async src="assets/js/main.js"></script> */}


        </div>
      </BrowserRouter > </AppContext.Provider >)
}

export default App;
