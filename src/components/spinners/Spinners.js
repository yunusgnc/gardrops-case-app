import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    showSpinner && (
      <div style={containerStyle}>
        <div className='sweet-loading'>
          <RingLoader color={"#36D7B7"} css={override} size={150} />
        </div>
      </div>
    )
  );
};

export default Spinner;
