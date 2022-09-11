import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Loader from "../layout/Loader/Loader";

const ProductDetails = () => {
  const [price, setPrice] = useState();
  const [length, setLength] = useState("");
  const [color, setColor] = useState("");
  const [density, setDensity] = useState("");
  const [ship, setShip] = useState("");
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
      product && product.variants && setColor(product.variants[0].hairColor);
      product && product.variants && setPrice(product.variants[0].price);
      product && product.variants && setShip(product.variants[0].shipFrom);
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

                      <ToggleButtonGroup
                        variant="outlined"
                        aria-label="options"
                        value={length}
                        onClick={(e) => {
                          console.log("nauman  :" + e.target.value);
                          setLength(e.target.value);
                          var variant = product.variants.filter(
                            (item) =>
                              item.length === e.target.value &&
                              item.density === density &&
                              item.shipFrom === ship &&
                              item.hairColor === color
                          );
                          if (variant.length > 0) {
                            console.log(variant);
                            setPrice(variant[0].price);
                          }
                        }}
                        exclusive
                      >
                        {product.length ? (
                          product.length.map((item, i) => (
                            <ToggleButton aria-label="length" value={item}>
                              {item}
                            </ToggleButton>
                          ))
                        ) : (
                          <hr />
                        )}
                      </ToggleButtonGroup>
                    </div>
                    <div className="density">
                      {product.density ? <h4>Density</h4> : <hr />}
                      <ToggleButtonGroup
                        aria-label="options"
                        variant="outlined"
                        value={density}
                        onClick={(e) => {
                          console.log("density is: " + e.target.value);
                          setDensity(e.target.value);
                          var variant = product.variants.filter(
                            (item) =>
                              item.length === length &&
                              item.density === e.target.value &&
                              item.hairColor === color &&
                              item.shipFrom === ship
                          );
                          if (variant.length > 0) {
                            console.log(variant);
                            setPrice(variant[0].price);
                          }
                        }}
                        exclusive
                      >
                        {product.density ? (
                          product.density.map((item, i) => (
                            <ToggleButton aria-label="density" value={item}>
                              {item}
                            </ToggleButton>
                          ))
                        ) : (
                          <hr />
                        )}
                      </ToggleButtonGroup>
                    </div>

                    <div className="color">
                      {product.hairColor ? <h4>Hair Color</h4> : <hr />}
                      <ToggleButtonGroup
                        aria-label="options"
                        variant="outlined"
                        value={color}
                        onClick={(e) => {
                          console.log(e.target.value);
                          setColor(e.target.value);
                          var variant = product.variants.filter(
                            (item) =>
                              item.length === length &&
                              item.density === density &&
                              item.shipFrom === ship &&
                              item.hairColor === e.target.value
                          );
                          if (variant.length > 0) {
                            console.log(variant);
                            setPrice(variant[0].price);
                          }
                        }}
                        exclusive
                      >
                        {product.hairColor ? (
                          product.hairColor.map((item, i) => (
                            <ToggleButton aria-label="color" value={item}>
                              {item}
                            </ToggleButton>
                          ))
                        ) : (
                          <hr />
                        )}
                      </ToggleButtonGroup>
                    </div>

                    <div className="ship">
                      {product.shipFrom ? <h4>Ship From</h4> : <hr />}
                      <ToggleButtonGroup
                        aria-label="options"
                        variant="outlined"
                        value={ship}
                        onClick={(e) => {
                          console.log(e.target.value);
                          setShip(e.target.value);
                          var variant = product.variants.filter(
                            (item) =>
                              item.length === length &&
                              item.density === density &&
                              item.hairColor === color &&
                              item.shipFrom === e.target.value
                          );
                          if (variant.length > 0) {
                            console.log(variant);
                            setPrice(variant[0].price);
                          }
                        }}
                        exclusive
                      >
                        {product.shipFrom ? (
                          product.shipFrom.map((item, i) => (
                            <ToggleButton aria-label="ship" value={item}>
                              {item}
                            </ToggleButton>
                          ))
                        ) : (
                          <hr />
                        )}
                      </ToggleButtonGroup>
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
