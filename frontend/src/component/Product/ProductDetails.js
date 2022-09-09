import React, { Fragment, useEffect,useState  } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Loader from "../layout/Loader/Loader";

const ProductDetails = () => {
  const [checked, setChecked] = useState(false);
  const[prod, setProd]=useState([]);
  const[length, setLength]=useState("");
  const[color, setColor]=useState("");
  const[density,setDensity]=useState("")
  const [first, setFirst] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
 
  function initialize_variant(){
    console.log("hello nuaman");
    { product.variants && product.variants[0] && (
      setFirst(product.variants[0])
    )}
  
    setLength(first.length);
    setDensity(first.density);
    setColor(first.hairColor);
   }
  useEffect(() => {
    dispatch(getProductDetails(id));
    console.log(product);
    setProd(product);
  }, [dispatch,id]);
 
  useEffect(() => {
    
    console.log("nauman")
    console.log(prod);
    // { product.variants && product.variants[0] && (
    //   setFirst(product.variants[0])
    // )}
  
    // console.log(first.length);
    // console.log(first.density);
    // console.log(first.hairColor);
    // setLength(first.length);
    // setDensity(first.density);
    // setColor(first.hairColor);
    
  }, []);

  // useEffect(() => {
  //   console.log(length);
  //   console.log(density);
  //   console.log(color);
   
    
  // });


 
// useEffect(() => {
   
//     console.log("before ss")
//     // condition ? exprIfTrue : exprIfFalse
//     console.log(product.variants);
//     let arr1=product.variants;
//     let ss = arr1.filter((item) => {
//           let length=14;
//           return item.length === length;
        
//         });
//     console.log(ss);

      
//           // return(item.length===length)?item:"not found";
//           // return(item.length===length&&item.hairColor===color&&item.density===density)?item:"not found";

//           // if(item.length===length&&item.hairColor===color&&item.density==density)
//           // return vari;

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
                            checked={length}
                            onClick={()=>{
                              setLength(item)
                              setChecked(!checked)
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
                        product.density.map((item) => (
                          <Button
                            className="density_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            checked={density}
                            onClick={()=>{
                              setDensity(item)
                              setChecked(!checked)
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
                        product.hairColor.map((item) => (
                          <Button
                            className="hairColor_bt bt"
                            size="large"
                            variant="outlined"
                            type="radio"
                            checked={color}
                            onClick={()=>{
                              setColor(item)
                              setChecked(!checked)
                            }
                          }
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
