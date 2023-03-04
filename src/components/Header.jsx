import React from "react";
import { Link } from "react-router-dom";
import accountImg from "../images/acc.png";
import basketImg from "../images/basket.png";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import "../langConfig/i18n";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handlerClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { totalItems } = useCart();

  const getName = localStorage.getItem("name");

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <div className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="#h">
                  +91 8264954234
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="fs-1 text-white">
            Digitic.
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item">
                <Link className="dropdown-item nav-link text-white" to="/">
                  {t("navbar.1")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="dropdown-item nav-link text-white"
                  to="/product"
                >
                  {t("navbar.2")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="dropdown-item nav-link text-white" to="/blogs">
                  {t("navbar.3")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="dropdown-item nav-link text-white"
                  to="/contact"
                >
                  {t("navbar.4")}
                </Link>
              </li>
            </ul>
            <ul className=" d-flex p-0 text-uppercase align-items-center">
              <li className="nav-item d-flex">
                <button
                  className="btn"
                  onClick={() => {
                    handlerClick("en");
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/2048px-United-kingdom_flag_icon_round.svg.png"
                    style={{ width: "29px", height: "29px" }}
                    alt="eng"
                  />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handlerClick("az");
                  }}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/012/624/885/original/azerbaijan-flag-icon-free-png.png"
                    style={{ width: "39px", height: "39px" }}
                    alt="aze"
                  />
                </button>
              </li>
            </ul>
            <ul className=" d-flex p-0 text-uppercase justify-content-between align-items-center">
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <button
                    className="
                      btn 
                      btn-secondary 
                      dropdown-toggle 
                      bg-dark 
                      border-0 
                      gap-15
                      d-flex 
                      align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="d-inline-block">
                      <img src={accountImg} width={40} alt="account" />
                      &nbsp;{getName}
                    </span>
                  </button>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <Link
                        to="/login"
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img
                          src="/images/acc.png"
                          id="account-img"
                          width={40}
                          alt="account"
                        />
                        <p className="mb-0">{t("login.1")}</p>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-item bg-dark text-white">
                        <button
                          className="bg-dark border-0"
                          style={{ width: "85px", fontSize: "15px" }}
                        >
                          <Link
                            to="/"
                            className="dropdown-item sub_page_title bg-dark text-white text-uppercase"
                            onClick={handleClick}
                          >
                            {t("logout.1")}
                          </Link>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/shopcart"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src={basketImg} width={40} alt="basket" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">
                      {totalItems}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
