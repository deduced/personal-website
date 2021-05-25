import React from "react";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import "@fontsource/lato";
import "@fontsource/roboto";
import Header from "./Header";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Layout: React.FC<{}> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  {
    return (
      <>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              margin: 0;
            }
            * + * {
              margin-top: 1rem;
            }
            html,
            body {
              margin: 0;
              color: #555;
              font-family: "Roboto", sans-serif;
              font-size: 18px;
              line-height: 1.4;

              /* Remove margin for the div that gatsby mount into */
              > div {
                margin-top: 0;
              }
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;
              font-family: "Lato", sans-serif;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          `}
        />
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header />
        <main
          css={css`
            margin: 2rem auto 4rem;
            max-width: 90vw;
            width: 550px;
          `}
        >
          {children}
        </main>
      </>
    );
  }
};

export default Layout;
