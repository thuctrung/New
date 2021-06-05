import React, { Component } from 'react';
import Trending from '../Content/Trending';
import Navbar from '../Header/Navbar';
class Ser extends Component {
    render() {
        return (
            <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Boutique | Ecommerce bootstrap template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow" />
        {/* Bootstrap CSS*/}
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css" />
        {/* Lightbox*/}
        <link rel="stylesheet" href="./vendor/lightbox2/css/lightbox.min.css" />
        {/* Range slider*/}
        <link rel="stylesheet" href="./vendor/nouislider/nouislider.min.css" />
        {/* Bootstrap select*/}
        <link rel="stylesheet" href="./vendor/bootstrap-select/css/bootstrap-select.min.css" />
        {/* Owl Carousel*/}
        <link rel="stylesheet" href="./vendor/owl.carousel2/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="./vendor/owl.carousel2/assets/owl.theme.default.css" />
        {/* Google fonts*/}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&display=swap" />
        {/* theme stylesheet*/}
        <link rel="stylesheet" href="./css/style.default.css" id="theme-stylesheet" />
        {/* Custom stylesheet - for your changes*/}
        <link rel="stylesheet" href="./css/custom.css" />
        {/* Favicon*/}
        <link rel="shortcut icon" href="./img/favicon.png" />
        {/* Tweaks for older IEs*/}{/*[if lt IE 9]>
        
        <![endif]*/}
        <div className="page-holder">
          {/* navbar*/}
         
          
          {/* HERO SECTION*/}
          <div className="container">
            {/* CATEGORIES SECTION*/}
            
            {/* TRENDING PRODUCTS*/}
            {/* <Trending></Trending> */}
            {/* SERVICES*/}
            <section className="py-5 bg-light">
              <div className="container">
                <div className="row text-center">
                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="d-inline-block">
                      <div className="media align-items-end">
                        <svg className="svg-icon svg-icon-big svg-icon-light">
                          <use xlinkHref="#delivery-time-1"> </use>
                        </svg>
                        <div className="media-body text-left ml-3">
                          <h6 className="text-uppercase mb-1">Free shipping</h6>
                          <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="d-inline-block">
                      <div className="media align-items-end">
                        <svg className="svg-icon svg-icon-big svg-icon-light">
                          <use xlinkHref="#helpline-24h-1"> </use>
                        </svg>
                        <div className="media-body text-left ml-3">
                          <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                          <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-inline-block">
                      <div className="media align-items-end">
                        <svg className="svg-icon svg-icon-big svg-icon-light">
                          <use xlinkHref="#label-tag-1"> </use>
                        </svg>
                        <div className="media-body text-left ml-3">
                          <h6 className="text-uppercase mb-1">Festival offer</h6>
                          <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          </div>

          {/* JavaScript files*/}
          {/* FontAwesome CSS - loading as last, so it doesn't block rendering*/}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        </div>
      </div>
        );
    }
}

export default Ser;