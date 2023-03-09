import React from "react";
import { Helmet } from "react-helmet-async";

const Head = (props) => {
  return (
    <Helmet>
      <title>اكاديمية الشباب - {props.title}</title>
      <meta name="description" content={props.des} />
    </Helmet>
  );
};

export default Head;
