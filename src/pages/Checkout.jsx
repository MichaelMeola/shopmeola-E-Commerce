import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CssBaseline,
  AppBar,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import AddressForm from "../components/checkout/AddressForm.jsx";
import PaymentForm from "../components/checkout/PaymentForm.jsx";
import Review from "../components/checkout/Review.jsx";
import ShopNavbar from "../navbars/ShopNavbar.jsx";
import {
  useCartProducts,
  useAddressFormStore,
  usePaymentFormStore,
  useOrderStore,
} from "../state/ZustandState.jsx";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/home">
        shopmeola.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, clearCart } = useCartProducts();
  const { order, setOrder } = useOrderStore();
  const { firstName, lastName, address, city, state, zip, country } =
    useAddressFormStore();
  const { cardName, cardNumber, expiryDate, cvv } = usePaymentFormStore();

  const handlePlaceOrder = () => {
    const orderData = {
      cart: [...cart],
      shippingAddress: {
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        country,
      },
      paymentDetails: {
        cardName,
        cardNumber,
        expiryDate,
        cvv,
      },
    };

    setOrder(orderData);
    clearCart();
    setOrderPlaced(true);
  };

  console.log(order);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handlePlaceOrder();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <>
      <ShopNavbar />
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {orderPlaced ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #1.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <Copyright />
      </Container>
    </>
  );
}
