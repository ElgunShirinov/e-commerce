import React from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import { TbGitCompare } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiAnimalHide } from "react-icons/gi";
import { HiOutlineTruck } from "react-icons/hi";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const SingleProductCard = () => {

  return (
    <>
      <Meta title={"Single Card"} />
      <BreadCrumb title="Single Card" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img
                  src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/_jcr_content/root/responsivegrid/container_1117245429_231474177/container_59280010/content_panel_list/content_panel_202202_375794398/image.casiocoreimg.jpeg/1676559758884/gwfa1000apf-800x800.jpeg"
                  alt="product"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU2WCJzOniGRhgLhTKM2vkS8qzvrajylGx90fYlSmaYSej_kllR3NNLrblmYAtbneits&usqp=CAU"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU2WCJzOniGRhgLhTKM2vkS8qzvrajylGx90fYlSmaYSej_kllR3NNLrblmYAtbneits&usqp=CAU"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={true}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(3 reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type : </h3>
                  <p className="product-data">Headsets</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand : </h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex flex-wrap gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categories : </h3>
                  <p className="product-data">
                    airpods, camera's, Computers & Laptop, headphones, mini
                    speaker, our store, Portable Speakers, smart phones, Smart
                    Television, Smartwatches
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags : </h3>
                  <p className="product-data">
                    headphones laptop mobile oppo speaker
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">SKU : </h3>
                  <p className="product-data">SKU027</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability : </h3>
                  <p className="product-data">541 in Stock</p>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Color : </h3>
                  <Color />
                </div>
                <div className="d-flex flex-row gap-15 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Quantity : </h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <Link to="/shopcart" className="button border-0">
                      Add to Cart
                    </Link>
                    <Link to="/checkout" className="button signup">
                      Buy It Now
                    </Link>
                  </div>
                </div>
                <div className="d-flex border-bottom py-3 align-items-center gap-15">
                  <div>
                    <a href="#a">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="#a">
                      <IoMdHeartEmpty className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <HiOutlineTruck /> Shipping & Returns
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Free shipping and returns available on all orders! We
                        ship all US domestic orders within{" "}
                        <b>5-10 business days!</b>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <GiAnimalHide /> Materials
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Running Shoes cushions your stride with soft foam to
                        keep you running in comfort. Lightweight knit material
                        wraps your foot in breathable support, while a
                        minimalist design fits in just about anywhere your day
                        takes you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Dimensions
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <IoMdHeartEmpty /> Care Instructions
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Use a soft damp cloth and a drop of mild soap to remove
                        any haze. Air dry.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum
                saepe vitae expedita omnis voluptatem, reprehenderit debitis
                cumque ullam sed blanditiis assumenda, repellendus facilis
                consequuntur itaque vel alias. Voluptatibus, quaerat?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd780"
                    />
                    <p className="mb-0">Based on2 Reviews</p>
                  </div>
                </div>
                <div>
                  <a
                    className="text-dark text-decoration-underline"
                    href="#review"
                  >
                    Write a Review
                  </a>
                </div>
              </div>
              <div id="review" className="review-form py-4">
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews border-bottom border-top mt-4">
                <div className="review">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={true}
                    activeColor="#ffd780"
                  />
                  <h6>John Snow</h6>
                  <h6>
                    <b>From Nokia</b> on <b>Jan 19 , 2023</b>
                  </h6>
                  <p>I loved it</p>
                </div>
              </div>
              <div className="reviews border-bottom">
                <div className="review">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor="#ffd780"
                  />
                  <h6>James Blake</h6>
                  <h6>
                    <b>From Huawei</b> on <b>June 01 , 2013</b>
                  </h6>
                  <p>It's amazing</p>
                </div>
              </div>
              <div className="reviews border-bottom">
                <div className="review">
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    edit={true}
                    activeColor="#ffd780"
                  />
                  <h6>Bill Walker</h6>
                  <h6>
                    <b>From Motorola</b> on <b>August 13 , 2020</b>
                  </h6>
                  <p>How nice it's.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProductCard;
