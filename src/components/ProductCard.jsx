import alertify from "alertifyjs";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";

const ProductCard = ({
  headp,
  titlep,
  storeImg1p,
  storeImg2p,
  pricep,
  storeItems,
}) => {
  const { addItem } = useCart();
  return (
    <div className="col-12 col-md-6 col-xl-4 mt-5">
      <div className="product-card card border-0 position-relative">
        <div className="wishlist-icon position-absolute">
          <button
            onClick={() => (
              addItem(storeItems),
              alertify.success(`${headp} + ${titlep} added to card`)
            )}
            className="border-0 bg-transparent"
          >
            <img src="images/add-card.png" alt="addcart" width={"30px"} />
          </button>
        </div>
        <div className="product-image">
          <img
            src={storeImg1p}
            className="img-fluid"
            alt="productimage"
            width={"250px"}
          />
          <img
            src={storeImg2p}
            className="img-fluid"
            alt="productimage"
            width={"250px"}
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{headp}</h6>
          <h5 className="product-title">{titlep}</h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={true}
            activeColor="#ffd700"
          />
          <p className="price">$ {pricep}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
