import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import "../langConfig/i18n";


const Cart = () => {

  const { t } = useTranslation();

  const {
    totalItems,
    totalUniqueItems,
    cartTotal,
    emptyCart,
    isEmpty,
    updateItemQuantity,
    removeItem,
    items,
  } = useCart();

  if (isEmpty)
    return (
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
    );

  const getUserName = localStorage.getItem("username");
  const getPassword = localStorage.getItem("password");

  const handleClick = () => {
    if (getUserName && getPassword) {
      window.location.assign("/");
      emptyCart();
      alert("Successfully completed");
    } else {
      alert("Login olun");
      window.location.assign("/login");
    }
  };

  return (
    <>
      <Meta title={"Shopping Cart"} />
      <BreadCrumb title="Shopping Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{t('shopcart.1')}</th>
                  <th scope="col">{t('shopcart.2')}</th>
                  <th scope="col">{t('shopcart.3')}</th>
                  <th scope="col">{t('shopcart.4')}</th>
                  <th scope="col">{t('shopcart.5')}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((fditem, i) => {
                  return (
                    <tr key={fditem.id}>
                      <th scope="row">{i + 1}</th>
                      <td>
                        <img src={fditem.storeImg1} alt="" width={"70px"} />
                      </td>
                      <td>{fditem.title}</td>
                      <td>{fditem.price} $</td>
                      <td>
                        <button
                          className="btn btn-danger btn-xs"
                          onClick={() =>
                            updateItemQuantity(fditem.id, fditem.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="mx-2">{fditem.quantity}</span>
                        <button
                          className="btn btn-success btn-xs"
                          onClick={() =>
                            updateItemQuantity(fditem.id, fditem.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(fditem.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger" onClick={() => emptyCart()}>
          {t('shopcart.6')}
          </button>
          <div className=" py-2 mt-4">
            <div className="d-flex flex-column align-items-end">
              <div className="d-flex flex-column align-items-end">
                <h6 className="mt-3">{t('shopcart.7')} : {totalUniqueItems}</h6>
                <h6 className="mt-3">{t('shopcart.8')} : {totalItems}</h6>
                <h4>{t('shopcart.9')}: $ {cartTotal}</h4>
                <p>{t('shopcart.10')}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/product" className="button me-3">
              {t('shopcart.11')}
              </Link>
              <Link to="/shopcart" className="button" onClick={handleClick}>
              {t('shopcart.12')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
