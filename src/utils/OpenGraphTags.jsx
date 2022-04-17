import React from "react";

const OpenGraphTags = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://bazar-react.vercel.app/landing"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Zen Yoga - Ser Zen" />
      <meta
        property="og:description"
        content="En un estat de zen, ens retrobem amb els nostres desitjos més profunds una vegada més, només sense les pors que acompanyen els perseguir-los."
      />
      <meta property="og:image" content="/assets/images/landing/preview.png" />
    </React.Fragment>
  );
};

export default OpenGraphTags;
