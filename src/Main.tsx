import React from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Main = () => {
  const Main = css`
    color: red;
  `
  return (
    <div>
      <div css={Main}>MainPage</div>
    </div>
  )
}

export default Main;