import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, Twitter, PlaceOutlined, MailOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import './Footer.css'

export default function Footer() {
  return (
    <Box
      component="footer"
      className="footer-styles"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
            <Link color="inherit" href="/home">
              About Us
            </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PlaceOutlined />
              Salt Lake City, Utah, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <MailOutline />
              meola@shopmeola.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Social Media
            </Typography>
            <Link
              href="https://www.instagram.com/meooola"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/meolaofficial" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/home">
              shopmeola.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            <Link color="inherit" href="/admin">
              Admin
            </Link>{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
