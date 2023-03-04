import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import {  cameras, phones } from "../Data/Data";
import { categories } from "../Data/Data";
import { services } from "../Data/Data";
import { useTranslation } from "react-i18next";
import "../langConfig/i18n";


const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <Container class1="home-wrapper-1 bg-white py-5">
        <div className="row">
          <div className="col-12 col-xl-6 my-2">
            <div className="main-banner position-relative ms-lg-4">
              <img
                src="images/main-banner-1.webp"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>{t('homeBanner.1')}</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <button className="btn button">BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="row d-flex    justify-content-between align-items-center">
              <div className="col-12 col-md-6 my-1 small-banner position-relative">
                <img
                  src="images/catbanner-01.webp"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>{t('homeBanner.2')}</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 or
                    <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 my-1 small-banner position-relative">
                <img
                  src="images/catbanner-03.webp"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>{t('homeBanner.3')}</h4>
                  <h5>Buy IPAD Air</h5>
                  <p>
                    From $599.00 or
                    <br /> $49.91/mo. for 12 mo.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 my-1 small-banner position-relative">
                <img
                  src="images/catbanner-02.webp"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br /> styles and colors.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 my-1 small-banner position-relative">
                <img
                  src="images/catbanner-04.webp"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>{t('homeBanner.4')}</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High-fidelity playback
                    <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div>
          <div className="row services d-lg-flex align-items-lg-center justify-content-xl-between">
            {services?.map((i, j) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 col-xl-2 mb-3"
                  key={j}
                >
                  <div className="d-flex align-items-center">
                    <img
                      width={"40px"}
                      height={"40px"}
                      src={i.serviceImage}
                      alt="services"
                    />
                    <div className="ps-3">
                      <h6 className="small">{t(`serviceTitle.${j+1}`)}</h6>
                      <p className="mb-0 small">{t(`serviceTagline.${j+1}`)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div>
          <div className="row categories d-xl-flex justify-content-xl-between align-items-xl-center">
            {categories?.map((i, j) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 col-xl-2 mx-xl-1 mb-3" key={j}>
                  <div className="d-flex align-items-center">
                    <div>
                      <h6>{t(`category.${j+1}`)}</h6>
                      <p>{i.itemCount} {t(`categoryTitle.1`)}</p>
                    </div>
                    <img src={i.category_img} width="90px" alt="camera" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div>
          <div>
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <div className="row">
          {cameras.map((i, j) => (
            <ProductCard
              key={j}
              storeImg1p={i.storeImg1}
              storeImg2p={i.storeImg2}
              headp={i.head}
              titlep={i.title}
              pricep={i.price}
              storeItems={i}
            />
          ))}
          </div>
        </div>
      </Container>
      <Container class1=" py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mt-3">
            <div className="famous-card rounded position-relative">
              <div>
              <img src="images/famous-1.webp" className="img-fluid" alt="" /></div>
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo. *</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-md-6 mt-3">
            <div className="famous-card rounded position-relative">
              <img src="images/famous-2.webp" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-md-6 mt-3">
            <div className="famous-card rounded position-relative">
              <img src="images/famous-3.webp" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-md-6 mt-3">
            <div className="famous-card rounded position-relative">
              <img src="images/famous-4.webp" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo. *
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div>
          <div>
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12"></div>
          {phones.map((i, j) => {
            return (
              <ProductCard
                key={j}
                headp={i.head}
                storeImg1p={i.storeImg1}
                storeImg2p={i.storeImg2}
                titlep={i.title}
                pricep={i.price}
                storeItems={i}
              />
            );
          })}
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.webp" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.webp" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.webp" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.avif" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.webp" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.webp" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.avif" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.avif" alt="brand" />
                </div>
                <div>
                  <img src="images/brand-09.webp" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div>
          <div>
            <h3 className="section-heading">Our Latest News</h3>
          </div>
        </div>
        <div>
          <div className="row">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
