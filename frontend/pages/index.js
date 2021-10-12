import React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Articles from "../components/articles";
import Seo from "../components/seo";
import Image from "../components/image";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

import Copyright from "../src/Copyrigth";

const Home = ({ articles, homepage, global }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <AppBar position="relative">
        <Container>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Medeironeto.com
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <Articles articles={articles} />
          </div>
        </div>
        <Copyright />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
