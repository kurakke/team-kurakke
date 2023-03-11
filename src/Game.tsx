import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Game = () => {
  const bgcolor = css`
    background-color:red;
  `
  const navigate = useNavigate();
  return (
    <div>
      <h2 css={bgcolor}>GamePage</h2>
    </div>
  )
}

export default Game