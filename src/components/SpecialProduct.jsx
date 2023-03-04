import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="col-12 col-lg-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/samsungnote10.avif" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsumg Galaxy Note 10+ Mobile Phone;<br/> Sim...
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={true}
              activeColor="#ffd700"
            />
            <p className="price">
                <span className="red-p">$ 100</span> &nbsp; <strike>$ 200</strike>
            </p>
            
                <div className="prod-count my-3">
                  <p>Products: 5</p>
                  <div className="progress">
                    <div 
                      className="progress-bar"
                      role="progressbar"
                      style={{"width": "25%"}}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100">
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
