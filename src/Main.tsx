import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Main = () => {
  const bgcolor = css`
    background-color:red;
  `
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div css={bgcolor}>fjdkasl</div>
        <button onClick={() => navigate('/game')}>ToMainPage</button>
      </div>
    </div>
  )
}

export default Main