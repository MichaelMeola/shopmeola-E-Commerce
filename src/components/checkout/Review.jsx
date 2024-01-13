import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import {
  useCartProducts,
  useAddressFormStore,
  usePaymentFormStore,
  useOrderStore
} from "../../state/ZustandState.jsx";

export default function Review() {
  const { cart, cartTotalPrice } = useCartProducts();
  const { order, setOrder } = useOrderStore()
  
  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    country,
  } = useAddressFormStore();

  const {
    cardName,
    cardNumber,
    expiryDate,
    cvv
  } = usePaymentFormStore()



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={
                <>
                  {product.size && (
                    <span>
                      Size: {product.size}
                      <br />
                    </span>
                  )}
                  <span>
                    Quantity: {product.quantity} x {product.price}
                  </span>
                </>
              }
            />
            <Typography variant="body2">
              ${(+product.price.slice(1) * product.quantity).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cartTotalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping Address
          </Typography>
          <Typography gutterBottom>{firstName} {lastName}</Typography>
          <Typography gutterBottom>{address}, {city}, {state}, {zip}, {country} </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Holder:</Typography>
                  <Typography gutterBottom>Card Number:</Typography>
                  <Typography gutterBottom>Expiry Date:</Typography>
                  <Typography gutterBottom>CVV:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardName}</Typography>
                  <Typography gutterBottom>{cardNumber}</Typography>
                  <Typography gutterBottom>{expiryDate}</Typography>
                  <Typography gutterBottom>{cvv}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
