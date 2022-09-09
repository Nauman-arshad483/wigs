import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Loader from "../layout/Loader/Loader";

const ProductDetails = () => {
  const [price, setPrice] = useState();
  const [length, setLength] = useState("");
  const [color, setColor] = useState("");
  const [density, setDensity] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  const { product, loading } = useSelector((state) => state.productDetails);

  useEffect(() => {
    const InitVariant = () => {
      console.log(product, "asda");
      product && product.variants && setLength(product.variants[0].length);
      product && product.variants && setDensity(product.variants[0].density);
      product && product.variants && setColor(product.variants[0].color);
      product && product.variants && setPrice(product.variants[0].price);
    };
    InitVariant();
  }, [product]);

  //         // for (let i = 0; i < ss.length; ss++) {
  //         //   SetPrice(ss[i].price);
  //         //   SetLengthSelected(ss[i].length);
  //         //   break;
  //         // }
  //    });

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
                      <p>{`$ ${price}`}</p>
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
                            checked={length === item}
                            key={i}
                            onClick={(e) => {
                              setLength(e.target.value);
                              var variant = product.variants.filter(
                                (item) =>
                                  item.length === e.target.value &&
                                  item.density === density &&
                                  item.color === color
                              );
                              if (variant.length > 0) {
                                console.log(variant)
                                setPrice(variant[0].price);
                              }
                            }}
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
                        product.density.map((item, i) => (
                          <Button
                            className="density_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            key={i}
                            value={item}
                            checked={density === item}
                            onChange={(e) => {
                              setDensity(e.target.value);
                              var variant = product.variants.filter(
                                (item) =>
                                  item.length === length &&
                                  item.density === e.target.value &&
                                  item.color === color
                              );
                              if (variant.length > 0) {
                                console.log(variant)
                                setPrice(variant[0].price);
                              }
                            }}
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
                        product.hairColor.map((item, i) => (
                          <Button
                            className="hairColor_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            value={item}
                            key={i}
                            checked={color === item}
                            onClick={(e) => {
                              setColor(e.target.value);
                              var variant = product.variants.filter(
                                (item) =>
                                  item.length === length &&
                                  item.density === density &&
                                  item.color === e.target.value
                              );
                              if (variant.length > 0) {
                                console.log(variant)
                                setPrice(variant[0].price);
                              }
                            }}
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
