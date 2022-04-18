import type { NextPage } from "next";
import { Container, Grid, Typography } from "@mui/material";

const HomePage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Main Page
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
