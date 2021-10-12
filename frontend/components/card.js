import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Typography, Chip } from "@mui/material";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={article.image} />
          </div>
          <div className="uk-card-body" style={{ padding: 8 }}>
            <Chip
              id="category"
              label={article.hat}
              style={{
                position: "absolute",
                backgroundColor: "#333333",
                color: "#FFF",
                borderRadius: 4,
                height: 24,
                marginTop: -32,
                marginLeft: -8,
              }}
              className="uk-text-uppercase"
            />
            <Typography
              variant="body1"
              style={{ fontWeight: "500", color: "#0088CC" }}
            >
              {article.title}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
