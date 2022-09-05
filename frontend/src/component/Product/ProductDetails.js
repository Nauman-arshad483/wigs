import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Loader from "../layout/Loader/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const handleClick = (e) => {
    e.preventDefault();
    let ss = product.variants.filter((item) => {
      return item.length === e.target.value;
    });
    for (let i = 0; i < ss.length; ss++) {
      product.price = ss[i].price;
      break;
    }
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="section">
            <div className="ProductDetails">
              <div className="products_image">
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={item}
                        src={item}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>
              <div className="detailsBlock">
                <div className="mainBlock">
                  <div className="headerBlock">
                    <h2>{product.title}</h2>
                  </div>
                  <div className="bodyBlock">
                    <div className="price">
                      <p>{`$ ${product.price}`}</p>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div className="length">
                      {product.length ? <h4>Stretched Length</h4> : <hr />}
                      {product.length ? (
                        product.length.map((item, i) => (
                          <Button
                            className="length_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            value={item}
                            onClick={handleClick}
                          >
                            {item}
                          </Button>
                        ))
                      ) : (
                        <hr />
                      )}
                    </div>
                    <div className="density">
                      {product.density ? <h4>Density</h4> : <hr />}
                      {product.density ? (
                        product.density.map((item) => (
                          <Button
                            className="density_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            value={item}
                            onClick={handleClick}
                          >
                            {item}
                          </Button>
                        ))
                      ) : (
                        <hr />
                      )}
                    </div>

                    <div className="color">
                      {product.hairColor ? <h4>Hair Color</h4> : <hr />}
                      {product.hairColor ? (
                        product.hairColor.map((item) => (
                          <Button
                            className="hairColor_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            value={item}
                            onClick={handleClick}
                          >
                            {item}
                          </Button>
                        ))
                      ) : (
                        <hr />
                      )}
                    </div>
                    <div className="stockBlock">
                      <h6>In stock, ready to ship</h6>
                    </div>
                    <div className="orderButtons">
                      <Button className="bt1" variant="outlined">
                        Add To Cart
                      </Button>
                      <Button className="bt1" variant="contained">
                        Buy It Now
                      </Button>
                    </div>
                    <div className="description">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
