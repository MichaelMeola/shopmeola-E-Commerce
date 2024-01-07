import React from "react";
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
console.log({ location})

let innerElement = null
switch (location.pathname) {
    case '/cart':
        innerElement = <div>CHECKOUT</div>
}

  return <div>Navbar {innerElement}</div>;
};

export default Navbar;
