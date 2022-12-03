import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Product.css";
const Product = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `https://reveal-store-backend.herokuapp.com/products/${id}`
      );
      setProduct(response.data);
    }
    getProduct();
  }, []);

  return (
    // <div>
    //     <h1>{product.name}</h1>
    //     <img src= {product.image} />
    //     <h2>${product.price}.00</h2>
    //     <h3>{product.description}</h3>
    // </div>

    <section className="product">
      <div className="pu0-margin-bottom-sm">
        <nav className="breadcrumbs pu0-text-sm" aria-label="Breadcrumbs">
          <ol className="pu0-flex pu0-flex-wrap pu0-gap-2xs">
            <li className="breadcrumbs__item">
              <Link to="/">
                <a href="#0" className="pu0-color-inherit">
                  Shop
                </a>
              </Link>
              <span
                className="pu0-color-contrast-low pu0-margin-left-2xs"
                aria-hidden="true"
              >
                /
              </span>
            </li>
            <li className="breadcrumbs__item">
              <a href="#0" className="pu0-color-inherit">
                Tees
              </a>
              <span
                className="pu0-color-contrast-low pu0-margin-left-2xs"
                aria-hidden="true"
              >
                /
              </span>
            </li>
            <li className="breadcrumbs__item" aria-current="page">
              Tee Name
            </li>
          </ol>
        </nav>
      </div>
      <div className="pu0-grid pu0-gap-md">
        <div className="pu0-col-6@md pu0-col-7@lg">
          <figure className="image-zoom js-image-zoom ">
            <img
              className="image-zoom__preview js-image-zoom__preview"
              src={product.image}
              alt="Hemingway is a cute cat name"
            />
            <figcaption className="pu0-sr-only">Image Caption</figcaption>
          </figure>
        </div>
        <div className="pu0-col-6@md pu0-col-5@lg">
          <div className="pu0-margin-bottom-xs">
            <h1>{product.name}</h1>
          </div>
          <div className="pu0-flex">
            <div className="rating rating--read-only js-rating js-rating--read-only pu0-text-xs">
              <p className="pu0-sr-only">
                The rating of this product is{" "}
                <span className="rating__value js-rating__value">4.5</span> out
                of 5
              </p>
              <div className="rating__control rating__control--is-hidden js-rating__control">
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <polygon
                    points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <p className="pu0-margin-left-2xs">
              <a href="#0" className="pu0-text-sm pu0-color-inherit">
                65 reviews
              </a>
            </p>
          </div>
          <div className="pu0-text-component pu0-text-gap-md pu0-margin-y-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              iste fugiat. Perferendis commodi, est a aspernatur aperiam odit
              tempora consequuntur.
            </p>
            <p className="pu0-text-md">
              <del className="pu0-text-line-through pu0-color-contrast-medium pu0-margin-right-2xs">
                ${product.price}
              </del>
              <ins className="pu0-text-decoration-none">$29</ins>
            </p>
          </div>
          <div className="pu0-margin-bottom-md">
            <p className="pu0-sr-only">Select size:</p>
            <div className="btns pu0-inline-flex pu0-gap-xs btns--radio">
              <div>
                <input
                  type="radio"
                  name="sizeBtns"
                  id="sizeBtnsS"
                  defaultChecked=""
                />
                <label className="btns__btn" htmlFor="sizeBtnsS">
                  S
                </label>
              </div>
              <div>
                <input type="radio" name="sizeBtns" id="sizeBtnsM" />
                <label className="btns__btn" htmlFor="sizeBtnsM">
                  M
                </label>
              </div>
              <div>
                <input type="radio" name="sizeBtns" id="sizeBtnsL" />
                <label className="btns__btn" htmlFor="sizeBtnsL">
                  L
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="sizeBtns"
                  id="sizeBtnsXL"
                  disabled=""
                />
                <label
                  className="btns__btn btns__btn--disabled"
                  htmlFor="sizeBtnsXL"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="pu0-flex pu0-gap-xs">
            <label className="pu0-form-label pu0-sr-only" htmlFor="qtyInput">
              Quantity:
            </label>
            <div className="number-input number-input--v1 js-number-input ">
              <input
                className="pu0-form-control js-number-input__value"
                type="number"
                name="qtyInput"
                id="qtyInput"
                min={0}
                max={10}
                step={1}
                defaultValue={1}
              />
              <div className="number-input__btns">
                <button
                  className="number-input__btn number-input__btn--plus js-number-input__btn"
                  aria-label="Increase Number"
                >
                  <svg className="pu0-icon" viewBox="0 0 8 8">
                    <path d="M7.909,6.213l-3.5-5a.52.52,0,0,0-.82,0l-3.5,5A.5.5,0,0,0,.5,7h7a.5.5,0,0,0,.409-.787Z" />
                  </svg>
                </button>
                <button
                  className="number-input__btn number-input__btn--minus js-number-input__btn"
                  aria-label="Decrease Number"
                >
                  <svg className="pu0-icon" viewBox="0 0 8 8">
                    <path d="M7.909,1.8l-3.5,5a.519.519,0,0,1-.82,0l-3.5-5A.5.5,0,0,1,.5,1.013h7a.5.5,0,0,1,.409.787Z" />
                  </svg>
                </button>
              </div>
            </div>

            <button className="pu0-btn pu0-btn--primary pu0-flex-grow">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
