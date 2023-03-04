import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import {
  storeItems,
  headphones,
  watches,
  cameras,
  phones,
  laptops,
} from "../Data/Data";
import ProductCard from "../components/ProductCard";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import "../langConfig/i18n";

const OurStore = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = storeItems.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const [all, setAll] = useState("d-flex flex-wrap");
  const [headphone, setHeadphones] = useState("d-none");
  const [watch, setWatch] = useState("d-none");
  const [camera, setCamera] = useState("d-none");
  const [phone, setPhone] = useState("d-none");
  const [laptop, setLaptop] = useState("d-none");

  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumb title={"Our Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 col-xl-3">
            <div className="row d-flex justify-content-between">
              <div className="col-12 py-3 bg-white navbar-expand-lg">
                <div className="d-flex align-items-center">
                  <button
                    className="navbar-toggler btn bg-white bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#filterSupportedContent"
                    aria-controls="filterSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span>
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/alicloud-official-website/filter-32.png"
                        width={"30px"}
                        alt=""
                      />
                    </span>
                  </button>
                  <h3 className="filter-title m-0 ms-2">{t("filterHead.1")}</h3>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="filterSupportedContent"
                >
                  <div className="card card-body border-0">
                    <div className="filter-card mb-3">
                      <div>
                        <div className="d-flex flex-wrap flex-xl-column align-items-start">
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-flex flex-wrap");
                                setHeadphones("d-none");
                                setWatch("d-none");
                                setCamera("d-none");
                                setPhone("d-none");
                                setLaptop("d-none");
                              }}
                              className="btn btn-success"
                            >
                              {t("filterTitle.1")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-none");
                                setHeadphones("d-flex flex-wrap");
                                setWatch("d-none");
                                setCamera("d-none");
                                setPhone("d-none");
                                setLaptop("d-none");
                              }}
                              className="btn btn-secondary"
                            >
                              {t("filterTitle.2")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-none");
                                setHeadphones("d-none");
                                setWatch("d-flex flex-wrap");
                                setCamera("d-none");
                                setPhone("d-none");
                                setLaptop("d-none");
                              }}
                              className="btn btn-secondary"
                            >
                              {t("filterTitle.3")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-none");
                                setHeadphones("d-none");
                                setWatch("d-none");
                                setCamera("d-flex flex-wrap");
                                setPhone("d-none");
                                setLaptop("d-none");
                              }}
                              className="btn btn-secondary"
                            >
                              {t("filterTitle.4")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-none");
                                setHeadphones("d-none");
                                setWatch("d-none");
                                setCamera("d-none");
                                setPhone("d-flex flex-wrap");
                                setLaptop("d-none");
                              }}
                              className="btn btn-secondary"
                            >
                              {t("filterTitle.5")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-none");
                                setHeadphones("d-none");
                                setWatch("d-none");
                                setCamera("d-none");
                                setPhone("d-none");
                                setLaptop("d-flex flex-wrap");
                              }}
                              className="btn btn-secondary"
                            >
                              {t("filterTitle.6")}
                            </button>
                          </div>
                          <div className="form-check p-0 mx-1">
                            <button
                              onClick={() => {
                                setAll("d-flex flex-wrap");
                                setHeadphones("d-none");
                                setWatch("d-none");
                                setCamera("d-none");
                                setPhone("d-none");
                                setLaptop("d-none");
                              }}
                              className="btn btn-danger"
                            >
                              {t("filterTitle.7")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 col-xl-12 mt-3 filter-card">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watch
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Phone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet & Laptop
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-12 filter-card mt-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products  d-flex">
                    <div className="w-50">
                      <img
                        src="images/random-1.avif"
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/random-2.avif"
                        className="img-fluid"
                        alt="random"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-9">
            <div className="products-list gap-15 d-flex flex-column pb-5">
              <div className="col-12 mt-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder={t("search.1")}
                    aria-label={t("search.1")}
                    aria-describedby="basic-addon2"
                    value={filter}
                    onChange={searchText.bind(this)}
                  />
                  {/* <span className="input-group-text p-3" id="basic-addon2">
                    <BsSearch className="fs-6" />
                  </span> */}
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className={`row ${all}`}>
                  {dataSearch.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`storeItems.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
                <div className={`row ${headphone}`}>
                  {headphones.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`headphones.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
                <div className={`row ${watch}`}>
                  {watches.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`watches.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
                <div className={`row ${camera}`}>
                  {cameras.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`cameras.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
                <div className={`row ${phone}`}>
                  {phones.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`phones.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
                <div className={`row ${laptop}`}>
                  {laptops.map((i, j) => (
                    <ProductCard
                      key={j}
                      storeImg1p={i.storeImg1}
                      storeImg2p={i.storeImg2}
                      headp={i.head}
                      titlep={t(`phones.${j + 1}`)}
                      pricep={i.price}
                      storeItems={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
