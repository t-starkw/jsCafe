import React from "react";

const ShoppingCart = (newCart) => {
  // const newCart = 
  return (
      <div>
        {newCart &&
          newCart.map((item) => (
            <div>
              <h4>
                {item.product_name} <br />
              </h4>
              <p>
                {item.price} <br />
              </p>
            </div>
          ))}
      </div>
  );
};

export default ShoppingCart;