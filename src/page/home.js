import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(

        <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8">
              <h1>Bienvenido a <span>Budaty</span></h1>
              <br/>
              <h2>ELEGÍ, SOLICITÁ y PAGÁ tu pedido desde tu celular.</h2>
              <h2>¡Mejor servicio, Más tiempo para disfrutar!</h2>
    
              <div class="btns">
                <Link to='/menu' class="btn-menu animated fadeInUp scrollto">Nuestro Menú</Link>
                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Reserva</a>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
            </div>
    
          </div>
        </div>
      </section>

    )
}