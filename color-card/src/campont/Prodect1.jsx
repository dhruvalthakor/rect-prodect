import React from "react";
import { ProductData } from "./Data";
function Prodect1() {

function maincart(prodect) {
  
   return(
    <li key={prodect.id}>
    <div className="card pb-2 p-1 bg-success-subtle" style={{ width: 300, height: 400 }}>
      <img
        src={prodect.image}
        className="card-img-top object-fit-contain h-50"
        alt={prodect.title}
      />
      <div className="card-body">
        <h5 className="card-title">{prodect.title.slice(0, 40)}</h5>
        <p className="card-text">{prodect.description.slice(0, 75)}</p>

        <a href="#" className="btn btn-dark w-100">
          {prodect.price}
        </a>
      </div>
    </div>
  </li>
   )
  
}










  const cart = ProductData.map((prodect) => (
    maincart(prodect)
  ));

  // man
    const man=ProductData.map((prodect) => {
        if (prodect.category=="men's clothing") {
        return  maincart(prodect)
        }
});

// WOMEN
const WOMEN=ProductData.map((prodect) => {
  if (prodect.category=="women's clothing") {
  return  maincart(prodect)
  }
});

// electronics
const electronics=ProductData.map((prodect) => {
  if (prodect.category=="electronics") {
  return  maincart(prodect)
  }
});

// jewelery
const jewelery=ProductData.map((prodect) => {
  if (prodect.category=="jewelery") {
  return  maincart(prodect)
  }
});


  return (
    <>
      <div className="container mt-5">

      {/* Prodect */}
        <div>
          <h1 className=" text-center text-bg-dark py-2">Prodect</h1>
          <ul className="d-flex flex-wrap gap-4 mt-5 list-unstyled justify-content-center">
            {cart}
          </ul>
        </div>

        {/* MEN */}
        <div className="mt-5">
          <h1 className=" text-center text-bg-dark py-2">MEN</h1>
          <ul className="d-flex flex-wrap gap-4 mt-5 list-unstyled">
            {man}
            </ul>
        </div>

        {/* WOMEN */}
        <div className="mt-5">
          <h1 className=" text-center text-bg-dark py-2">WOMEN</h1>
          <ul className="d-flex flex-wrap gap-4 mt-5 list-unstyled">
            {WOMEN}
            </ul>
        </div>

        {/* electronics */}
        <div className="mt-5">
          <h1 className=" text-center text-bg-dark py-2">electronics</h1>
          <ul className="d-flex flex-wrap gap-4 mt-5 list-unstyled">
            {electronics}
            </ul>
        </div>


        {/* jewelery */}
        <div className="mt-5">
          <h1 className=" text-center text-bg-dark py-2">jewelery</h1>
          <ul className="d-flex flex-wrap gap-4 mt-5 list-unstyled">
            {jewelery}
            </ul>
        </div>
      </div>
    </>
  );
}

export default Prodect1;
