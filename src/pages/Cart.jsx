import React from "react";
import ShopNavbar from "../navbars/ShopNavbar.jsx";
import ProductListDisplay from "../components/cart/ProductListDisplay.jsx";
import OrderSummary from "../components/cart/OrderSummary.jsx";
import { Link } from "react-router-dom";
import { useCartProducts } from "../state/CartState.jsx";

const Cart = () => {
  const { cart, removeProduct, clearCart } = useCartProducts();
  // console.log(cart);

  const productList = cart.map((product) => (
    <ProductListDisplay key={product.productId} product={product} />
  ));

  return (
    <body>
      <ShopNavbar />
      <div className="box" id="cart">
        {cart.length === 0 ? (
          <>
            <h1 className="title is-4 mb-2">Your Shopping Cart Is Empty :(</h1>
            <Link className="button is-success is-medium" to="/shop">
              Shop Now
            </Link>
          </>
        ) : (
          <>
            <div>
              <h1 className="title is-4 mb-2">Your Shopping Cart</h1>
              {productList}
              <button onClick={() => clearCart()}>Clear Cart</button>
            </div>
            <div>
              <OrderSummary />
            </div>
          </>
        )}
      </div>
    </body>
  );
};

export default Cart;
