import React, { Fragment, useEffect } from "react";
import banner1_image from "../images/Trendy_Fashion_Banner.png";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Innovtiviewigs" />
      <div className="banner_section">
        <div className="banner">
          <img src={banner1_image} alt=""></img>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="homeHeading">Featured Collection</h2>
          <div className="container" id="container_p">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

